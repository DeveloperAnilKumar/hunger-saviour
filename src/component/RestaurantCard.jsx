import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import {Star} from '@mui/icons-material';
import {Link} from "react-router-dom";

const RestaurantCard = ({restaurant}) => {

    const mediaStyle = {
        height: 0,
        paddingTop: '56.25%',
    };

    return (
        <Link to={`/menu/${restaurant._id}`}>
        <Card style={{width: "250px"}}>
            <CardMedia
                style={mediaStyle}
                image={restaurant.imageUrl}
                title="Restaurant Photo"
            />
            <CardContent>
                <Typography variant="h6" component="div" className="font-bold truncate">
                    {restaurant.restaurantName}
                </Typography>
                <div className="flex items-center  font-bold">
                    <Star style={{fontSize: "1rem"}}
                          className="mr-1 bg-green-600 rounded-full   text-white"/> {restaurant.rating}
                </div>
                <Typography variant="body2" color="textSecondary" className="truncate">
                    {restaurant.menuTypes}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {restaurant.location}
                </Typography>
            </CardContent>
        </Card>
        </Link>
    );
};

export default RestaurantCard;
