import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DrawerListItem } from "./DrawerListItem";
import { MenuContext } from "../contexts/DrawerContext";

export const SelectedCategoryList = ({ categoryName, list }) => {
    // console.log(list.length)
    const { setMenuView } = useContext(MenuContext);
  const handleClick = () => setMenuView("main-menu");
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Main Menu
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListSubheader>
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          {categoryName}
        </Typography>
      </ListSubheader>

      {list && list.map((item, index) => (
        <DrawerListItem key={index} item={item} />
      ))}
    </>
  );
};
