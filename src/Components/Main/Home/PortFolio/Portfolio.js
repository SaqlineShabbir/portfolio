import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { GoLinkExternal } from 'react-icons/go';
import { Link } from 'react-router-dom';
import img1 from '../../../../asset/images/digital  village.PNG';
import img3 from '../../../../asset/images/doctors  portal.PNG';
import img from '../../../../asset/images/q.PNG';
import img2 from '../../../../asset/images/portfolioimg1.PNG';
import { FcIdea } from "react-icons/fc";
const Portfolio = () => {
  return (
    <div id="projects" className="px-5">
      <div className="lg:px-[200px] my-[60px] ">
        <div className=' py-20' ><h1 className="font-Raleway font-bold lg:md:text-5xl text-3xl text-center lg:text-left"> Check Out My Projects</h1>
          <div className='flex space-x-1'><p className='text-xl pt-2 text-center  font-Raleway lg:text-left'>Transforming Ideas into Seamless Digital Experiences </p><FcIdea size={30} />

          </div>
        </div>
        <div className="pMain space-y-20">
          {/* //project start */}
          <div className="lg:flex lg:w-[100%] ">
            <div className="lg:w-[50%] flex justify-center">
              <img
                className="lg:w-[400px] h-[250px] border rounded-xl"
                src={img}
                alt=""
              />
            </div>
            <div className="lg:w-[50%] text-center pt-6">
              <h1 className="font-bold ">OneQuiz</h1>
              <p className="">
                It's A website which have two role one is user and other one is
                admin. A user can attend various types of quiz and can see their
                result percentage wise on the other hand an admin can publish
                various types of quiz and publish certificates
              </p>

              <div className="flex text-center justify-center font-bold my-5 text-sm text-gray-800">
                <p>Next Js</p>
                <p className="px-2">Tailwind</p>
              </div>
              <div className="flex text-center justify-center font-bold text-sm text-gray-800">
                <Link to="https://github.com/SaqlineShabbir/OnQuiz">
                  <p className="flex">
                    Code <BsGithub className="mt-1 ml-1" />
                  </p>
                </Link>
                <Link to="https://on-quiz.vercel.app/">
                  <p className="px-2 flex">
                    Live Demo <GoLinkExternal className="mt-1 ml-1" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* // */}
          <div className="lg:flex w-[100%] lg:px-20 px-5">
            <div className="lg:w-[50%] text-center pt-6">
              <h1 className="font-bold ">Digital Village</h1>
              <p className="">
                It's A team project where seven people worked which have two
                role one is user and other one is admin. A user will have
                various services depending upon their need on the other hand an
                admin can publish various services and can edit
              </p>

              <div className="flex text-center justify-center font-bold my-5 text-sm text-gray-800">
                <p>React</p>
                <p className="px-2">Tailwind</p>
              </div>
              <div className="flex text-center justify-center font-bold text-sm text-gray-800">
                <Link to="https://github.com/akhlakuzzalal/digital_village_front-end">
                  {' '}
                  <p className="flex">
                    Code <BsGithub className="mt-1 ml-1" />
                  </p>
                </Link>
                <Link to="https://digital-village.onrender.com/">
                  <p className="px-2 flex">
                    Live Demo <GoLinkExternal className="mt-1 ml-1" />
                  </p>
                </Link>
              </div>
            </div>

            <div className="lg:w-[50%] flex justify-center pt-5 lg:pt-0">
              <img
                className="lg:w-[400px] h-[250px] border rounded-xl"
                src={img1}
                alt=""
              />
            </div>
          </div>

          {/* second */}
          <div className="lg:flex w-[100%]  px-5 lg:px-20 ">
            <div className="lg:w-[50%] flex justify-center">
              <img
                className="lg:w-[400px]  h-[250px] border rounded-xl"
                src={img2}
                alt=""
              />
            </div>
            <div className="lg:w-[50%] text-center pt-6">
              <h1 className="font-bold  ">Dream Rainbow</h1>
              <p className="">
                It's A single service providing website and it has two role one
                is use and other one is admin. A user can book services and can
                pay online on the other hand an admin can manage services and
                bookings.
              </p>

              <div className="flex text-center justify-center font-bold my-5 text-sm text-gray-800">
                <p>React</p>
                <p className="px-2">Tailwind</p>
              </div>
              <div className="flex text-center justify-center font-bold text-sm text-gray-800">
                <Link to="https://github.com/SaqlineShabbir/Dream-Rainbow-Ui">
                  <p className="flex">
                    Code <BsGithub className="mt-1 ml-1" />
                  </p>
                </Link>
                <Link to="https://wall-paint-886e7.web.app/">
                  <p className="px-2 flex">
                    Live Demo <GoLinkExternal className="mt-1 ml-1" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* //second end */}
          <div className="lg:flex w-[100%] lg:px-20  px-5">
            <div className="lg:w-[50%] text-center pt-6">
              <h1 className="font-bold ">Doctors Portal</h1>
              <p className="">
                It's a website for dentist organization it has two role one is
                admin and other one is user a user can select services and book
                appointment on the other hand an admin can manage services and
                appointments.
              </p>

              <div className="flex text-center justify-center font-bold my-5 text-sm text-gray-800">
                <p>React</p>
                <p className="px-2">Material-UI</p>
              </div>
              <div className="flex text-center justify-center font-bold text-sm text-gray-800">
                <Link to="https://github.com/SaqlineShabbir/doctors-portal-client-side">
                  {' '}
                  <p className="flex">
                    Code <BsGithub className="mt-1 ml-1" />
                  </p>
                </Link>
                <Link to="https://loquacious-fairy-bcf088.netlify.app/">
                  <p className="px-2 flex">
                    Live Demo <GoLinkExternal className="mt-1 ml-1" />
                  </p>
                </Link>
              </div>
            </div>
            <div className="lg:w-[50%] flex justify-center pt-5 lg:pt-0">
              <img
                className="lg:w-[400px] h-[250px] border rounded-xl"
                src={img3}
                alt=""
              />
            </div>
          </div>

          {/* //project end */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
