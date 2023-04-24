import React, { useState } from "react";
import { MainMenuList } from "../components/MainMenuList";
import LanguageIcon from "@mui/icons-material/Language";

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
            { name: "Accessories", href: "/accessories" },
            { name: "Camera", href: "/camera" },
            { name: "Car", href: "/car" },
            { name: "Headphones", href: "/headphones" },
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

export const MenuContext = React.createContext()

export const MenuProvider = ({children}) => {
    const [menuView, setMenuView] = useState('main-menu')
    const [menuData, setMenuData] = useState([])

    const value = {menuView, setMenuView, menuData, setMenuData}

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}