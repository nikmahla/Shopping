'use client';

import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Rating, Grid, IconButton } from '@mui/material';
import Image from 'next/image';
import co1 from './img/co1.png'
import co2 from './img/co2.png'
import co3 from './img/co3.png'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const ClientTestimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, illum. Ullam inventore dicta ipsa hic accusamus sunt culpa, libero eius?",
            rating: 5,
            image: co1,
        },
        {
            id: 2,
            name: "Jane Smith",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, illum. Ullam inventore dicta ipsa hic accusamus sunt culpa, libero eius?",
            rating: 4,
            image: co2,
        },
        {
            id: 3,
            name: "Bob Johnson",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, illum. Ullam inventore dicta ipsa hic accusamus sunt culpa, libero eius?",
            rating: 5,
            image: co3,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    return (
        <Box sx={{ py: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',px:5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: '600', fontSize: { xs: '1.5rem', md: '3rem' }, color: '#30180d' }}>
                    Client
                </Typography>
                <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ paddingLeft: '10px', fontWeight: '600', fontSize: { xs: '1.5rem', md: '3rem' }, color: '#b83806' }}>
                    Testimonial
                </Typography>
            </Box>
            <Typography variant="body1" align="center" gutterBottom sx={{ fontSize: { xs: '.8rem', md: '.8rem' }, color: 'gray' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, consectetur?
            </Typography>



            <Card sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '1000px',
                marginBlock: '1rem',
                minHeight: { xs: 'auto', md: '350px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fdf5ee',
                borderRadius: '10px',
                 
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: -30,
                    left: -30,
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    backgroundColor: '#b83806',
                    opacity: 1,
                    zIndex: 1,

                }} />
                <Box elevation={3} sx={{
                    padding: '.5rem',
                    backgroundColor: 'transparent',
                    width: '90%',
                    zIndex: 22,
                    overflow: 'hidden'
                }}>
                    <Grid container sx={{ height: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Grid item xs={12} md={4} sx={{
                            height: { xs: 'auto', md: '100%' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 2,
                            zIndex: 22,
                            position: 'relative',
                             overflow: 'hidden'
                        }}>
                            <Image
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                width={250}
                                height={250}
                                style={{
                                    objectFit: 'cover',
                                    zIndex: 22,
                                    position: 'relative',
                                    maxWidth: '100%',
                                    height: 'auto',
                                     
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: {xs:225,md:100},
                                    right: {xs:180,md:-5},
                                    backgroundColor: 'white',
                                    borderRadius: '50%',
                                    padding: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transform:'rotate(180deg)',
                                    zIndex: 25,
                                    // width: 40,
                                    // height: 40,
                                }}
                            >
                                <FormatQuoteIcon sx={{
                                    fontSize: '2rem',
                                    color: '#b83806',
                                }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <CardContent sx={{ 
                                height: '100%', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center',
                                padding: { xs: 2, md: 3 },
                                zIndex: 1,
                         
                            }}>
                                <Typography variant="body1" paragraph sx={{ fontSize: { xs: '.6rem', md: '1rem' }, color: '#30180d', mb: 2 }}>
                                    "{testimonials[currentIndex].comment}"
                                </Typography>
                                <Box sx={{ mt: 'auto' }}>
                                    <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: { xs: '.5rem', md: '1rem' } }}>
                                        {testimonials[currentIndex].name}
                                    </Typography>
                                    <Rating value={testimonials[currentIndex].rating} readOnly size="small" />
                                </Box>
                            </CardContent>
                        </Grid>

                        <Box sx={{
                            position: { xs: 'static', md: 'absolute' },
                            right: { md: 10 },
                            bottom: { md: 10 },
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-end' },
                            gap: 1,
                            zIndex: 2,
                            mt: { xs: 2, md: 0 },
                            mb: { xs: 2, md: 0 },
                        }}>
                            <IconButton
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                sx={{
                                    opacity:currentIndex === 0 ? '.5' : '1',
                                    border: '2px solid #b83806',
                                    borderRadius: '50%',
                                    color: currentIndex === 0 ? 'gray' : '#b83806',
                                    '&:hover': {
                                        backgroundColor: currentIndex === 0 ? 'transparent' : '#b83806',
                                        color: currentIndex === 0 ? 'gray' : 'white',
                                    },
                                }}
                            >
                                <KeyboardDoubleArrowLeftIcon sx={{fontSize:{xs:'1rem',md:'1.5rem'}}} />
                            </IconButton>
                            <IconButton
                                onClick={handleNext}
                                disabled={currentIndex === testimonials.length - 1}
                                sx={{
                                    opacity:currentIndex === 0 ? '.5' : '1',
                                    border: '2px solid #b83806',
                                    borderRadius: '50%',
                                    color: currentIndex === testimonials.length - 1 ? 'gray' : '#b83806',
                                    '&:hover': {
                                        backgroundColor: currentIndex === testimonials.length - 1 ? 'transparent' : '#b83806',
                                        color: currentIndex === testimonials.length - 1 ? 'gray' : 'white',
                                    },
                                }}
                            >
                                <KeyboardDoubleArrowRightIcon sx={{fontSize:{xs:'1rem',md:'1.5rem'}}} />
                            </IconButton>
                        </Box>
                    </Grid>
                </Box>
            </Card>

        </Box>
    );
};

export default ClientTestimonials;
