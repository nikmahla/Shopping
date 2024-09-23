"use client"
import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Typography, Box, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import useStore from '../../store';
import { styled } from '@mui/material/styles';
const StyledIconButton = styled(IconButton)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgba(184, 56, 6, 0.04)', // رنگ پس‌زمینه هنگام hover
    },
    '&:active': {
        backgroundColor: 'rgba(184, 56, 6, 0.12)', // رنگ پس‌زمینه هنگام کلیک
    },
}));

export default function FavoriteItems({ isOpen, onClose }) {
    const favorites = useStore(state => state.favorites);
    const removeFromFavorites = useStore(state => state.removeFromFavorites);

    return (
        <Drawer
            anchor="right"
            open={isOpen}
            onClose={onClose}
            PaperProps={{
                sx: { width: { xs: '100%', sm: 400 }, padding: 2, backgroundColor: '#fdf5ee' }
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#30180d' }}>
                    Your Favorite Items
                </Typography>
                <IconButton onClick={onClose} color="inherit" aria-label="close">
                    <CloseIcon />
                </IconButton>
            </Box>
            <Divider sx={{ mb: 2 }} />
            {favorites.length === 0 ? (
                <Typography variant="body1" sx={{ textAlign: 'center', color: 'gray' }}>
                    Your favorites list is empty.
                </Typography>
            ) : (
                <List>
                    {favorites.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <ListItem alignItems="flex-start" sx={{ mb: 2 }}>
                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Box
                                        component="img"
                                        src={item.avatar || '/placeholder-image.jpg'}
                                        alt={item.name}
                                        sx={{ width: 80, height: 80, objectFit: 'cover', mr: 2, borderRadius: 1 }}
                                    />
                                    <Box sx={{ flexGrow: 1 }}>
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

                                                        <Box sx={{ display: 'flex', justifyContent: '', alignItems: 'center', mt: 1 }} >
                                                            <StyledIconButton
                                                                size="small"
                                                                onClick={() => removeFromFavorites(item.id)}
                                                                sx={{ color: '#b83806' }}
                                                            >
                                                                <DeleteIcon fontSize="medium" />
                                                            </StyledIconButton>
                                                        </Box>

                                                    </Box>
                                                </React.Fragment>
                                            }
                                        />
                                    </Box>
                                </Box>
                            </ListItem>
                            {index < favorites.length - 1 && <Divider variant="inset" component="li" />}
                        </React.Fragment>
                    ))}
                </List>
            )}
        </Drawer>
    );
}
