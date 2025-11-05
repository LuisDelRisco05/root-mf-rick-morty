import { Box, Typography } from "@mui/material";
import { ButtonComponent, theme } from 'rick-morty-card'
import backgroundComplete from '@/assets/img/background-complete.png'
import titleSeries from '@/assets/title-series.svg';
import './welcomeStyles.css';
import { useNavigate } from "react-router-dom";

export const Welcome = () => {

  const navigation = useNavigate()

  return (
    <Box 
      position='relative' 
      sx={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${backgroundComplete})`,
          position: 'absolute',
          zIndex: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "darken",
        }}
      >
      </Box>
      <Box sx={{ zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <img src={titleSeries} alt="title-series" className="title-series" />
        <Box sx={{ rowGap: '10px', my: '48px', height: '125px'}}>
          <Typography sx={{ 
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '100%',
            letterSpacing: 0,
            textAlign: 'center',
            color: '#FFFFFF',
            fontFamily: 'Montserrat',
            height: '53px'
          }}>Bienvenido a Rick and Morty</Typography>
          <Typography sx={{ 
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '32px',
            letterSpacing: 0,
            textAlign: 'center',
            color: '#FFFFFF',
            fontFamily: 'Montserrat',
            maxWidth: '872px',
            width: '100%',
            height: '62px'
          }}>En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de código y la reproducción del siguiente diseño.</Typography>
        </Box>
        <ButtonComponent 
          backgroundColor={(theme.palette.primary as any)[500]} 
          color={(theme.palette.primary as any)[900]}
          text="comenzar" 
          onClick={() => navigation("/home")}
        />
      </Box>
    </Box>
  )
}
