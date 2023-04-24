import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DrawerList } from "./DrawerList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import { SelectedCategoryList } from "./SelectedCategoryList";
import { MainMenuList } from "./MainMenuList";
import { MenuContext } from "../contexts/DrawerContext";
import axios from "axios";
import { CountryContext } from "../contexts/CountryContext";

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
      {
        text: "Electronics",
        arrow: true,
        list: [
          { text: "Accessories", href: "/accessories" },
          { text: "Camera", href: "/camera" },
          { text: "Car", href: "/car" },
          { text: "Headphones", href: "/headphones" },
        ],
      },
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

export const AllMenuDrawer = ({ open, toggleDrawer }) => {

  const {menuView, menuData} = useContext(MenuContext)
  const {setCountry}= useContext(CountryContext);
  
  useEffect(() => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/flag/images", {
        iso2: "US",
      })
      .then((res) => {
        console.log(res.data.data.flag);
        if (res.data) {
          setCountry(res.data.data.flag);
          
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
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
        {menuView === "main-menu" ? (
          <MainMenuList list={listData} />
        ) : (
          <SelectedCategoryList name="Electronics" list={menuData} />
        )}
      </List>
    </Drawer>
  );
};
