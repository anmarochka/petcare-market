import { Box, Container, Typography, Stack } from "@mui/material"
import CategoryCard from "../ common/CategoryCard"
import categories from "../data/categories"

const CategoriesSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#F9F9F9" }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Pet Categories
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Find everything your pet needs in one place
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={4} // главный отступ между карточками!
        >
          {categories.map((category, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 300px",
                maxWidth: 350,
                minWidth: 280,
                display: "flex",
                justifyContent: "center"
              }}
            >
              <CategoryCard category={category} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default CategoriesSection
