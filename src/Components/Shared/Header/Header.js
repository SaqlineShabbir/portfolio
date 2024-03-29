import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import img from '../../../asset/images/shlogo.PNG';
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav id="home" className=" bg-white ">
      <div className="justify-between px-5  md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between   md:block lg:mr-20">
            <p className="flex">
              <img className="w-8" src={img} alt="" />
              <h2 className="text-lg font-bold mt-1 text-gray-700">
                Sabbir Hossain
              </h2>
            </p>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className=" space-y-8 md:flex md:space-x-6 font-bold md:space-y-0 ">
              <li className="text-gray-600 hover:text-black-600">
                <HashLink smooth to="#home">
                  <p>Home</p>
                </HashLink>
              </li>

              <li className="text-gray-600 hover:text-black-600">
                <HashLink smooth to="#about">
                  <p>About</p>
                </HashLink>
              </li>
              <li className="text-gray-600 hover:text-black-600">
                <HashLink smooth to="#projects">
                  <p>Projects</p>
                </HashLink>
              </li>
              <li className="text-gray-600 hover:text-black-600">
                <HashLink smooth to="#contact">
                  <p>Contact</p>
                </HashLink>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </nav>
  );
}
