import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  FormControl,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import { grey } from "@mui/material/colors";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import languageIcon from "../images/united-kingdom.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const departments = [
  { name: "Food" },
  { name: "Clothing" },
  { name: "Automotive" },
  { name: "Technology" },
];

const NavButton = (props) => (
  <Button
    variant="text"
    sx={{
      display: props.display,
      height: "45px",
      color: "white",
      border: "1px solid transparent",
      "&:hover": {
        border: "1px solid white",
      },
      textTransform: "none",
      order: props.order,
    }}
    component={props.component}
    startIcon={props.startIcon}
    endIcon={props.endIcon}
  >
    {props.children}
  </Button>
);

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
    // console.log(anchorElNav)
  };
  return (
    <Box sx={{ flex: 1 }}>
      <AppBar position="sticky" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            padding: { xs: "5px", lg: "0 15px" },
            minHeight: {xs: "60px"},
            // padding: "10px",
            "& > *": {
              mx: 1.5,
            },
            ":first-child": {
              ml: 0,
            },
            ":last-child": {
              mr: 0,
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ textTransform: "uppercase", order: { xs: 1, lg: 0 } }}
          >
            Shopingo
          </Typography>

          <NavButton order={{ lg: 1 }} display={{ xs: "none", lg: "flex " }}>
            <LocationOnOutlinedIcon fontSize="medium" />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                marginLeft: "10px",
              }}
            >
              <Typography variant="caption">Deliver to</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                India
              </Typography>
            </Box>
          </NavButton>

          <Stack
            direction="row"
            sx={{
              flex: {xs: 1},
              order: { xs: 4, lg: 2 },
              minWidth: "320px"
            }}
          >
            <FormControl sx={{ display: { xs: "none", lg: "block" } }}>
              <Select
                defaultValue={departments[0].name}
                sx={{
                  height: "40px",
                  borderRight: "none",
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                  backgroundColor: grey[300],
                }}
              >
                {departments.map(({ name }) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ flex: 1 }}>
              <OutlinedInput
                fullWidth
                color="secondary"
                placeholder="Search here ..."
                sx={{ height: "40px", pr: 0, backgroundColor: "white" }}
                endAdornment={
                  <IconButton
                    edge="end"
                    size="large"
                    sx={{
                      backgroundColor: "secondary.light",
                      "&:hover": {
                        backgroundColor: "secondary.main",
                      },
                      height: "40px",
                      width: "40px",
                      borderRadius: 0,
                      borderTopRightRadius: "4px",
                      borderBottomRightRadius: "4px",
                      mr: 0,
                    }}
                  >
                    <SearchOutlinedIcon />
                  </IconButton>
                }
              ></OutlinedInput>
            </FormControl>
          </Stack>

          <Box sx={{ display: { xs: "flex", lg: "none" }, order: { xs: 0 } }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>

            <Menu anchorEl={anchorElNav}></Menu>
          </Box>

          <NavButton
            startIcon={
              <img src={languageIcon} alt="language-icon" width="24px" />
            }
            endIcon={<ArrowDropDownIcon />}
            order={{ lg: 3 }}
            display={{ xs: "none", lg: "flex " }}
          >
            <Typography variant="body2">IN</Typography>
          </NavButton>

          <NavButton
            endIcon={<ArrowDropDownIcon />}
            order={{ lg: 4 }}
            display={{ xs: "flex" }}
          >
            <Box
              sx={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="caption">Sign In</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", display: {xs: "none", lg: "flex"} }}>
                Account & Lists
              </Typography>
            </Box>
          </NavButton>

          <NavButton
            endIcon={<ArrowDropDownIcon />}
            order={{ lg: 5 }}
            display={{ xs: "none", lg: "flex " }}
          >
            <Box
              sx={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="caption">Returns</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                & Orders
              </Typography>
            </Box>
          </NavButton>

          <NavButton
            component="a"
            startIcon={
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 32 }} />
              </Badge>
            }
            order={{ lg: 6 }}
            display={{ xs: "flex" }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", order: { lg: 7 }, display: {xs: "none", lg: "flex"} }}
            >
              Cart
            </Typography>
          </NavButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
