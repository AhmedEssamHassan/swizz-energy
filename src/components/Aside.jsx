import { useState } from "react";

const Aside = ({ scrollPosition }) => {
  const [menuAvtive, setMenuActive] = useState(false);

  const activeHandler = () => setMenuActive(!menuAvtive);

  return (
    <nav className=" h-[100px] px-[20px] md:mx-0  flex items-center fixed w-[100%] z-20 ">
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
        `}
      </style>

      <div className="container px-3 mx-auto">
        <div className="borders-container">
          <div
            className={`border-top   ${
              menuAvtive ? "active" : ""
            }    bg-[#fff] fixed right-[20px] top-0 h-[20px]`}
          ></div>
          <div
            className={`border-right w-[20px] h-[200px] bg-[#fff] fixed right-0 top-0   ${
              menuAvtive ? "active" : ""
            }  `}
          ></div>
        </div>

        <div className="navbar_inner   flex justify-between">
          <div> logo </div>
          <div className="sidebar-container z-50" onClick={activeHandler}>
            <button
              className={`hamburger-menu flex flex-col gap-2 outline-0 ${
                menuAvtive && "translate-y-2"
              }
              transition-all delay-[2000]}
               `}
            >
              <div
                className={`${
                  menuAvtive ? "w-[35px]" : "w-[25px]"
                } transition-all h-[2px] ${
                  menuAvtive && "rotate-45 translate-y-1"
                }
                bg-[#333]
                `}
              ></div>
              {menuAvtive ? null : (
                <div
                  className={`w-[35px] transition-all h-[2px]
                  bg-[#333]

                  `}
                ></div>
              )}

              <div
                className={`${
                  menuAvtive ? "w-[35px]" : "w-[15px]"
                } transition-all h-[2px] 
                ${menuAvtive && "-rotate-45 -translate-y-1"}
                bg-[#333]
                `}
              ></div>
            </button>
          </div>
        </div>
      </div>
      <aside
        className={`bg-[#fff] w-[100%] max-w-[450px] fixed right-0 h-[100vh] top-0 px-4 py-4  ${
          !menuAvtive ? "right-[-450px]  active" : "  right-0"
        } `}
      >
        <h2 className="text-yellow-100"> SIDE BAR </h2>
      </aside>
    </nav>
  );
};
export default Aside;
