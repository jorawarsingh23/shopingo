import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const DrawerListItem = ({ item, display,height }) => {
  const { text, arrow, startIcon, flagIcon } = item;
  const [countryFlagIcon, setCountryFlagIcon] = useState("");

  useEffect(() => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/flag/images", {
        iso2: "US",
      })
      .then((res) => {
        console.log(res.data.data.flag);
        if (res.data) {
          setCountryFlagIcon(res.data.data.flag);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ListItem disablePadding sx={{
        display: display, 
}}>
      <ListItemButton sx={{ pl: 4 }}>
        {startIcon ? <ListItemIcon>{startIcon}</ListItemIcon> : null}

        {flagIcon ? (
          <ListItemIcon>
            <img src={countryFlagIcon} width="20px" height="20px" />
          </ListItemIcon>
        ) : null}

        <ListItemText primary={text}></ListItemText>
        {arrow ? (
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
        ) : null}
      </ListItemButton>
    </ListItem>
  );
};
