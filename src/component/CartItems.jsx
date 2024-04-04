import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Delete, Star} from "@mui/icons-material";
import {Button} from "@mui/material";
import {BASE_URL} from "./db.jsx";
import {decrement, increment, removeItem} from "../redux/slice/cartSlice.jsx";

const CartItems = () => {
    const {cartItems} = useSelector((state) => state.cart);
    const {user} = useSelector((state) => state.auth);


    const dispatch = useDispatch()
    const decreaseQuantity = (menu) => {

        let newQuantity = menu.quantity - 1;


            const menuItem = {...menu, quantity: newQuantity};
        if (menuItem.quantity>0){
            fetch(BASE_URL + "/cart/update/" + menu._id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(menuItem)
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Failed to update menu item");
                    }
                    return res.json();
                })
                .then(data => {
                    if (menuItem.quantity >= 1) {
                        dispatch(decrement(menuItem))
                    }
                })
                .catch(error => {
                    console.error("Error updating menu item:", error);
                    alert("Failed to update cart item");
                });
        }

    };


    const increaseQuantity = (menu) => {
        const menuItem = {...menu, quantity: menu.quantity + 1};
        fetch(BASE_URL + "/cart/update/" + menu._id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(menuItem)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to update menu item");
                }
                return res.json();
            })
            .then(data => {
                dispatch(increment(data))
            })
            .catch(error => {
                console.error("Error updating menu item:", error);
                alert("Failed to update cart item");
            });
    };


    const calculateItemPrice = () => {
        return cartItems.reduce((acc, cur)=> acc + cur.quantity * cur.restaurantMenu.menuItemPrice,0)
    };


    const removeFromCart = (item) => {
        fetch(BASE_URL + "/cart/remove/" + item._id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to update menu item");
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                dispatch(removeItem(data))
            })
            .catch(error => {
                console.error("Error updating menu item:", error);
                alert("Failed to update cart item");
            });

    };

    const payNow = () => {
        const options = {
            description: 'Sample Razorpay demo',
            currency: 'INR',
            amount: calculateItemPrice() * 100,
            name: 'Hunger Saviour',
            key: 'rzp_test_8gm05gh8gaDVho',
            image: 'https://i.imgur.com/FApqk3D.jpeg',
            prefill: {
                name: 'Srinivas Basha',
                email: 'dssrinivas02@gmail.com',
                phone: '6303010397',
            },
            theme: {
                color: '#14213d',
            },
            modal: {
                ondismiss: () => {
                    console.log('dismissed');
                },
            },
        };

        const callback = (paymentid) => {
            const orderData = {
                username: `${user.firstName} ${user.lastName}`,
                totalPrice: calculateItemPrice(),
                transactionId: paymentid.razorpay_payment_id,
                txnDateAndTime: new Date(),
                paymentStatus: "PAYMENT_SUCCESS"
            };

            fetch(BASE_URL + '/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            })
                .then(response => response.json())
                .then(data => {
                    const orderObj = {
                        username: `${user.firstName} ${user.lastName}`,
                        orderStatus: "ORDER_APPROVED",
                        totalPrice: calculateItemPrice(),
                        transactionId: data.transactionId,
                        orderItem: [...cartItems]
                    };

                    fetch(BASE_URL + '/order', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(orderObj)
                    })
                        .then(res => res.json())
                        .then(data => {
                            clearCartItems(user._id);
                        })
                        .catch(error => {
                            console.error('Error creating order:', error);
                            alert(error);
                        });
                })
                .catch(error => {
                    console.error('Payment failed or error:', error);
                    alert(error);
                });
        };

        const errorCallback = (error) => {
            console.error('Payment failed or error:', error);
            // Navigate to cart page
            // this.router.navigate(['dashboard/cart']);
        };

        options.handler = callback.bind(this);
        const rzp = new Razorpay(options);
        rzp.on('payment.failed', errorCallback);
        rzp.open();
    };



    const clearCartItems = async (id)=>{
        const res = await fetch(BASE_URL +"/remove/all/"+ id,{
            method:"DELETE"
        })
        const data = res.json();
        console.log(data)


    }





    return (
        <div className="mt-5 pt-4">
            {cartItems && cartItems.length > 0 ? (
                <>
                    {cartItems.map((item) => (
                        <div key={item._id} className="flex flex-wrap items-center gap-4 justify-center mb-3 p-1">
                            <div style={{height: "150px"}} className="lg:w-2/12">
                                <img src={item.restaurantMenu.menuImageUrl} alt={item.menuImageUrl}
                                     style={{
                                         width: "100%",
                                         height: "100%",
                                         objectFit: "cover",
                                         borderRadius: "0.2rem"
                                     }}
                                />
                            </div>
                            <div className="lg:w-2/12 flex flex-col items-left   w-full ">
                                <div className="font-bold mb-4 text-truncate">{item.restaurantMenu.menuItem}</div>
                                <div className="flex flex-row mb-3 font-bold">
                                    <span className="material-icons"><Star/></span>4.2
                                </div>
                                <div className="font-bold">₹{item.restaurantMenu.menuItemPrice}</div>
                            </div>
                            <div className="item-quantity lg:w-2/12">
                                <button className="text-[#FC8019] font-bold text-2xl"
                                        onClick={() => decreaseQuantity(item)}>
                                    -
                                </button>
                                <span className="p-5">{item.quantity}</span>
                                <button className="text-[#FC8019] font-bold text-2xl "
                                        onClick={() => increaseQuantity(item)}>
                                    +
                                </button>
                            </div>
                            <div className="item-price font-bold lg:w-2/12">
                                Total Price: Rs. {item.quantity * item.restaurantMenu.menuItemPrice}
                            </div>

                            <div className="col-lg-2">
                                <Button color="error" onClick={() => removeFromCart(item)}>
                                    <span className="material-icons"><Delete/></span>
                                </Button>
                            </div>


                        </div>


                    ))}

                    <div className="item-price flex justify-center ml-4 font-bold ">
                        Total Price: Rs. {calculateItemPrice()}
                    </div>
                    <div className="flex justify-center mt-2">
                        <Button sx={{
                            backgroundColor: "#FC8019",
                            color: "#fff",
                            ":hover": {
                                backgroundColor: "#d08e5e",
                                color: "#fff"
                            }
                        }} className="font-bold m-2" onClick={payNow}>
                            Checkout
                        </Button>
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center">
                    <div className="restaurant-card shadow">
                        <img src="https://www.vhv.rs/dpng/d/521-5212497_empty-cart-hd-png-download.png"
                             alt="Restaurant Photo"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartItems;
