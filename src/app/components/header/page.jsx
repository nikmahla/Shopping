"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image';
import logo from './img/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Basket from '../basket/page';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteItem from '../favoriteItem/page';
import useStore from '../../store';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isBasketOpen, setIsBasketOpen] = React.useState(false);
  const [isFavoriteOpen, setIsFavoriteOpen] = React.useState(false);
  const favorites = useStore(state => state.favorites);

  const [open, setOpen] = React.useState(false); // Add this line to define 'open'

  const handleClick = (event) => {
    setDrawerOpen(true);
  };
  const handleClose = () => {
    setDrawerOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBasketOpen = () => {
    setIsBasketOpen(true);
  };

  const handleBasketClose = () => {
    setIsBasketOpen(false);
  };

  const handleFavoriteOpen = () => {
    setIsFavoriteOpen(true);
  };

  const handleFavoriteClose = () => {
    setIsFavoriteOpen(false);
  };

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      backgroundColor: { xs: '#fcf3e9', md: isScrolled ? '#fcf3e9' : 'transparent' },
      transition: 'background-color 0.3s ease',
      borderBottom: isScrolled ? '.5px solid #fcddba' : 'none',
    }}>
      <Box sx={{
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Image src={logo} alt="Logo" width={30} height={40} />
        <Typography variant="h1" component="div" sx={{ fontSize: { xs: '1.2rem', md: '1.8rem' }, color: '#b83806', margin: '0 10px', fontWeight: 'bold' }}>
          Annahal
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '800px',
            }}
          >
            {['Home', 'Blog', 'Profile', 'About', 'Pages', 'Contact'].map((item, index) => (
              <Grid item key={index}>
                <Box sx={{ position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
                  <Typography
                    sx={{
                      position: 'relative',
                      cursor:'pointer',
                      padding: '10px ',
                      '&:hover': {
                        color: '#b83806',
                        '& + .bee-icon': {
                          opacity: 1,
                          transform: 'translateY(0)',
                        },
                      },
                    }}
                  >
                    {item}
                  </Typography>
                  <EmojiNatureIcon
                    className="bee-icon"
                    sx={{
                      paddingTop: '2px',
                      position: 'absolute',
                      bottom: '0',
                      left: '30%',
                      transform: 'translateX(-50%) translateY(10px)',
                      opacity: 0,
                      transition: 'opacity 0.3s, transform 0.3s',
                      color: '#b83806',
                      fontSize: '1.1rem',
                      pointerEvents: 'none',
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <ShoppingCartIcon
          onClick={handleBasketOpen}
          sx={{
            color: '#b83806',
            cursor: 'pointer',
            marginRight: '20px',
            fontSize: { xs: '1rem', md: '1.5rem' }
          }}
        />
        <FavoriteBorderIcon
          onClick={handleFavoriteOpen}
          sx={{
            color: '#b83806',
            cursor: 'pointer',
            marginRight: '20px',
            fontSize: { xs: '1rem', md: '1.5rem' }
          }}
        />


        <Tooltip title="Menu ">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{
              display: {
                xs: 'block', md: 'none',
                color: '#b83806',
              },
            }}
            aria-controls={open ? 'account-menu' : undefined} // This line now works
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon sx={{
              width: 36,
              height: 36,

              paddingRight: '.8rem',

            }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleClose}
      >
        <Box
          sx={{ width: 150, }}
          role="presentation"
          onClick={handleClose}
          onKeyDown={handleClose}
        >
          <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#b83806' } }}>Home</MenuItem>
          <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#b83806' } }}>Blog</MenuItem>
          <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#b83806' } }}>Profile</MenuItem>
          <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#b83806' } }}>About</MenuItem>
          <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#b83806' } }}>Pages</MenuItem>
          <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#b83806' } }}>Content</MenuItem>
        </Box>
      </Drawer>

      {isBasketOpen && <Basket isOpen={isBasketOpen} onClose={handleBasketClose} />}

      {isFavoriteOpen && <FavoriteItem isOpen={isFavoriteOpen} onClose={handleFavoriteClose} />}

    </Box>
  );
}
