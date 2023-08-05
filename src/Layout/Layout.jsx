// import React from 'react'
import { useState } from "react";
// import Appheader from "./Appheader";
import SideNav from "./SideNav.jsx";
import useMediaQuery from "../hooks/useMediaQuery.jsx";
import { Outlet } from "react-router-dom";


const Layout = () => {
  const [open, setOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

  const OpenScreen = () => {
    setOpen(!open);
    console.log("open screen...", open);
  };

  return (
    <div className="">
      <SideNav OpenScreen={OpenScreen} open={open} />

      {isAboveMediumScreens ? (
        <div className="flex">
          <div
            className={`
              ml-[15.2rem] 
             relative flex flex-col w-full duration-200`}
          >
            <Outlet/>
          </div>
        </div>
      ) : (
        <div className="flex ">
          <div className={`relative flex flex-col w-full duration-200`}>
            <Outlet/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
