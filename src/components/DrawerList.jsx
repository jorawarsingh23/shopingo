import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import axios from "axios";
import { DrawerListItem } from "./DrawerListItem";

export const DrawerList = ({ headingText, list }) => {
  const [lastIndexToShow, setLastIndexToShow] = useState(4);
  const [openSeeAll, setOpenSeeAll] = useState(false);

  const toggleSeeAll = () => {
    if (lastIndexToShow === 4) {
      setLastIndexToShow(list.length);
      setOpenSeeAll(true);
    } else {
      setLastIndexToShow(4);
      setOpenSeeAll(false);
    }
  };

  return (
    <>
      <ListSubheader>
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          {headingText}
        </Typography>
      </ListSubheader>

      {list.map((item, index) => (
        <DrawerListItem
          key={index}
          item={item}
          display={index < lastIndexToShow ? "block" : "none"}
        />
      ))}

      {list.length > 6 ? (
        <ListItem disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={toggleSeeAll}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {openSeeAll ? (
                <>
                  <ListItemText>See Less</ListItemText>
                  <ExpandLessIcon />
                </>
              ) : (
                <>
                  <ListItemText>See All</ListItemText>
                  <ExpandMoreIcon />
                </>
              )}
            </Box>
          </ListItemButton>
        </ListItem>
      ) : null}

      <Divider />
    </>
  );
};
