import { FiHome } from "react-icons/fi";
import { FaBook } from "react-icons/fa6";
import { BsCodeSlash } from "react-icons/bs";
import { IoIosCloudOutline, IoIosLogOut } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { BiSupport } from "react-icons/bi";

const Navbar = () => {
  const menu = [
    {
      icon: <FiHome />,
      item: "Repositories",
    },
    {
      icon: <BsCodeSlash />,
      item: "AI Code Review",
    },
    {
      icon: <IoIosCloudOutline />,
      item: "Cloud Security",
    },
    {
      icon: <FaBook />,
      item: "How to Use",
    },
    {
      icon: <GoGear />,
      item: "Settings",
    },
  ];
  return (
    <div className="rounded-lg ">
      <div className="navbar bg-base-100 w-full md:w-60 md:h-screen md:flex md:flex-col gap-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="text-lg rounded-md  hover:bg-blue-500 hover:text-white"
                >
                  <div>
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-lg">{item.item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <span className="text-2xl">CodeAntAI</span>
            <img src="/images/codeAntAI.png" alt="logo" />
          </div>
        </div>
        <select className="select select-bordered mx-2 w-full max-w-xs">
          <option disabled selected>
            UtkarshDhairyaPanwar
          </option>
          <option>option-2</option>
          <option>option-3</option>
        </select>
        <div className="navbar-center hidden lg:flex">
          <div>
            <ul className="menu menu-vertical px-1">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="text-lg rounded-md  hover:bg-blue-500 hover:text-white"
                >
                  <div>
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xl">{item.item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="  w-full h-full flex flex-col items-end justify-end gap-2 px-4">
          <div className=" w-full flex justify-start text-xl items-center gap-2 p-2 rounded-md hover:bg-blue-600 hover:text-white">
        
              <BiSupport />
            
            <div>Support</div>
          </div>
          <div className="w-full flex justify-start text-xl items-center gap-2 p-2 rounded-md hover:bg-blue-600 hover:text-white">
            <IoIosLogOut />
            <div>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
