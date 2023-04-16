import React from "react";
import { Menu } from "antd";
import logo from "../assets/swiss-logo.jpg";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    path: "/services",
    label: "Services",
  },
  {
    path: "/recycling",
    label: "Recycling",
  },
  {
    path: "/energy",
    label: "Energy",
  },
  {
    path: "/hydrogen",
    label: "Hydrogen",
  },
  {
    path: "/pellets",
    label: "Pellets",
  },
  {
    path: "/knowledge",
    label: "Knowledge",
  },
  {
    path: "/about",
    label: "About us",
  },
];

export const items = menuItems.map((item) => {
  return {
    label: (
      <NavLink activeClassName="active" to={item.path}>
        {item.label}
      </NavLink>
    ),
    key: item.path,
  };
});
// [
//   {
//     label: <NavLink to={"/"}>Home</NavLink>,
//     key: "home",
//   },
//   {
//     label: <NavLink to={"/energy"}>Energy</NavLink>,
//     key: "energy",
//   },
//   {
//     label: <NavLink to={"/recycling"}>Recycling</NavLink>,
//     key: "recycling",
//   },
//   {
//     label: <NavLink to={"/pellets"}>Pellets</NavLink>,
//     key: "pellets",
//   },
//   {
//     label: <NavLink to={"/hydrogen"}>Hydrogen</NavLink>,
//     key: "hydrogen",
//   },
//   {
//     label: <NavLink to={"/knowledge"}>Knowledge</NavLink>,
//     key: "knowledge",
//   },
//   {
//     label: <NavLink to={"/about"}>About us</NavLink>,
//     key: "about",
//   },
// ];

function Navbar({ screenWidth, navbarColor, scrollPosition }) {
  console.log({ screenWidth });
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();
  const onClick = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };
  const location = useLocation();
  console.log({ location });
  return (
    <>
      <style>
        {`
		nav ul{
			background: transparent !important;
			border: none !important;
		}
    nav ul li{
      // font-family: "Gotham-black", sans-serif !important;
      font-family: "Open Sans", sans-serif;

      font-size:16px !important;
      font-weight: 600 !important;
      letter-spacing: 1px !important
    }
    .ant-menu-item-selected::after, .ant-menu-light.ant-menu-horizontal >.ant-menu-item-active::after{
      border-bottom-color:#3a3e46 !important;
      border-bottom: 4px solid;

    }
    .ant-menu-item-selected{
      color:black !important;
    }
    @media (max-width: 1279px) {
      nav ul li{
        font-size:15px !important;
        letter-spacing: 2px !important;
        padding-inline: 6px !important;
      }    
    }

    nav .active {
      // color:#C00000 !important;
    }
   
    
    
		`}
      </style>
      <nav
        style={{
          backgroundColor: screenWidth > 767 ? navbarColor : "transparent",
          transition: "all .3s ease-in",
          boxShadow:
            screenWidth > 767
              ? scrollPosition > 100
                ? "0px 15px 45px #00000038"
                : "none"
              : "none",
        }}
        className="z-50 fixed top-0 left-0 w-full h-[100px] flex items-center bg-transparent "
      >
        <div className="container mx-auto px-0 lg:px-14 flex justify-between items-center ">
          {/* <Link className="text-[#c00000] text-2xl font-bold" to={"/"}>
            swiss energy hub
          </Link> */}
          <Link
            style={{
              fontFamily: "larsseit-medium",
              letterSpacing: "1.5px",
            }}
            className="text-2xl text-bg-color font-bold swiss energy hub"
            to={"/"}
          >
            {/* <img width={150} height="60" src={logo} title="" alt="logo" /> */}
            <p className="text-[26px]">swiss energy hub</p>
          </Link>
          <div className="flex justify-center items-center">
            {screenWidth > 767 && (
              <Menu
                style={{ background: "transparent" }}
                disabledOverflow={true}
                className=""
                onClick={onClick}
                activeKey={location.pathname}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
              />
            )}
            {/* <a
              href="https://calendly.com/swissenergyhub"
              target={"_blank"}
              className="text-white ml-3 bg-[#c00000] px-[8px] py-[4px] rounded-[7px] border-none flex justify-center items-center"
            >
              <span className="text-[15px] font-[600]">Let's Talk</span>
            </a> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
