import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { Heart, Home } from "lucide-react"

const ImpactSection = () => (
  <Box sx={{ py: 8, backgroundColor: "#D5B7A5" }}>
    <Container>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          component="img"
          src="/assets/impact.jpg"
          alt="Helping animals"
          sx={{
            width: { xs: "100%", md: "50%" },
            maxWidth: 600,
            borderRadius: 2,
            objectFit: "cover",
          }}
        />

        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h4" fontWeight="bold" color="#6B2802" gutterBottom>
            Your Purchase = Real help
          </Typography>
          <Typography variant="body1" color="#6B2802" sx={{ mb: 4 }}>
            Part of every payment goes to support shelters. With each purchase, you're directly
            contributing to the wellbeing of animals in need across the country.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
                padding: "16px 24px",
                minWidth: 204,
                height: 84,
                display: "flex",
                alignItems: "center",
                gap: 2,
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <Heart size={24} color="#8C471F" />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  $125,840
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Donated to date
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
                padding: "16px 24px",
                minWidth: 204,
                height: 84,
                display: "flex",
                alignItems: "center",
                gap: 2,
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <Home size={24} color="#8C471F" />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  42
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Partner shelters
                </Typography>
              </Box>
            </Box>
          </Stack>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8C471F",
              "&:hover": { backgroundColor: "#6B2802" },
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)

export default ImpactSection
