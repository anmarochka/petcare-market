import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ProductCard from "../ common/ProductCard";
import products from "../data/products";

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

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

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
  );
};

export default ProductsSection;
