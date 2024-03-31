import React from 'react';
import { useSelector } from 'react-redux';
import { Delete, Star } from "@mui/icons-material";
import { Button } from "@mui/material";

const CartItems = () => {
    const { cartItems } = useSelector((state) => state.cart);

    const decreaseQuantity = (item) => {
        // Implement decrease quantity logic here
    };

    const increaseQuantity = (item) => {
        // Implement increase quantity logic here
    };

    const calculateItemPrice = (item) => {
        // Implement calculation of item price here
    };

    const removeFromCart = (item) => {
        // Implement remove from cart logic here
    };

    const payNow = () => {
        // Implement pay now logic here
    };

    return (
        <div className="mt-5 pt-4">
            {cartItems && cartItems.length > 0 ? (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex flex-wrap items-center gap-4 justify-center mb-3 p-1">
                            <div style={{ height: "150px" }} className="lg:w-2/12">
                                <img src={item.menuImageUrl} alt={item.menuImageUrl}
                                     style={{
                                         width: "100%",
                                         height: "100%",
                                         objectFit: "cover",
                                         borderRadius: "0.2rem"
                                     }}
                                />
                            </div>
                            <div className="lg:w-2/12 flex flex-col items-left   w-full ">
                                <div className="font-bold mb-4 text-truncate">{item.menuItem}</div>
                                <div className="flex flex-row mb-3 font-bold">
                                    <span className="material-icons"><Star/></span>4.2
                                </div>
                                <div className="font-bold">₹{item.menuItemPrice}</div>
                            </div>
                            <div className="item-quantity lg:w-2/12">
                                <button className="text-[#FC8019] font-bold text-2xl "
                                        onClick={() => decreaseQuantity(item)}>
                                    -
                                </button>
                                <span className="p-5">{1}</span>
                                <button className="text-[#FC8019] font-bold text-2xl "
                                        onClick={() => increaseQuantity(item)}>
                                    +
                                </button>
                            </div>
                            <div className="item-price font-bold lg:w-2/12">
                                {/*Total Price: Rs.{calculateItemPrice(item).toFixed(2)}*/}
                            </div>
                            <div className="col-lg-2">
                                <Button color="error" onClick={() => removeFromCart(item)}>
                                    <span className="material-icons"><Delete/></span>
                                </Button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-center mt-2">
                        <Button sx={{
                            backgroundColor:"#FC8019",
                            color:"#fff",
                            ":hover":{
                                backgroundColor:"#d08e5e",
                                color:"#fff"
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
