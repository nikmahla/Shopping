import { Box, Grid, Typography, Container } from '@mui/material'
import React from 'react'
import bg from './img/baner1.jpg'
import img1 from './img/baner2.png'
import img2 from './img/baner3.png'
import img3 from './img/baner4.png'

const Page = () => {
    const features = [
        { img: img1, title: 'Free Shipping', subtitle: 'On order over $1500' },
        { img: img2, title: 'Secure Payment', subtitle: '100% Secure Payment' },
        { img: img3, title: '24/7 Support', subtitle: 'Anytime Support' },
    ];

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginTop:'10%' }}>
            <Box
                component="div"
                sx={{marginBlock: '10%' ,
                    width: '100%',
                    height: { xs: 'auto', md: '300px' },
                    minHeight: { xs: '400px', md: '250px' },
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(0deg, #bf692d 24%, #b83806)',
                        opacity: 0.8,
                    },
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: { xs: 'cover', md: 'cover' },
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 1,
                }}
            >
                <Container maxWidth="lg" sx={{
                    height: '100%',
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Grid container spacing={2} sx={{
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: { xs: 'column', md: 'row' },
                        width: '100%',
                        py: { xs: 2, md: 0 },
                       
                    }}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} md={4} key={index} sx={{
                                width: '100%',
                                mb: { xs: 2, md: 0 },
                            }}>
                                <Box sx={{ 

                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                    color: 'white',
                                    transform: { xs: 'scale(0.9)', md: 'scale(1)' },
                                    transformOrigin: { xs: 'center', md: 'left center' },
                                }}>
                                    <Box sx={{
                                       
                                        mr: {xs:2 ,md:2},
                                        width: { xs: 60, md: 70 },
                                        height: { xs: 60, md: 70 },
                                        borderRadius: '50%',
                                        border: '2px solid white',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        '&:hover': { backgroundColor: '#b83806', opacity: 0.8 }
                                    }}>
                                        <img
                                            src={feature.img.src}
                                            alt={feature.title}
                                            style={{
                                                width: '80%',
                                                height: '80%',
                                                objectFit: 'contain',
                                                zIndex: '2',
                                                
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" component="h3" sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1rem', md: '1.25rem' },
                                            
                                        }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{
                                            fontSize: { xs: '0.9rem', md: '0.875rem' }
                                        }}>
                                            {feature.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default Page