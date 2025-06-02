import { Box, Container, Typography, Button, Stack } from "@mui/material"
import ProductCard from "../ common/ProductCard"
import products from "../data/products"

const ProductsSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Bestseller Products
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 4 }}
        >
          Most loved products by pet parents like you
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          spacing={3}
        >
          {products.map((product) => (
            <Box key={product.id} sx={{ flex: "1 1 250px", maxWidth: 300 }}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Stack>

        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8C471F",
              "&:hover": { backgroundColor: "#6B2802" },
              fontWeight: "bold",
              textTransform: "none",
              px: 4,
              py: 1.5,
              mt: 4,
            }}
          >
            View all products
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductsSection
