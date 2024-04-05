import React, {useEffect, useState} from 'react';
import {BASE_URL} from "./db.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import SkeletonLoader from "./SkeletonLoader.jsx";
import Pagination from '@mui/material/Pagination';

const RestaurantList = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchRestaurants = (page) => {
        fetch(`${BASE_URL}/restaurants?page=${page}&limit=12`)
            .then(res => res.json())
            .then(data => {
                setRestaurantData(data.restaurants);
                setTotalPages(data.totalPages);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchRestaurants(currentPage);
    }, [currentPage]);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="flex flex-wrap gap-5 justify-center mt-5 transition-shadow">
                {isLoading ? (
                    <div><SkeletonLoader/></div>
                ) : (
                    restaurantData.length === 0 ? (
                        <div>No data found</div>
                    ) : (
                        <>
                            {restaurantData.map((restaurant, index) => (
                                <RestaurantCard
                                    key={index}
                                    restaurant={restaurant}
                                />
                            ))}
                        </>
                    )
                )}
            </div>
            <div className="flex justify-center my-5">
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                />
            </div>
        </div>
    );
};

export default RestaurantList;
