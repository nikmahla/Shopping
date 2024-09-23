import React from 'react';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import logo1 from './img/logo1.png'
import logo2 from './img/logo2.png'
import logo3 from './img/logo3.png'
import logo4 from './img/logo4.png'
import logo5 from './img/logo5.png'

const LogoSlide = ({ src, alt, index }) => {
  return (
    <Box
      data-index={index}
      sx={{
        width: { xs: '100px', sm: '150px', md: '210px' },
      

      }}
    >
      <Box sx={{ margin: { xs: '5px 10px', sm: '10px 20px', md: '10px 40px' } }}>
        <Image
          src={src}
          alt={alt}
          width={200}
          height={150}
          style={{
            width: '100%',
            height: 'auto',
            display: 'inline-block',
            
          }}
        />
      </Box>
    </Box>
  );
};

const Page = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5,logo1, logo2, logo3, logo4, logo5,logo1, logo2, logo3, logo4, logo5,logo1, logo2, logo3, logo4, logo5,];

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { xs: '150px', sm: '200px', md: '250px' },
        overflow: 'hidden',
        position: 'relative',
        marginTop: { xs: '10%', sm: '8%', md: '7%' },
      }}
    >
      <Box
        sx={{
          marginLeft: { xs: '50px', sm: '75px', md: '100px' },
          display: 'flex',
          position: 'absolute',
          left: '-5%',
          
          animation: 'slide 30s steps(15) infinite',
          '@keyframes slide': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {logos.map((logo, index) => (
          <LogoSlide
            key={index}
            src={logo}
            alt={`logo ${index + 1}`}
            index={index}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Page;
