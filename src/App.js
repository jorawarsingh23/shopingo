import React from "react";
import { NavBar } from "./components/NavBar";
import { FeatureNavBar } from "./components/FeatureNavBar";
import { CssBaseline } from "@mui/material";
import { CountryProvider } from "./contexts/CountryContext";
import { HeroSection } from "./components/HeroSection";

export const App = () => {
  return (
    <CssBaseline>
      <CountryProvider>
        <NavBar />
        <FeatureNavBar />
        <HeroSection />
      </CountryProvider>
    </CssBaseline>
  );
};
