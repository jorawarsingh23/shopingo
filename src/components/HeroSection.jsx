import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Carousel } from "./Carousel";

export const HeroSection = () => {
  const [viewport, setViewPort] = useState(window.innerWidth);
  const [left, setLeft] = useState(0);

  const handleResize = () => {
    setViewPort(window.innerWidth);
    setLeft(0);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <Box sx={{ width: "100vw", position: "relative" }}>
      <Carousel width={viewport} height={400} left={left} setLeft={setLeft} />
    </Box>
  );
};
