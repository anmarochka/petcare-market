import { Box, Container, Typography, IconButton } from "@mui/material"
import { Facebook, Twitter, Instagram, YouTube, LinkedIn } from "@mui/icons-material"

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#8C471F", color: "#F5E7D5", py: 4, mt: 8 }}>
      <Container>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "space-between" }}>
          <Box sx={{ flex: "1 1 250px" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              PetCare Market
            </Typography>
            <Typography variant="body2">
              Making pet care products shopping meaningful by supporting animal shelters with every purchase.
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton size="small" sx={{ color: "#F5E7D5" }}>
                <Facebook />
              </IconButton>
              <IconButton size="small" sx={{ color: "#F5E7D5" }}>
                <Twitter />
              </IconButton>
              <IconButton size="small" sx={{ color: "#F5E7D5" }}>
                <Instagram />
              </IconButton>
              <IconButton size="small" sx={{ color: "#F5E7D5" }}>
                <YouTube />
              </IconButton>
              <IconButton size="small" sx={{ color: "#F5E7D5" }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ flex: "1 1 150px" }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Shop
            </Typography>
            <Typography variant="body2">Dog Products</Typography>
            <Typography variant="body2">Cat Products</Typography>
            <Typography variant="body2">Fish Products</Typography>
            <Typography variant="body2">Bird Products</Typography>
            <Typography variant="body2">Small Pets</Typography>
            <Typography variant="body2">Reptile Products</Typography>
          </Box>

          <Box sx={{ flex: "1 1 150px" }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">Our Mission</Typography>
            <Typography variant="body2">Partner Shelters</Typography>
          </Box>

          <Box sx={{ flex: "1 1 200px" }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Customer Service
            </Typography>
            <Typography variant="body2">Contact Us</Typography>
            <Typography variant="body2">FAQs</Typography>
            <Typography variant="body2">Shipping Policy</Typography>
            <Typography variant="body2">Returns & Refunds</Typography>
            <Typography variant="body2">Privacy Policy</Typography>
          </Box>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © 2025 PetCare Market. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
