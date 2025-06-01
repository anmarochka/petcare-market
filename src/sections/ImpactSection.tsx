import { Box, Button, Container, Typography, Stack } from "@mui/material"
import { Heart } from "lucide-react"

const ImpactSection = () => (
  <Box sx={{ py: 8, background: "linear-gradient(to right, #D5B7A5, #E5C7B5)" }}>
    <Container>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
        <Box
          component="img"
          src="/assets/impact.jpg"
          alt="Helping animals"
          sx={{ width: "100%", borderRadius: 2, maxWidth: 500 }}
        />
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Your Purchase = Real help
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Part of every payment goes to support shelters. With each purchase, you're directly contributing to the wellbeing of animals in need.
          </Typography>
          <Box display="flex" gap={4} sx={{ mb: 4 }}>
            <Box textAlign="center">
              <Heart size={24} color="red" />
              <Typography variant="h6" fontWeight="bold">$125,840</Typography>
              <Typography variant="caption" color="text.secondary">Donated to date</Typography>
            </Box>
            <Box textAlign="center">
              <Heart size={24} color="red" />
              <Typography variant="h6" fontWeight="bold">42</Typography>
              <Typography variant="caption" color="text.secondary">Partner shelters</Typography>
            </Box>
          </Box>
          <Button variant="contained" sx={{ bgcolor: "#8C471F", "&:hover": { bgcolor: "#6B2802" } }}>
            Learn More
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)

export default ImpactSection
