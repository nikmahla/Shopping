"use client"
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import g1 from './img/c1.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const page = () => {
    return (
        <Box sx={{

            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            marginBlock: { xs: '10px', md: '50px' },
            minHeight: '100vh',
            // padding: { xs: '20px', md: '0' }
        }}>
            <Box sx={{
                 width: { xs: '100%', md: '50%' },
                 height: { xs: '100%', md: '100%' },
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: { xs: '10px', md: '40px' },
                marginBottom: { xs: '20px', md: '0' },
                overflow: 'hidden'
            }}>
                <Box sx={{
                    width: { xs: '90%', md: '60%' },
                    height: { xs: '80%', md: '100%' },
                    border: { xs: '5px solid #bb521b', md: '10px solid #bb521b' },
                    position: 'absolute',
                    top: { xs: '10%', md: '0' },
                    left: { xs: '5%', md: '2%' },
                    zIndex: '-1',
                  
                }} />
                {/* <Box sx={{
                    position: 'relative',
                    width: { xs: '100%', md: '90%' },
                    maxWidth: '600px',
                }}> */}
                    <Image
                        src={g1}
                        alt='Honey jar'
                        layout="responsive"
                        width={500}
                        height={500}
                        objectFit="cover"
                        quality={100}
                        priority
                        style={{
                            width:{xs:'80%',md:'100%'},
                            height: {xs:'auto',md:'100%'},
                        }}
                        // sizes="(max-width: 768px) 300px, (max-width: 1200px) 50vw, 600px"
                    />
                </Box>
            {/* </Box> */}




            <Box sx={{
                overflowY: 'hidden',
                width: { xs: '100%', md: '50%' },
                height: { xs: 'auto', md: '100%' },
                marginTop: { xs: '20px', md: '0' },
                padding: { xs: '10px', md: '5px' },
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginInline: { xs: '5%', md: '10%' } }}>
                    <Typography variant='h5' sx={{ fontSize: { xs: '.8rem', md: '1rem', color: '#cd8056', fontWeight: '600', textTransform: 'capitalize', } }}>limited offer for customers</Typography>
                    <Typography variant='h2' sx={{ fontSize: { xs: '1.5rem', md: '3rem', color: '#30180d', fontWeight: '600', textTransform: 'capitalize', } }}>Fresh Sunflower</Typography>
                    <Typography variant='h5' sx={{ fontSize: { xs: '1.5rem', md: '3rem', color: '#b83806', fontWeight: '600', textTransform: 'capitalize', } }}>Orginal Honey Up</Typography>
                    <Typography variant='h5' sx={{ fontSize: { xs: '1.5rem', md: '3rem', color: '#30180d', fontWeight: '600', textTransform: 'capitalize',  } }}>To 58% Off.</Typography>
                    <Typography variant='h5' sx={{ fontSize: { xs: '.8rem', md: '1rem', color: 'gray', } }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus nam ratione nulla deleniti inventore blanditiis lorem inorci sed vestibulum tempus.</Typography>
                </Box>

                <Button
                    variant="contained"
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                    sx={{
                        marginTop: { xs: '20px', md: '5%' },
                        marginLeft: {xs:'5%', md: '10%' },
                        backgroundColor: '#b83806',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#9a2f05',
                        },
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                    }}
                >
                    shop now
                </Button>
            </Box>
      
        </Box>
    )
}

export default page