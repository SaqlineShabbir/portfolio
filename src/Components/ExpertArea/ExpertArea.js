import { useState } from 'react';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
const ExpertArea = () => {
  //   const location = useLocation();
  const [active, setActive] = useState('skills');
  //   const isMatched =
  //     location.pathname === '/expert-area/' ||
  //     location.pathname === '/expert-area';
  return (
    <div className=" expert-area  lg:px-[120px] px-5 py-[100px] lg:flex w-[100%]">
      {/* <div className=" expert-area-left text-gray-700 lg:w-[45%]">
        <h1 className="mb-3">My expert Areas -</h1>
        <p>
          My skills include expertise in HTML, CSS, JavaScript, React, NextJs,
          React Native, Redux, Nodejs, TailwindCSS etc. I'm also experienced in
          developing and maintaining databases, coding web applications, and
          deploying websites on various platforms. I believe in staying
          up-to-date with the latest trends and best practices in the industry,
          and continuously learning and growing as a developer. <br />I also
          understand the importance of communication and collaboration with
          clients, ensuring that their needs are met and their vision is to life
          through their website. In my spare time, you can usually find me
          tinkering with new web technologies, attending meetups, and
          contributing to open-source projects. I'm always looking for new and
          exciting challenges, so feel free to reach
        </p>
        <button className="expert-area-button-one px-[40px] bg-gray-700 py-1 text-white rounded mt-5">
          My Resume
        </button>
      </div> */}

      <div className="expert-area-right lg:pl-10 lg:py-0 py-5">
        <button
          className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-gray-500 rounded hover:bg-white group px-[20px] py-[6px] text-white  border"
          type="submit"
          value="Send"
          onClick={() => {
            setActive('skills');
          }}
        >
          {/* button box */}
          <span className="w-0 h-0 rounded bg-gray-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            Skills
          </span>
        </button>

        {/* // */}
        <button
          className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-gray-500 rounded hover:bg-white group px-3 lg:px-[20px] py-[6px] text-white mx-5 border"
          type="submit"
          value="Send"
          onClick={() => {
            setActive('experience');
          }}
        >
          {/* button box */}
          <span className="w-0 h-0 rounded bg-gray-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            Experience
          </span>
        </button>

        <button
          className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-gray-500 rounded hover:bg-white group px-3 lg:px-[20px] py-[6px] text-white  border"
          type="submit"
          value="Send"
          onClick={() => {
            setActive('education');
          }}
        >
          {/* button box */}
          <span className="w-0 h-0 rounded bg-gray-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            Education
          </span>
        </button>

        <div className="expert-area-right-comp">
          {active === 'skills' && <Skills />}
          {active === 'experience' && <Experience />}
          {active === 'education' && <Education />}
        </div>
      </div>
    </div>
  );
};

export default ExpertArea;
