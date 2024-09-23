"use client";
import Image from 'next/image';
import { Box, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';

const images = [ 
    '/img/c01.jpg',
    '/img/c02.jpg',
    '/img/c03.jpg',
    '/img/c04.jpg',
    '/img/c05.jpg',
    '/img/c06.jpg',
    '/img/c07.jpg',
    '/img/c08.jpg',
    '/img/c09.jpg'
];

export default function Carousel() {
    return (
        <Box sx={{ marginTop: '15%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15%'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
                <Typography sx={{ paddingInline: '10px', fontSize: { xs: '1.5rem', md: '3rem' }, fontWeight: '600', color: '#30180d' }}>Latest </Typography>
                <Typography sx={{ paddingInline: '10px', fontSize: { xs: '1.5rem', md: '3rem' }, fontWeight: '600', color: '#b83806' }}>Project</Typography>
            </Box>

            <Grid container spacing={2} sx={{paddingInline: '20px'}}>
                {images.map((image, index) => (
                    <Grid 
                        item 
                        xs={12} 
                        sm={index === images.length - 1 ? 12 : 6} 
                        md={4} 
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: index === images.length - 1 && { sm: 'center' }
                        }}
                    >
                        <Box sx={{ width: index === images.length - 1 ? { xs: '100%', sm: '50%', md: '100%' } : '100%' }}>
                            <ImageHoverEffect image={image} index={index} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

function ImageHoverEffect({ image, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                '&:hover .hoverEffect': {
                    opacity: .8,
                    transform: 'scale(1)',
                },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={image}
                alt={`hony shop ${index + 1}`}
                width={200}
                height={300}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <Box
                className="hoverEffect"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(191,105,45,.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transform: 'scale(0.5)',
                    transition: 'all 0.5s ease-in-out',
                }}
            >
                <Typography sx={{ textTransform: 'uppercase', color: 'white', fontSize: {xs:'.8rem', md:'1.5rem'}, marginTop:'10%', fontWeight: {sx:'400', md:'500'} }}>
                    fresh original honey
                </Typography>
                <Typography sx={{ textTransform: 'uppercase', color: 'white', fontSize: {xs:'.8rem', md:'1.5rem'}, fontWeight: {sx:'400', md:'500'} }}>
                    healthy project
                </Typography>
            </Box>
        </Box>
    );
}

