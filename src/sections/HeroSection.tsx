import { Box, Button, Container, Typography, TextField } from "@mui/material"
import { Search } from "lucide-react"

const HeroSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: "linear-gradient(to right, #D5B7A5, #E5C7B5)" }}>
      <Container sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 4 }}>
        <Box flex={1}>
          <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom>
            Shop for Your Pet
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Find the best products for your furry friends while supporting animal shelters with every purchase.
          </Typography>
          <Box display="flex" gap={1} sx={{ mb: 3 }}>
            <TextField variant="outlined" placeholder="Search for pet products..." fullWidth size="small" />
            <Button variant="contained" sx={{ bgcolor: "#8C471F", "&:hover": { bgcolor: "#6B2802" } }}>
              <Search size={18} />
            </Button>
          </Box>
          <Button variant="contained" size="large" sx={{ bgcolor: "#8C471F", "&:hover": { bgcolor: "#6B2802" } }}>
            Find Products
          </Button>
        </Box>
        <Box flex={1}>
          <Box
            component="img"
            src="/assets/hero.jpg"
            alt="Happy pets"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
