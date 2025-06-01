import { Box, Typography } from "@mui/material"
import type { Category } from "../types/category"

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 1,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px) scale(1.03)",
          boxShadow: 4,
        },
      }}
    >
      <Box
        component="img"
        src={category.image}
        alt={category.name}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
        }}
      />
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {category.name}
        </Typography>
      </Box>
    </Box>
  )
}

export default CategoryCard
