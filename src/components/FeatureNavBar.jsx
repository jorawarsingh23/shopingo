import React, { useEffect, useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";

import { DrawerList } from "./DrawerList";

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

const listData = [
  {
    headingText: "Digital Content & Devices",
    list: [
      { text: "Music", arrow: true },
      { text: "Phones", arrow: true },
      { text: "Softwares", arrow: true },
    ],
  },
  {
    headingText: "Shop By Department",
    list: [
      { text: "Electronics", arrow: true },
      { text: "Computers", arrow: true },
      { text: "Automotive", arrow: true },
      { text: "Home Acessories", arrow: true },
      { text: "Gardening", arrow: true },
      { text: "Clothing", arrow: true },
      { text: "Movies", arrow: true },
      { text: "Sports", arrow: true },

    ],
  },
  {
    headingText: "Help & Settings",
    list: [
      { text: "Your Account" },
      { text: "English", startIcon: <LanguageIcon /> },
      { text: "United States", flagIcon: true },
      { text: "Customer Service" },
      { text: "Sign in" },
    ],
  },
];

export const FeatureNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
 
 

  const toggleDrawer = (event, reason) => {
    // if (reason === "backdropClick" || reason === "escapeKeyDown")
    setDrawerOpen(false);
  };


  return (
    <>
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
                onClick={() => setDrawerOpen(true)}
              >
                All
              </Button>
              {NavLinksData.map(({ text, href }) => (
                <NavLink key={text}>{text}</NavLink>
              ))}
            </Box>
            <Box>
              <NavLink>Shop deals in Automotive</NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          onClick={toggleDrawer}
          sx={{
            // backgroundColor: "red",
            position: "fixed",
            left: "370px",
          }}
        >
          <CloseIcon
            sx={{
              fontSize: "2rem",
              color: "primary.contrastText",
              mt: 1,
              ml: 1,
              cursor: "pointer",
            }}
          />
        </Box>
        <List sx={{ minWidth: "360px", py: 0 }}>
          <ListItemButton
            sx={{
              backgroundColor: "primary.light",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <ListItemIcon>
              <AccountCircleIcon sx={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Hey, Sign In Here
              </Typography>
            </ListItemText>
          </ListItemButton>
          {listData.map((item, index) => (
            <DrawerList key={index} headingText={item.headingText} list={item.list}/>
          ))}
        </List>
      </Drawer>
    </>
  );
};
