import React, {useEffect, useState} from 'react';
import {BASE_URL} from "./db.jsx";
import RestaurantCard from "./RestaurantCard.jsx";

const RestaurantList = () => {

    const [restaurantData, setRestaurantData] = useState([])


    useEffect(() => {
        fetch(BASE_URL + "/restaurants").then(res => res.json()).then(data => setRestaurantData(data.restaurants)).catch((error) => {
            console.log(error)
        })
    }, []);


    return (
        <div className="flex flex-wrap  gap-5 justify-center mt-5">
            {restaurantData?.map((restaurant, index) => (
                <RestaurantCard
                    key={index}
                    restaurant={restaurant}
                />
            ))}
        </div>
    );
};

export default RestaurantList;
