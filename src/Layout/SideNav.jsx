/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

import useMediaQuery from "../hooks/useMediaQuery.jsx";

import Appheader from "./Appheader.jsx";

const SideNav = ({ OpenScreen, open }) => {
  // const [opens, setOpens] = useState(true);
  const [heading, setHeading] = useState("Request For Loan");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

  const Menus = [
    { id: 0, title: "Request For Loan", to: "/loan" },
    { id: 1, title: "Request all Loan Request", to: "/all-loan" },
    { id: 2, title: "Repayment Schedule", to: "/repay-schedule" },
  ];

  return (
    <div className="">
      {isAboveMediumScreens && (
        <div>
          <Appheader OpenScreen={OpenScreen} />
          <div className="flex relative">
            <div className="flex relative">
              <div className="fixed top-[3.3rem] z-30">
                <div
                  className={` 
                  w-[15rem] flex flex-col justify-between relative h-screen py-4 px-3 border-r-[1px] border-gray-300  duration-300 z-20 bg-white `}
                >
                  <div className="">
                    <Link to="/" className="flex gap-x-4 items-center justify-center">
                      <h1
                        className={`text-slate-600 origin-left font-medium text-xl duration-200 items-center flex justify-center`}
                      >
                        <div className=" text-start flex justify-start mx-auto text-primary cursor-pointer ">
                          <div className="link">
                            <span className="text-secondary text-3xl font-semibold capitalize">
                              Prime
                              <span className="text-[#fbc41d]">Base</span>
                            </span>
                          </div>
                          <span className="dot font-bold text-primary w-5 text-3xl">
                            .
                          </span>
                        </div>
                      </h1>
                    </Link>
                    <div className="flex justify-between flex-col text-center">
                      <ul className="pt-6">
                        {Menus.map((Menu, index) => (
                          <>
                            <Link className="flex items-center justify-center" to={Menu.to}>
                              <li
                                key={index}
                                className={`w-full mb-8 flex rounded-md p-2 cursor-pointer  text-secondary text-sm items-center 
                                
                                ${heading === Menu.title && "bg-[#fbc41d]"} `}
                                onClick={() => {
                                  heading !== Menu.title
                                    ? setHeading(Menu.title)
                                    : setHeading(Menu.title);
                                }}
                              >
                                <span
                                  className={`ml-3 origin-left duration-200`}
                                >
                                  {Menu.title}
                                </span>
                              </li>
                            </Link>
                          </>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isAboveMediumScreens && (
        <div className="block ">
          <Appheader OpenScreen={OpenScreen} />
          <div>
            <div className="relative z-40 ">
              <div
                onClick={OpenScreen}
                className={`
                    fixed left-0 top-0 bg-slate-800 bg-opacity-75 md:bg-opacity-50 w-full min-h-screen
                    ${open ? "left-0" : "left-[-100%]"}
                `}
              ></div>

              <div className="relative">
                <div className=" justify-between flex-col bg-white relative flex">
                  <div className="block relative">
                    <ul
                      className={`
                        bg-white fixed h-fit top-[0px] overflow-y-auto bottom-0 py-10 px-4 md:w-[450px] w-[70%]
                            duration-500 ${open ? "left-0" : "left-[-100%]"}
                        `}
                      style={{
                        height: "100%",
                        flex: "1",
                        padding: "1rem 1.1rem 1rem 1rem",
                        overflowY: "auto",
                        overflowX: "hidden",
                      }}
                    >
                      <Link to="/" className="flex gap-x-4 items-center">
                        <h1
                          className={`text-slate-600 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                        >
                          <div className=" text-start flex justify-start mx-auto text-primary cursor-pointer">
                            <div className="link">
                              <span className="text-secondary text-3xl font-semibold capitalize">
                                Prime
                                <span className="text-[#fbc41d]">Base</span>
                              </span>
                            </div>
                            <span className="dot font-bold text-primary w-5 text-3xl">
                              .
                            </span>
                          </div>
                        </h1>
                      </Link>

                      <div className="flex justify-between flex-col">
                        <ul className="pt-6">
                          {Menus.map((Menu, index) => (
                            <>
                              <li
                                key={index}
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center 
                                ${heading === Menu.title && "bg-[#fbc41d]"} `}
                                onClick={() => {
                                  heading !== Menu.title
                                    ? setHeading(Menu.title)
                                    : setHeading(Menu.title);
                                }}
                              >
                                <Link className="flex" to={Menu.to}>
                                  <span
                                    className={`${!open && "hidden"
                                      } ml-3 origin-left duration-200`}
                                  >
                                    {Menu.title}
                                  </span>
                                </Link>
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SideNav;
