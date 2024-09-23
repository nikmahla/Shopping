'use client';

import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const AddData = () => {
    const [formData, setFormData] = useState({
        name: '',
        avatar: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://66dee1fdde4426916ee2c7b3.mockapi.io/HonyShop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Data added successfully!');
                setFormData({ name: '', avatar: '' });
            } else {
                throw new Error('Failed to add data');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add data. Please try again.');
        }
    };

    const addBulkData = async () => {
        const bulkData = [
            { name: "Manuka Honey", avatar: "https://annahl-react.themepresss.com/product/1.png", "priceR": "510.00",
                "id": "1" },
            { name: "Raw Honey", avatar: "https://annahl-react.themepresss.com/product/2.png", "priceR": "510.00",
                "id": "2" },
            { name: "Wild Flower Honey", avatar: "https://annahl-react.themepresss.com/product/3.png", "priceR": "250.00",
                "id": "3" },
            { name: "Queen Bee Honey", avatar: "https://annahl-react.themepresss.com/product/4.png" , "priceR": "210.00",
                "id": "4" },
            { name: "Flower Honey", avatar: "https://annahl-react.themepresss.com/product/5.png" , "priceR": "350.00",
                "id": "5" },
            { name: "Pure Hill Honey", avatar: "https://annahl-react.themepresss.com/product/6.png" , "priceR": "410.00",
                "id": "6" },
            { name: "Black Seed Flower Honey", avatar: "https://annahl-react.themepresss.com/product/7.png" , "priceR": "420.00",
                "id": "7" },
            { name: "Mango Flower Honey", avatar: "https://annahl-react.themepresss.com/product/8.png" , "priceR": "680.00",
                "id": "8" },
        ];

        for (const item of bulkData) {
            try {
                const response = await fetch('https://66dee1fdde4426916ee2c7b3.mockapi.io/HonyShop', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(item),
                });

                if (!response.ok) {
                    throw new Error(`Failed to add ${item.name}`);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        alert('Bulk data added successfully!');
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Add Honey Product
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Avatar URL"
                    name="avatar"
                    value={formData.avatar}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, mr: 2 }}
                >
                    Add Honey Product
                </Button>
                <Button
                    onClick={addBulkData}
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2 }}
                >
                    Add Bulk Data
                </Button>
            </form>
        </Box>
    );
};

export default AddData;
