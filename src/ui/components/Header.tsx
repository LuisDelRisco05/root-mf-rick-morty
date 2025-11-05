import { Box } from "@mui/material";
import backgroundComplete from '@/assets/img/background-complete.png'

export const Header = () => {
  return (
    <Box
        sx={{
            backgroundImage: `url(${backgroundComplete})`,
            position: 'absolute',
            zIndex: 0,
            width: '100%',
            height: '328px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            top: 0,
            left: 0,
            "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
                "radial-gradient(circle at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.85) 90%)",
            pointerEvents: "none",
            },
        }}
    >

    </Box>
  )
}
