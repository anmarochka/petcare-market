import { Box, Container, Stack, Typography } from "@mui/material"
import ProductCard from "../ common/ProductCard"
import products from "../data/products"

const ProductsSection = () => (
  <Box sx={{ py: 8 }}>
    <Container>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Bestseller Products
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
        Most loved products by pet parents like you
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={3}
      >
        {products.map((product) => (
          <Box key={product.id} sx={{ flex: "1 1 200px", maxWidth: 300 }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Stack>
    </Container>
  </Box>
)

export default ProductsSection
