import { Box, Button, Container, TextField, Typography } from "@mui/material"

const NewsletterSection = () => (
  <Box sx={{ py: 8, backgroundColor: "#F9F9F9" }}>
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Join Our Pet-Loving Community
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: "auto" }}>
        Subscribe to our newsletter for exclusive deals, pet care tips, and updates on how your purchases help animal shelters.
      </Typography>
      <Box display="flex" justifyContent="center" gap={1} maxWidth={400} mx="auto">
        <TextField placeholder="Your email address" fullWidth size="small" />
        <Button variant="contained" sx={{ bgcolor: "#8C471F", "&:hover": { bgcolor: "#6B2802" } }}>Subscribe</Button>
      </Box>
    </Container>
  </Box>
)

export default NewsletterSection
