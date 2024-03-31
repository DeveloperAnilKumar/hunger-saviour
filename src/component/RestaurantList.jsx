import React from 'react';
import {restaurantData} from "./db.jsx";
import RestaurantCard from "./RestaurantCard.jsx";

const RestaurantList = () => {
    return (
        <div className="flex flex-wrap  gap-5 justify-center mt-5">
            {restaurantData.map((restaurant, index) => (
                <RestaurantCard
                    key={index}
                    restaurant={restaurant}
                />
            ))}
        </div>
    );
};

export default RestaurantList;
