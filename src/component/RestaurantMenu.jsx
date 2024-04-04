import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent} from '@mui/material';
import {Add, CurrencyRupee, Remove, Star} from '@mui/icons-material';
import {BASE_URL} from "./db.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decrement, increment} from "../redux/slice/cartSlice.jsx";

const RestaurantMenu = () => {
    const [expandedMenu, setExpandedMenu] = useState(null);
    const [restaurant, setRestaurant] = useState({});
    const {id} = useParams();
    const {user , isLogging} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state) => state.cart)

    const navigate = useNavigate()


    const handleToggleDescription = (menu) => {
        if (expandedMenu === menu) {
            setExpandedMenu(null);
        } else {
            setExpandedMenu(menu);
        }
    };

    const getRestaurantData = () => {
        fetch(BASE_URL + "/restaurants/" + id)
            .then(res => res.json())
            .then(data => setRestaurant(data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getRestaurantData();
    }, [id]);

    const decreaseQuantity = (menu) => {
        const menuItem = {...menu, quantity: menu.quantity - 1};
        fetch(BASE_URL + "/cart/update/" + menu._id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(menuItem)
        })
            .then(res => res.json())
            .then(data => {
                setRestaurant(prevState => ({
                    ...prevState,
                    restaurantMenu: prevState.restaurantMenu.map(item =>
                        item._id === data._id ? data : item
                    )
                }));
                dispatch(decrement(data));
            })
            .catch(error => console.error("Error updating menu item:", error));
    };

    const increaseQuantity = (menu) => {

        const menuItem = {...menu, quantity: menu.quantity + 1};
        console.log(menuItem)
        fetch(BASE_URL + "/cart/update/" + menu._id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(menuItem)
        })
            .then(res => res.json())
            .then(data => {
                dispatch(increment(data));
            })
            .catch(error => console.error("Error updating menu item:", error));
    };

    const addToCartItem = (menu) => {
        const menuItem = {
            id: menu._id,
            menuImageUrl: menu.menuImageUrl,
            menuItem: menu.menuItem,
            menuItemPrice: menu.menuItemPrice,
            menuType: menu.menuType,
            quantity: 1,
            userId:user._id
        };

        fetch(BASE_URL + "/cart/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(menuItem)
        })
            .then(res => res.json())
            .then(data => {
                dispatch(addToCart(data));
                getRestaurantData();
                console.log(data)
                alert("Added cart item successfully");
            })
            .catch(error => console.error("Error adding cart item:", error));
    };






    return (
        <div className="container flex flex-wrap items-center justify-center my-2 ">
            {restaurant?.restaurantMenu?.map((menu, index) => (
                <div key={index} className="container flex flex-wrap items-center justify-center my-2 p-5 ">
                    <div className="lg:w-7/12 p-0">
                        <div className="flex flex-col">
                            <div className="font-bold">{menu.menuItem}</div>
                            <div className="font-bold"><CurrencyRupee
                                style={{fontSize: "1.2rem"}}/> {menu.menuItemPrice}</div>
                            <div className="flex items-center font-bold">
                                <Star className="text-yellow-500"/>
                                {restaurant.rating}
                            </div>
                            <div className="text-secondary custom-scroll  m-1">
                                {menu?.description?.slice(0, 150)}
                                {menu?.description?.length > 150 && (
                                    <span>
                                        {expandedMenu === menu ? (
                                            <>
                                                {menu?.description}
                                                <button onClick={() => handleToggleDescription(menu)}
                                                        className="font-bold text-[#FC8019] underline">Show less
                                                </button>
                                            </>
                                        ) : (
                                            <button onClick={() => handleToggleDescription(menu)}
                                                    className="font-bold text-[#FC8019] underline">Show more</button>
                                        )}
                                    </span>
                                )}
                            </div>
                            <div className="text-secondary font-bold">{menu.menuType}</div>
                        </div>
                    </div>
                    <div className="lg:w-3/12">
                        <div style={{height: "150px"}} className="relative">
                            <img src={menu.menuImageUrl} alt={menu.menuImageUrl} className="w-full"
                                 style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.2rem"}}/>
                        </div>
                    </div>
                    <div className="lg:w-2/12">

                            {isLogging===true ? (
                                    <Card style={{ width: "200px", boxShadow: "none" }} className="no-shadow">
                                        <CardContent style={{ height: "150px" }} className="flex items-center justify-center">
                                            <Button onClick={() => addToCartItem(menu)} variant="contained" sx={{ backgroundColor: "#FC8019" }} className="font-bold text-light">
                                                Add To Cart
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ) : (
                                <Card style={{ width: "200px", boxShadow: "none" }} className="no-shadow">
                                    <CardContent style={{ height: "150px" }} className="flex items-center justify-center">
                                    <Button variant="contained" sx={{ backgroundColor: "#FC8019" }} className="font-bold text-light" onClick={() => navigate("/signin") }>
                                         Add to Cart
                                    </Button>
                                    </CardContent>
                                </Card>
                                )}

                    </div>
                </div>
            ))}

                { isLogging && cartItems.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <Button onClick={() => decreaseQuantity(item)} variant="contained"
                                    color="primary" className="font-bold text-light m-2"
                                    size="small"
                                    sx={{ backgroundColor: "#FC8019" }}><Remove /></Button>
                            <div className="font-bold text-muted p-2">{item.quantity}</div>
                            <Button onClick={() => increaseQuantity(item)} variant="contained"
                                    color="primary" className="font-bold text-xl text-light m-2"
                                    size="small" sx={{ backgroundColor: "#FC8019" }}><Add /></Button>
                        </div>
                    ))}

        </div>
    );
};

export default RestaurantMenu;
