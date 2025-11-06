import { Box } from "@mui/material"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: '#E6E7E3'
    }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
    </Box>
  )
}
