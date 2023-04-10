import React from "react";
import {
  AppstoreOutlined,
  BulbOutlined,
  ContactsFilled,
  ContactsOutlined,
  ContactsTwoTone,
  HomeOutlined,
  MailOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ShareAltOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import logo from "../assets/swiss-logo.jpg";
const items = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "home",
    // icon: <HomeOutlined />,
  },
  {
    label: "Solutions",
    key: "solutions",
    // icon: <SolutionOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link to={"/recycling"}>Recycling</Link>,
            key: "recycling",
          },
          {
            label: <Link to={"/electricity"}>Electricity</Link>,
            key: "electricity",
          },
          {
            label: <Link to={"/hydrogen"}>Hydrogen</Link>,
            key: "hydrogen",
          },
        ],
      },
    ],
  },
  {
    label: "Knolege hub",
    key: "knolegeHub",
    // icon: <BulbOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link to={"/knolegeHub"}>Nice to know</Link>,
            key: "knolegeHub1",
          },
        ],
      },
    ],
  },
  {
    label: "About us",
    key: "about",
    // icon: <QuestionCircleOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link to={"/Who-we-are"}>Who we are</Link>,
            key: "Who-we-are",
          },
          {
            label: <Link to={"/vision"}>Vision</Link>,
            key: "vision",
          },
          {
            label: <Link to={"/mission"}>Mission</Link>,
            key: "mission",
          },
          {
            label: <Link to={"/target-audience"}>Target audience</Link>,
            key: "target-audience",
          },
        ],
      },
    ],
  },
];

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar({ screenWidth, navbarColor, scrollPosition }) {
  console.log({ screenWidth });
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();
  const onClick = (e) => {
    // console.log("click ", e);
    // setCurrent(e.key);
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
      font-size:15px !important;
      font-weight: 600
    }
    
    nav ul li.ant-menu-item-active::after{
      // border-bottom-color:#c00000 !important;
    }
    
    .ant-menu > .ant-menu-item:hover,
    .ant-menu > .ant-menu-submenu:hover,
    .ant-menu > .ant-menu-item-active,
    .ant-menu> .ant-menu-submenu-active,
    .ant-menu > .ant-menu-item-open,
    .ant-menu> .ant-menu-submenu-open,
    .ant-menu > .ant-menu-item-selected,
    .ant-menu > .ant-menu-submenu-selected {
      // color: red;
    }

    @media (max-width: 1023px) {
      nav ul li{
        // padding-inline: 2px !important;
        font-size:14px !important;
      }    
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
        <div className="container mx-auto flex justify-between items-center ">
          {/* <Link className="text-[#c00000] text-2xl font-bold" to={"/"}>
            swiss energy hub
          </Link> */}
          <Link className="swiss energy hub" to={"/"}>
            <img width={150} height="60" src={logo} title="" alt="logo" />
          </Link>
          <div className="flex justify-center items-center">
            {screenWidth > 767 && (
              <Menu
                style={{ background: "transparent" }}
                disabledOverflow={true}
                className=""
                onClick={onClick}
                // activeKey={location.pathname}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
              />
            )}
            <a
              href="https://calendly.com/swissenergyhub"
              target={"_blank"}
              className="text-white ml-3 bg-[#c00000] px-[8px] py-[4px] rounded-[7px] border-none flex justify-center items-center"
            >
              {/* <ShareAltOutlined className="mr-1 text-lg" />{" "} */}
              <span className="text-[15px] font-[600]">Let's Talk</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
