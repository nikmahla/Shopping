"use client"
import React from 'react';
import {
    Box, Drawer, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Divider, Button,
    Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import useStore from '../../store';
import { styled } from '@mui/material/styles';
import { useState } from 'react'; // Add this import
import Tooltip from '@mui/material/Tooltip'; // Ensure this import is present

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgba(184, 56, 6, 0.04)', 
    },
    '&:active': {
        backgroundColor: 'rgba(184, 56, 6, 0.12)', 
    },
}));

const Basket = ({ isOpen, onClose }) => {
    const { basket, plusFromCart, minusFromCart, removeFromBasket } = useStore();
    const [tooltipOpen, setTooltipOpen] = useState(false); // Add state for tooltip

    const handleRemoveFromCart = (productId) => {
        removeFromBasket(productId);
    };

    const getTotalPrice = () => {
        return basket.reduce((total, item) => total + parseFloat(item.priceR) * item.quantity, 0).toFixed(2);
    };

    const handleTooltipOpen = () => {
        setTooltipOpen(true);
    };

    const handleTooltipClose = () => {
        setTooltipOpen(false);
    };

    return (
        <Drawer
            anchor="right"
            open={isOpen}
            onClose={onClose}
        >
            <Box
                sx={{

                    width: 350,
                    maxWidth: '100vw',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflowY: 'hidden', }}>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: '600', color: '#30180d', }} variant="h6" component="div">Basket</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider />
                <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    {basket.length > 0 ? (
                        basket.map((item) => (
                            <React.Fragment key={item.id}>
                                <ListItem
                                    alignItems="flex-start"
                                    sx={{
                                        color: '#30180d',
                                        fontSize: '.8rem',
                                    }}
                                    secondaryAction={
                                        <StyledIconButton
                                            sx={{ color: '#b83806' }}
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            <DeleteIcon />
                                        </StyledIconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar alt={item.name} src={item.avatar} variant="square" sx={{ width: 50, height: 60, borderRadius: '10px', color: '#b83806' }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        sx={{
                                            color: '#30180d',
                                            fontSize: '.8rem',
                                        }}
                                        secondary={
                                            <React.Fragment>

                                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, justifyContent: 'space-between' }}>
                                                    <Typography align="" component="span" variant="body2" color="#b83806">
                                                        ${item.priceR}
                                                    </Typography>

                                                    <Box sx={{ display: 'flex',justifyContent:'', alignItems: 'center', mt: 1 }} >
                                                        <StyledIconButton
                                                            size="small"
                                                            onClick={() => minusFromCart(item.id)}
                                                            disabled={item.quantity <= 1}
                                                            sx={{ color: item.quantity <= 1 ? '#ccc' : '#b83806' }}
                                                        >
                                                            <RemoveIcon fontSize="small" />
                                                        </StyledIconButton>
                                                        <Typography variant="body2" sx={{ mx: 1, fontSize: '.8rem', color: '#b83806', padding: '5px' }}>{item.quantity || 1}</Typography>
                                                        <StyledIconButton
                                                            size="small"
                                                            onClick={() => plusFromCart(item.id)}
                                                            sx={{ color: '#b83806' }}
                                                        >
                                                            <AddIcon fontSize="small" />
                                                        </StyledIconButton>
                                                    </Box>

                                                </Box>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </React.Fragment>
                        ))
                    ) : (
                        <Typography align="center" sx={{ p: 2, fontSize: '1.2rem', fontWeight: '600', color: '#30180d', }}>Your basket is empty</Typography>
                    )}
                </List>
                {basket.length > 0 && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflowY: 'hidden', width: '100%', marginBottom: '10px' }}>
                        <Divider sx={{}} />
                        <Typography sx={{ fontSize: '1rem', fontWeight: '600', color: '#8f2c05' }} variant="h6" align="left">
                            Total: ${getTotalPrice()}
                        </Typography>
                        <Tooltip 
                            title="Proceed to payment and complete your order" 
                            arrow 
                            open={tooltipOpen} 
                            onClose={handleTooltipClose} 
                        >
                            <Button
                                variant="contained"
                                sx={{ borderRadius: '10px', backgroundColor: '#b83806', '&:hover': { backgroundColor: '#8f2c05' } }}
                                onClick={() => {
                                    handleTooltipOpen(); 
                                    
                                }}
                            >
                                Checkout
                            </Button>
                        </Tooltip>
                    </Box>
                )}
            </Box>
        </Drawer>
    );
};

export default Basket;