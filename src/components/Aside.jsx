import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/swiss-logo.jpg";
const Aside = ({ scrollPosition, screenWidth, navbarColor }) => {
  const [menuActive, setMenuActive] = useState(false);

  const activeHandler = () => setMenuActive(!menuActive);
  return (
    <nav
      className=" h-[100px] px] md:mx-0  flex items-center fixed w-[100%] z-20 "
      style={{
        backgroundColor: screenWidth <= 767 ? navbarColor : "transparent",
        transition: "all .3s ease-in",
        boxShadow:
          screenWidth <= 767
            ? scrollPosition > 100
              ? "0px 15px 45px #00000038"
              : "none"
            : "none",

        height: scrollPosition > 100 ? "70px" : "100px",
      }}
    >
      <style jsx="true">
        {`
          .border-top {
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 15% 100%);
            z-index: 33;
            transition: all 0.5s linear;
            width: 200px;
          }
          .border-top.active {
            width: 0px;
            transition: all 0.5s linear 0.3s;
          }
          .border-right {
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 85%);
            z-index: 33;
            transition: all 0.7s linear;
          }
          .border-right.active {
            clip-path: none;
            height: 100vh;
          }
          aside {
            transition: all 0.5s ease-in-out 0.4s;
          }
          aside.active {
            transition: all 0.5s ease-in-out 0s;
          }

          .hamburger-react[aria-expanded="false"] > div:first-of-type div {
            width: 24px !important;
          }

          .hamburger-react[aria-expanded="false"] > div:last-of-type div {
            width: 15px !important;
          }
        `}
      </style>

      <div className="container px-3 mx-auto">
        <div className="borders-container">
          <div
            className={`border-top   ${
              menuActive ? "active" : ""
            }    bg-[#fff] fixed right-[20px] top-0 h-[20px]`}
          ></div>
          <div
            className={`border-right w-[20px] h-[200px] bg-[#fff] fixed right-0 top-0   ${
              menuActive ? "active" : ""
            }  `}
          ></div>
        </div>

        <div className="navbar_inner   flex justify-between">
          <Link to="/">
            <img src={logo} alt="logo" width={85} />
          </Link>
          <div className="sidebar-container z-50" onClick={activeHandler}>
            <button
              className={`hamburger-menu flex flex-col gap-2 outline-0 ${
                menuActive && "translate-y-2"
              }
              transition-all delay-[2000]}
               `}
            >
              <Hamburger toggled={menuActive} toggle={setMenuActive} />
            </button>
          </div>
        </div>
      </div>
      <aside
        className={`bg-[#fff] w-[100%] max-w-[450px] fixed right-0 h-[100vh] top-0 px-4 py-4  ${
          !menuActive ? "right-[-450px]  active" : "  right-0"
        } `}
      >
        <h2 className="text-yellow-100"> SIDE BAR </h2>
      </aside>
    </nav>
  );
};
export default Aside;
