import React, {useEffect, useState} from 'react';
import {Card, CardContent, Button} from '@mui/material';
import {CurrencyRupee, Star} from '@mui/icons-material';
import {BASE_URL, restaurantData} from "./db.jsx";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/slice/cartSlice.jsx";

const RestaurantMenu = () => {
    const [expandedMenu, setExpandedMenu] = useState(null);

    const [restaurant, setRestaurant] = useState({})

    const {id} = useParams()

    const dispatch = useDispatch()

    const handleToggleDescription = (menu) => {
        if (expandedMenu === menu) {
            setExpandedMenu(null);
        } else {
            setExpandedMenu(menu);
        }
    };

    function  getRestaurantData (){
        fetch(BASE_URL + "/restaurants/" + id).
        then(res => res.json()).
        then(data => setRestaurant(data)).
        catch((error) => {
            console.log(error)
            })
    }


    useEffect(() => {
      getRestaurantData()
    }, [id]);


    function decreaseQuantity(menu) {

    }

    function increaseQuantity(menu) {

    }

    function addToCartItem(menu) {
        // Create a new object with the necessary properties for the cart item
        const menuItem = {
            menuImageUrl: menu.menuImageUrl,
            menuItem: menu.menuItem,
            menuItemPrice: menu.menuItemPrice,
            menuType: menu.menuType,
            quantity: 1
        };

        // Update the menu item on the server
        fetch(BASE_URL + "/menus/" + menu._id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(menuItem) // Send menuItem instead of menu
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to update menu item");
                }
                return res.json();
            })
            .then(data => {
                // Dispatch addToCart action after successfully updating the menu item
                dispatch(addToCart(data));
                getRestaurantData()
                // Show success message
                alert("Added cart item successfully");
            })
            .catch(error => {
                console.error("Error updating menu item:", error);
                alert("Failed to add cart item");
            });
    }


    return (
        <div className="container flex flex-wrap items-center justify-center my-2 ">

            {restaurant?.restaurantMenu?.map((menu, index) => (
                <div
                    key={index}
                    className="container flex flex-wrap items-center justify-center my-2 p-5 "
                >
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
                                <button
                                    onClick={() => handleToggleDescription(menu)}
                                    className="font-bold text-[#FC8019] underline"
                                >
                                    Show less
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => handleToggleDescription(menu)}
                                className="font-bold text-[#FC8019] underline"
                            >
                                Show more
                            </button>
                        )}
                      </span>
                                )}
                            </div>
                            <div className="text-secondary font-bold">{menu.menuType}</div>
                        </div>
                    </div>
                    <div className="lg:w-3/12">
                        <div style={
                            {
                                height: "150px"
                            }
                        } className="relative">
                            <img
                                src={menu.menuImageUrl}
                                alt={menu.menuImageUrl}
                                className="w-full"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "0.2rem"
                                }}
                            />
                        </div>
                    </div>
                    <div className="lg:w-2/12">
                        <Card style={{width: "200px", boxShadow: "none"}} className=" no-shadow">
                            <CardContent style={{height: "150px"}} className="flex items-center justify-center">
                                {menu.quantity > 0 ? (
                                    <div className="flex items-center">
                                        <Button
                                            onClick={() => decreaseQuantity(menu)}
                                            variant="contained"
                                            color="primary"
                                            className="font-bold text-light m-2"
                                        >
                                            -
                                        </Button>
                                        <div className="font-bold text-muted">{menu.quantity}</div>
                                        <Button
                                            onClick={() => increaseQuantity(menu)}
                                            variant="contained"
                                            color="primary"
                                            className="font-bold  text-light m-2"
                                        >
                                            +
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={() => addToCartItem(menu)}
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#FC8019"
                                        }}
                                        className="font-bold text-light"
                                    >
                                        Add To Cart
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default RestaurantMenu;
