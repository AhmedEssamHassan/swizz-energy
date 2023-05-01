import React from "react";
import { Menu } from "antd";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
function Navbar({ screenWidth, navbarColor, scrollPosition, setLang, lang }) {
  const { t, i18n } = useTranslation();
  const menuItems = [
    {
      path: "/services",
      label: t("Services"),
    },
    {
      path: "/recycling",
      label: "Recycling",
    },
    {
      path: "/energy",
      label: t("Energy"),
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
      label: t("Knowledge"),
    },
    {
      path: "/about",
      label: t("About_us"),
    },
  ];
  const items = menuItems.map((item) => {
    const { t, i18n } = useTranslation();
    return {
      label: (
        <NavLink activeClassName="active" to={item.path}>
          {item.label}
        </NavLink>
      ),
      key: item.path,
    };
  });
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
    li.ant-menu-item.ant-menu-item-active.ant-menu-item-selected.ant-menu-item-only-child::after{
      border-bottom-color:#3a3e46 !important;
      border-bottom: 4px solid;

    }    
    li.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child::after{
      border-bottom-color:transparent !important;
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
        </div>
        <button
          className="absolute right-5"
          onClick={() => setLang((prev) => (prev == "en" ? "de" : "en"))}
        >
          {lang == "en" ? (
            <span class="fi fi-de rounded"></span>
          ) : (
            <span class="fi fi-gb rounded"></span>
          )}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
