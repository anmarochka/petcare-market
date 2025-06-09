import { Box, Button, Container, Typography } from "@mui/material";
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

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 250px", // базовая ширина карточки
                maxWidth: 300,
              }}
            >
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>

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