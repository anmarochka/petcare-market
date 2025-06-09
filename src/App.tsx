import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import Box from "@mui/material/Box"

const App = () => {
  return (
    <Router>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        sx={{ backgroundColor: "#fff" }}
      >
        <Header />
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  )
}

export default App
