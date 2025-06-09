import { Box, Button, Container, TextField, Typography, InputAdornment, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const HeroSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#D5B7A5" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
        }}
      >

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="#5A2600"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Shop for Your Pet
          </Typography>

          <Typography
            variant="body1"
            color="#5A2600"
            sx={{ mb: 4, fontSize: { xs: "1rem", md: "1.125rem" }, maxWidth: 500 }}
          >
            Find the best products for your furry friends while supporting animal shelters with every purchase.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              mb: 3,
              flexDirection: { xs: "column", sm: "row" },
              maxWidth: 520,
            }}
          >
            <TextField
              placeholder="Search for pet products..."
              variant="outlined"
              size="small"
              fullWidth
              sx={{ bgcolor: "#fff", borderRadius: 1 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <SearchIcon sx={{ color: "#8C471F" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#8C471F",
              "&:hover": { bgcolor: "#6B2802" },
              textTransform: "none",
              fontWeight: "bold",
              px: 3,
              py: 1,
            }}
          >
            Find Products
          </Button>
        </Box>

        <Box
          component="img"
          src="/assets/hero.jpg"
          alt="Happy pets"
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: { xs: "100%", md: "640px" },
            height: "auto",
            borderRadius: 3,
            boxShadow: 2,
          }}
        />
      </Container>
    </Box>
  )
}

export default HeroSection