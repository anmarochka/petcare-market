import { AppBar, Toolbar, Typography, Box, IconButton, Button } from "@mui/material"
import { ShoppingCart, AccountCircle } from "@mui/icons-material"

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#8C471F", px: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "white" }}>
          PetCare Market
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit">Shop</Button>
          <Button color="inherit">Help Shelters</Button>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
