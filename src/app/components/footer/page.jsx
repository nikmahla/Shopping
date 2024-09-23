import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid, Tooltip } from '@mui/material';
import { Hive, GitHub, LinkedIn, Telegram } from '@mui/icons-material';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import Image from 'next/image';
import logo from './img/f1.png'

const Footer = () => {
    return (
        <Box component="footer" sx={{
            bgcolor: '#212529',
            py: 6,
            color: '#f8f9fa',
            position: 'relative',
            overflow: 'hidden',
            paddingBlock: '100px',
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                zIndex: 1,
                overflow: 'hidden',
                '@media (max-width: 600px)': {
                    display: 'none',
                },
            }}>
                <Box sx={{
                    position: 'absolute',
                    left: '10%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}>
                    <EmojiNatureIcon sx={{ fontSize: 250 }} />
                </Box>
                <Box sx={{
                    position: 'absolute',
                    right: '10%',
                    top: '20%',
                    transform: 'translateY(-50%)',
                }}>
                    <Hive sx={{ fontSize: 100 }} />
                </Box>
            </Box>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                            <Image
                                src={logo}
                                alt="Annahal Logo"
                                width={30}
                                height={40}
                                style={{ marginRight: '10px' }}
                            />
                            <Typography variant="h6" color="inherit" sx={{ fontWeight: '600', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                                Annahal
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: '.7rem', md: '.8rem' }, lineHeight: '1.5' }}>
                            Management consulting includes a broad range of activities, and the many firms and their members often define these practices.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mt: { xs: 3, md: 0 } }}>
                            <Typography variant="h6" color="inherit" gutterBottom sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: '600' }}>
                                Contact
                            </Typography>
                            <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: '.7rem', md: '.8rem' }, paddingBlock:'10px' }}>
                                Developed by Fatemeh Nikookar
                            </Typography>
                            <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: '.7rem', md: '.8rem' } , paddingBlock:'10px'}}>
                                Email: fatemehnikookar2020@gmail.com
                            </Typography>
                            <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: '.7rem', md: '.8rem' }, paddingBlock:'10px' }}>
                                Phone: +34 697 260 530
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mt: { xs: 3, md: 0 } }}>
                            <Typography variant="h6" color="inherit" gutterBottom sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: '600' }}>
                                Follow 
                            </Typography>
                            <Box sx={{ display: 'flex' }}>
                                <Tooltip title="GitHub" arrow>
                                    <IconButton aria-label="GitHub" color="inherit" href="https://github.com/nikmahla" target="_blank" rel="noopener noreferrer">
                                        <GitHub sx={{ fontSize: '1.5rem' }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="LinkedIn" arrow>
                                    <IconButton aria-label="LinkedIn" color="inherit" href="http://linkedin.com/in/fatemeh-nikookar-b00a28291" target="_blank" rel="noopener noreferrer">
                                        <LinkedIn sx={{ fontSize: '1.5rem' }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Telegram" arrow>
                                    <IconButton aria-label="Telegram" color="inherit" href="https://t.me/MahLaNikookar" target="_blank" rel="noopener noreferrer">
                                        <Telegram sx={{ fontSize: '1.5rem' }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>


            </Container>
        </Box>
    );
};

export default Footer;
