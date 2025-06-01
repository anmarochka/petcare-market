import { Box, Typography, Button, Card, CardActions, Chip, Rating } from "@mui/material"
import { ShoppingCart } from "lucide-react"
import type { Product } from "../types/product"

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: 2,
          mb: 2,
        }}
      />
      {product.badge && (
        <Chip label={product.badge} color="primary" size="small" sx={{ mb: 1, fontWeight: "bold" }} />
      )}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        €{product.price}
      </Typography>
      <Box display="flex" alignItems="center" gap={0.5} mb={1}>
        <Rating value={product.rating} precision={0.5} size="small" readOnly />
        <Typography variant="caption" color="text.secondary">
          ({product.reviews} reviews)
        </Typography>
      </Box>
      <CardActions sx={{ mt: "auto" }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<ShoppingCart size={16} />}
          sx={{
            backgroundColor: "#8C471F",
            "&:hover": { backgroundColor: "#6B2802" },
            fontWeight: "bold",
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
