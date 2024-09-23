"use client"
import * as React from 'react';
import Image from 'next/image';
import headerBg from './img/header05.jpg';
import { Box, Typography } from '@mui/material';
import Rightbg from './img/header1.jpg';
import RightBee from './img/header07.png';
import RightBoxHoney from './img/header06.png';
import leftBox from './img/header08.png';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function HeaderMain() {
    return (
        <Box sx={{
            width: '100%',
            height: { xs: '500px', md: '1000px' },
            overflow: 'hidden',
            boxSizing: 'border-box',
            padding: 0,
            margin: 0
        }}>
            <Box sx={{
                overflow: 'hidden',
                height: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    src={headerBg}
                    alt="Header Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center 30%"
                    style={{
                        zIndex: -1,
                        transform: { xs: 'scale(1.2)', md: 'scale(1)' }
                    }}
                />

                <Box sx={{
                    display: { xs: 'block', md: 'none' },
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: '1',
                    filter: 'sepia(1) saturate(250%) brightness(50%) hue-rotate(0deg)',
                }}>
                    <Image
                        fill
                        src={Rightbg}
                        alt="Right Background"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center 30%"
                        style={{
                            filter: 'sepia(30%) saturate(300%) brightness(90%) hue-rotate(20deg)',
                            transform: 'scale(1.2)'
                        }}
                    />
                </Box>


                <Box sx={{
                    display: { xs: 'block', md: 'none' },
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#FF8C00',
                    opacity: 0.7,
                    zIndex: 2,
                }} />


                <Box sx={{
                    display: { xs: 'none', md: 'block' },
                    zIndex: '-1',
                    width: '700px',
                    height: '700px',
                    borderRadius: '50%',
                    position: 'absolute',
                    right: '-20%',
                    top: 50,
                    background: 'linear-gradient(0deg, rgba(197, 88, 22, 0.95), rgba(197, 88, 22, 0.95))',
                    overflow: 'hidden',
                }}>
                    <Box sx={{
                        borderRadius: '40px',
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                    }}>
                        <Image
                            src={Rightbg}
                            alt="Right Background"
                            layout="fill"
                            objectFit="contain"
                            style={{
                                borderRadius: '40px',
                                zIndex: '1',
                                filter: 'saturate(200%) brightness(110%) contrast(100%) hue-rotate(10deg) sepia(50%) saturate(200%) hue-rotate(340deg) brightness(90%)',
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                right: '0',
                                bottom: '0',
                            }}
                        />
                    </Box>

                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '40px',
                        background: 'linear-gradient(0deg, #bf692d 24%, #b83806)',
                        zIndex: '2',
                        opacity: 0.7
                    }} />
                </Box>

                <Box sx={{
                    display: { xs: 'none', md: 'block' },
                    width: '20%',
                    height: 'auto',
                    position: 'absolute',
                    right: '1%',
                    top: '10%',
                    zIndex: '15',
                }}>
                    <Image
                        src={RightBee}
                        alt="Right Bee"
                        layout="intrinsic"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </Box>

                <Box sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    right: '8%',
                    top: '25%',
                    animation: 'move 2s infinite alternate',
                    zIndex: '1',
                }}>
                    <Image
                        src={RightBoxHoney}
                        alt="Right Box Honey"
                        layout="intrinsic"
                        style={{
                            width: '600px',
                            height: 'auto',
                            zIndex: '1',
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                left: '0',
                top: '25%',
                zIndex: '1',
            }}>
                <Image
                    src={leftBox}
                    style={{
                        width: '300px',
                        height: 'auto',
                        zIndex: '1',
                    }}
                />
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column', alignItems: 'center'
            }} >
                <Typography variant='span' letterSpacing={2}
                    sx={{
                        position: 'absolute',
                        left: '5%',
                        top: {
                            xs: '35%',
                            md: '55%',
                        },
                        color: {
                            xs: 'white',
                            md: '#b83806'
                        },
                        fontWeight: '600',
                        fontSize: {
                            xs: '2rem',
                            md: '5.5rem'
                        },
                        letterSpacing: '0.2em',
                        marginLeft: {
                            xs: '.5rem',
                            md: '0'
                        }
                        , textTransform: 'uppercase'
                        , marginBottom: '8px',
                        zIndex: '15',
                    }} >
                    Fresh
                </Typography>
                <Typography variant='h2' letterSpacing={2}
                    sx={{
                        position: 'absolute',
                        left: {
                            xs: '5%',
                            md: '5%',
                        },
                        top: {
                            xs: '45%',
                            md: '75%',
                        },
                        color: {
                            xs: 'white',
                            md: '#30180d'
                        },
                        fontWeight: '600',
                        fontSize: {
                            xs: '2rem',
                            md: '5.5rem'
                        },
                        marginLeft: {
                            xs: '.5rem',
                            md: '0'
                        },
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginBlock: {xs:'0',md:'10px'},
                        zIndex: '15',
                    }} >
                    Organic
                </Typography>
                <Typography variant='h2' letterSpacing={2}
                    sx={{
                        position: 'absolute',
                        left: '5%',
                        top: {
                            xs: '55%',
                            md: '100%',
                        },
                        color: {
                            xs: 'white',
                            md: '#30180d'
                        },
                        fontWeight: '600',
                        fontSize: {
                            xs: '2rem',
                            md: '5.5rem'
                        },
                        
                        marginLeft: {
                            xs: '.5rem',
                            md: '0'
                        }
                        , fontWeight: '600',
                        textTransform: 'uppercase'
                        , marginBottom: '8px',
                        letterSpacing: '0.2em',
                        zIndex: '15',
                    }} >
                    honey
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                left: '5%',
                bottom: { xs: '10%', md: '-45%' },
                zIndex: 15
            }} >
                <Button
                    variant="contained"
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                    sx={{
                        backgroundColor: '#b83806',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#9a2f05',
                        },
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        padding:{xs:'8px 10px', md:'10px 20px'},
                    }}
                >
                    shop now
                </Button>
            </Box>

        </Box>
    );
}