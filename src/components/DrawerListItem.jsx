import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MenuContext } from "../contexts/DrawerContext";
import { CountryContext } from "../contexts/CountryContext";

export const DrawerListItem = ({ item, display }) => {
  const { setMenuView, setMenuData } = useContext(MenuContext);
  const { country } = useContext(CountryContext);
  const { text, arrow, startIcon, flagIcon, list } = item;

  const handleClick = () => {
    // console.log(list);
    if (list) {
      setMenuView("category-menu");
      setMenuData(list);
    }
  };

  return (
    <ListItem
      disablePadding
      sx={{
        display: display,
      }}
    >
      <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
        {startIcon ? <ListItemIcon>{startIcon}</ListItemIcon> : null}

        {flagIcon ? (
          <ListItemIcon>
            <img src={country} width="20px" height="20px" />
          </ListItemIcon>
        ) : null}

        <ListItemText primary={text}></ListItemText>
        {list ? (
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
        ) : null}
      </ListItemButton>
    </ListItem>
  );
};
