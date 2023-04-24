import React from "react";
import { DrawerList } from "./DrawerList";

export const MainMenuList = ({ list }) => {
  return (
    <>
      {list.map((item, index) => (
        <DrawerList
          key={index}
          headingText={item.headingText}
          list={item.list}
        />
      ))}
    </>
  );
};
