import { Link } from 'react-router-dom';
import profile from '../../../src/asset/images/web.PNG';
import hard from '../../../src/asset/images/hard.jpg';
import focus from '../../../src/asset/images/focus.jpg';
import success from '../../../src/asset/images/success.jpg';
import never from '../../../src/asset/images/neverf.PNG';
import { FiTool } from "react-icons/fi";
import { FaFilePowerpoint, FaMapPin } from 'react-icons/fa';
import file from '../../resume/_Sabbir Hossain Resume.pdf';

const About = () => {
  return (
    <>

      <div id="about" className=" lg:flex  lg:px-[200px] lg:py-10 mx-5 ">

        <div className="lg:flex">
          <div>
            <div className=" lg:w-[300px] lg:h-[250px] w-[100%] border rounded mb-6 ">
              <img
                className=" w-full lg:max-w-[300px] min-w-screen  lg:h-[250px]  h-[250px] "
                src={success}
                alt=""
              />


            </div>
            <div className="w-[100%] lg:w-[300px] lg:h-[250px] border rounded  dark:bg-dark_primary">
              <img
                className=" lg:w-[300px] w-full min-w-screen lg:h-[250px] h-full max-h-[250px]"
                src={focus}
                alt=""
              />


            </div>
          </div>
          <div className="  lg:ml-10 dark:bg-dark_primary  lg:space-y-0 lg:pt-[100px]">
            <div className=" lg:w-[300px] pt-5 lg:pt-0 lg:h-[250px] w-[100%] border rounded  mb-6">
              <img
                className="  lg:w-[300px] w-full  min-w-screen  max-h-[250px] lg:h-[250px]"
                src={never}
                alt=""
              />


            </div>
            <div className="w-[100%] lg:w-[300px] lg:h-[250px] border rounded ">
              <img
                className="lg:w-[300px] lg:h-[250px]  w-full  min-w-screen max-h-[250px] "
                src={hard}
                alt=""
              />

            </div>
          </div>
        </div>

        <div className="lg:ml-20  lg:mt-[130px] mt-20 space-y-3">

          <div className="banner-buttons flex items-center space-x-2">
            <h1 className="text-lg">About Me</h1>


          </div>
          <h1 className="text-xl md:text-3xl">
            I'm Sabbir Hossain, Web Developer with 2 years of experience.
          </h1>
          <p>
            I'm passionate about creating intuitive, user-friendly websites that are both aesthetically pleasing and functional to use. In my spare time, you can usually find me tinkering with new web technologies, attending meetups, and contributing to open-source projects.
          </p>
          <ul>
            <li className="flex mb-2">
              <FaMapPin />
              <p className="w-11/12 mt-2 pl-2 d">
                As a developer, I don't just write lines of code; I architect solutions, breathing life into pixels and logic. Each keystroke is a brushstroke on the canvas of my technological journey.
              </p>
            </li>
            <li className="flex mb-2">
              <FaMapPin />
              <p className=" w-11/12 mt-2 pl-2 ">
                In the digital tapestry of my code, every line weaves a story of determination and a commitment to crafting not just software, but a legacy of innovation.
              </p>
            </li>
            <li className="flex mb-10">
              <FaMapPin />
              <p className=" w-11/12 mt-2 pl-2 ">
                In the realm of coding, success is not measured by the lines written, but by the tenacity of the developer. Hard work isn't just a task; it's the heartbeat of every exceptional codebase.
              </p>
            </li>
            <button className='flex border px-3 ml-5'>   <a
              className="download    py-1 flex cursor-pointer"
              href={file}
              download
            >
              <p>See Resume</p>
              <FaFilePowerpoint />
              <i class="fas fa-long-arrow-alt-right text-gray-700 w-25"></i>
            </a></button>
          </ul>

        </div>
      </div>
    </>
  );
};

export default About;
