"use client"
import React, { useState, useCallback } from 'react';
import {
    Box, Card, CardContent, IconButton, Rating, Stack, Tooltip, Typography
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useStore from '@/app/store';
import useFetch from '../fetch/useFetch';
import Basket from '../basket/page'

const MainMenu = () => {
    const { basket, addProductToBasket, removeFromBasket, updateQuantity, addToFavorites, removeFromFavorites, favorites = [] } = useStore();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [addedItems, setAddedItems] = useState(new Set());
    const [addedToFavorites, setAddedToFavorites] = useState(new Set());

    const { data: fetchedData } = useFetch('https://66dee1fdde4426916ee2c7b3.mockapi.io/HonyShop');

    const handleAddToCart = useCallback((product) => {
        addProductToBasket(product);
        setIsDrawerOpen(true);
        setAddedItems(prev => new Set(prev).add(product.id));
    }, [addProductToBasket]);

    const handleRemoveFromCart = (productId) => {
        removeFromBasket(productId);
    };

    const handleUpdateQuantity = (productId, delta) => {
        updateQuantity(productId, delta);
    };

    const handleAddToFavorites = useCallback((product) => {
        if (favorites && favorites.some(fav => fav.id === product.id)) {
            removeFromFavorites(product.id);
            setAddedToFavorites(prev => {
                const newSet = new Set(prev);
                newSet.delete(product.id);
                return newSet;
            });
        } else {
            addToFavorites(product);
            setAddedToFavorites(prev => new Set(prev).add(product.id));
        }
    }, [addToFavorites, removeFromFavorites, favorites]);

    const getTotalPrice = () => {
        return basket.reduce((total, item) => total + parseFloat(item.priceR) * item.quantity, 0).toFixed(2);
    };

    return (
        <>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)',
                },
                gap: '20px',
                marginTop: '40px',
                maxWidth: '1400px',
                width: '100%',
                margin: '40px auto',
                // backgroundColor: '#f4eae1',
                padding: '20px',
            }}>
                {fetchedData.map((item) => (
                    <Card
                        key={item.id}
                        sx={{
                            maxWidth: { xs: '100%', sm: 420 },
                            backgroundColor: '#fff',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                height: 280,
                                '&:hover .overlay': {
                                    transform: 'translateY(0)',
                                },
                            }}
                        >
                            <img
                                src={item.avatar}
                                alt={item.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                            />
                            <Box
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(0deg,#a13602,#feb934)',
                                    transform: 'translateY(-100%)',
                                    transition: 'transform 0.3s ease-in-out',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title={addedItems.has(item.id) ? "Already added to cart" : "Add to cart"} arrow>
                                    <Box
                                        onClick={() => !addedItems.has(item.id) && handleAddToCart(item)}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            border: '2px solid #fff',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                            },
                                            cursor: addedItems.has(item.id) ? 'default' : 'pointer',
                                            opacity: addedItems.has(item.id) ? 0.5 : 1,
                                        }}
                                    >
                                        <ShoppingCartIcon sx={{ color: '#fff', fontSize: '2rem' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title={favorites && favorites.some(fav => fav.id === item.id) ? "Remove from favorites" : "Add to favorites"} arrow>
                                    <Box
                                        onClick={() => handleAddToFavorites(item)}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            border: '2px solid #fff',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                            },
                                            cursor: 'pointer', 
                                            opacity: 1, 
                                            marginLeft: '10px',
                                        }}
                                    >
                                        <FavoriteBorderIcon sx={{ color: '#fff', fontSize: '2rem' }} />
                                    </Box>
                                </Tooltip>
                            </Box>
                        </Box>
                        <CardContent>
                            <Typography sx={{ fontSize: '1rem', fontWeight: '600', color: '#30180d', }} variant="h6" component="div">
                                {item.name}
                            </Typography>
                            <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                <Typography variant="body2" sx={{ color: '#b83806', fontSize: '.6rem' }}>
                                    $ {item.priceR || 'N/A'}
                                </Typography>
                                <Rating name="half-rating" defaultValue={4.1} precision={0.5} readOnly size="small" />
                            </Stack>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Basket
                    isOpen={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                />

            </Box>
        </>
    );
};

export default MainMenu;