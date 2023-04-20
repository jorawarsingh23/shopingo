import { AppBar, Box, Button, Link, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const NavLink = (props) => (
  <Link
    href="#"
    underline="none"
    sx={{
      border: "1px solid transparent",
      borderRadius: "4px",
      "&:hover": {
        border: "1px solid white",
      },
      color: "primary.contrastText",
      padding: "5px 15px",
      height: "38px",
      display: "inline-block",
    }}
  >
    {props.children}
  </Link>
);

const NavLinksData = [
  { text: "Today's Deals", href: "#" },
  { text: "Customer Service", href: "#" },
  { text: "Registry", href: "#" },
  { text: "Gift Cards", href: "#" },
  { text: "Sell", href: "#" },
];

export const FeatureNavBar = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <AppBar position="relative" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "primary.light",
            padding: "0px",
            padding: { xs: "0px 15px" },
            minHeight: { xs: "40px" },
            dispay: "flex",
            fontSize: "14px",
            lineHeight: "24.5px",
          }}
        >
          <Box>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                border: "1px solid transparent",
                borderRadius: "4px",
                "&:hover": {
                  border: "1px solid white",
                },
                color: "primary.contrastText",
                height: "38px",
              }}
              startIcon={<MenuIcon />}
            >
              All
            </Button>
            {NavLinksData.map(({ text, href }) => (
              <NavLink>{text}</NavLink>
            ))}
          </Box>
          <Box>
            <NavLink>Shop deals in Automotive</NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
