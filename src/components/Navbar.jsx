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
import { Menu } from "antd";

const items = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Solutions",
    key: "solutions",
    icon: <SolutionOutlined />,
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
    icon: <BulbOutlined />,
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
    icon: <QuestionCircleOutlined />,
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
  {
    label: "Contact",
    key: "contact",
    icon: <ShareAltOutlined />,
  },
];

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar({ screenWidth, navbarColor, scrollPosition }) {
  console.log({ screenWidth });
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();
  const onClick = (e) => {
    // console.log("click ", e);
    // setCurrent(e.key);
  };
  return (
    <>
      <style>
        {`
		ul{
			background: transparent !important;
			border: none !important;
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
        className="z-50 fixed top-0 left-0 w-full h-[80px] flex items-center bg-transparent "
      >
        <div className="container mx-auto flex justify-between items-center ">
          <Link className="mx-7" to={"/"}>
            logo
          </Link>
          {screenWidth > 767 && (
            <Menu
              style={{ background: "transparent" }}
              disabledOverflow={true}
              className=""
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
