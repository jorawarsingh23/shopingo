import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const Carousel = ({ width, height, left, setLeft }) => {
  const [counter, setCounter] = useState(0);
  const [images, setImages] = useState();

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((response) => {
        // console.log(response.data);
        setImages(response.data);
      })
      .then()
      .catch((error) => console.log(error));
  }, [width]);

  const nextImage = () => {
    if (counter < images.length) {
      setLeft(left - width);
      setCounter(counter + 1);
    } else {
      setLeft(0);
      setCounter(0);
    }
  };

  const prevImage = () => {
    if (counter > 0) {
      setLeft(left + width);
      setCounter(counter - 1);
    } else {
      setLeft(0);
      setCounter(0);
    }
  };

  return (
    <>
      <div
        className="image-container"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        {images &&
          images.map((image, index) => (
            <div style={{ width: `${width}px` }} key={index}>
              {/* {console.log(width, "and", left)} */}
              <img
                className="image"
                src={images[index].download_url}
                alt="abcd"
                style={{
                  width: `${width}px`,
                  height: "100%",
                  objectFit: "cover",
                  position: "relative",
                  left: `${left}px`,
                  transition: "all 0.5s ease-in-out",
                }}
              />
            </div>
          ))}
      </div>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${width}px`,
          height: "100%",
          transition: "all 0.8s ease",
          ":hover": {
            background: "rgba(0, 0, 0, 0.4)",
          },
          cursor: "pointer"
        }}
      ></Box>
      <IconButton
        onClick={prevImage}
        sx={{
          position: "absolute",
          left: "2%",
          top: "50%",
          transform: "translateY(-100%)",
        }}
      >
        <ArrowBackIosIcon
          sx={{
            fontSize: "3rem",
            color: "black",
          }}
        />
      </IconButton>
      <IconButton
        onClick={nextImage}
        sx={{
          position: "absolute",
          right: "2%",
          top: "50%",
          transform: "translateY(-100%)",
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            fontSize: "3rem",
            color: "black",
          }}
        />
      </IconButton>
    </>
  );
};
