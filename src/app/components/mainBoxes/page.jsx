"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import useStore from '../../store'
import Products from './products';

const Page = () => {
    const addToFavorites = useStore(state => state.addToFavorites)

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fdf5ee',
                marginBlock: '100px',
                marginBottom: '150px',
            }}>
                <Box sx={{
                    marginTop: { xs: '100px', sm: '150px' },
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography variant='h4' sx={{
                        fontWeight: '700',
                        fontSize: { xs: '2rem', sm: '2.4rem', md: '2.8rem' },
                        color: '#30180d',
                        letterSpacing: '2px',
                        textTransform: 'capitalize',
                        marginRight: { xs: '0', sm: '10px' },
                        marginBottom: { xs: '10px', sm: '0' },
                    }}>
                        100% fresh
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontWeight: '700',
                        fontSize: { xs: '2rem', sm: '2.4rem', md: '2.8rem' },
                        color: '#b83806',
                        letterSpacing: '2px',
                        textTransform: 'capitalize',
                    }}>
                        honey
                    </Typography>

                </Box>
                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '90%', sm: '70%', md: '50%' },
                }}>
                    <Typography variant='body1' sx={{
                        fontWeight: '',
                        fontSize: { xs: '0.7rem', sm: '0.8rem' },
                        lineHeight: '1.5',
                        color: 'gray',
                        letterSpacing: '1px',
                        textAlign: 'center',
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry has been the industry's standard consectetur adipisicing elit.
                    </Typography>
                </Box>

                <Products addToFavorites={addToFavorites} />
            </Box>
        </>
    )
}

export default Page
