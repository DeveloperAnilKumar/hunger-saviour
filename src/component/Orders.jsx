import React, { useEffect, useState } from 'react';
import { Paper, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { BASE_URL } from './db.jsx';

export default function Orders() {
    const [orderData, setOrderData] = useState([]);

    const getOrders = () => {
        fetch(BASE_URL + '/orders')
            .then(res => res.json())
            .then(data => {
                setOrderData(data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className="container mx-auto p-8">
            {orderData.map(orderDetails => (
                <Paper key={orderDetails._id} elevation={3} className="p-4 flex justify-between mb-8">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h5" component="h2" className="mb-4">
                                Order Placed Successfully
                            </Typography>
                            <Typography variant="body1" className="mb-4">
                                Thank you for your order! Your order details are as follows:
                            </Typography>
                            <Typography variant="body2" className="mb-2">
                                <strong>Username:</strong> {orderDetails?.username}
                            </Typography>
                            <Typography variant="body2" className="mb-2">
                                <strong>Order Status:</strong> {orderDetails?.orderStatus}
                            </Typography>
                            <Typography variant="body2" className="mb-2">
                                <strong>Total Price:</strong> {orderDetails?.totalPrice}
                            </Typography>
                            <Typography variant="body2" className="mb-2">
                                <strong>Transaction ID:</strong> {orderDetails?.transactionId}
                            </Typography>
                            <Button variant="contained" color="primary" style={{marginTop:"20px"}}>
                                Track Order
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={3}>
                                {orderDetails?.orderItem?.map((item, index) => (
                                    <Grid item xs={12} key={item._id}>
                                        <Card style={{width: "200px"}} sx={{
                                        }}>
                                            <CardMedia
                                                component="img"
                                                image={item.restaurantMenu.menuImageUrl}
                                                alt={item.restaurantMenu.menuItem}
                                                style={{width:"100%",
                                                objectFit:"cover",
                                                    objectPosition:"top",

                                                    maxHeight: '8rem',
                                                }}

                                            />
                                            <CardContent>
                                                <Typography variant="subtitle1" component="h3" gutterBottom>
                                                    {item.restaurantMenu.menuItem}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    {item.quantity} x ₹{item.restaurantMenu.menuItemPrice}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    );
}
