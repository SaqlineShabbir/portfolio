import React from 'react';
import { Link } from 'react-router-dom';

import './SingleProject.css';
const SingleProject = ({ project }) => {
  const { pera, name, id, img } = project;

  return (
    <>
      <Link to={`/projectDetails/${id}`}>
        <div className="relative ">
          <div className="img-box  top-0 left-0 w-[100%] object-cover py-5">
            <img className="lg:w-[300px] w-full h-[300px]" src={img} alt="" />
          </div>
          <div className="content-text flex justify-center items-center absolute top-0 left-0 w-[100%] h-[100%]">
            <div className="mr-5 hover:bg-[#101e29]  h-[300px]  w-[100%] text-white hover:translate-4 hover:transition delay-300 hover:duration-500 flex justify-center items-center">
              <h2 className="text-yellow-300 text-3xl font-bold">{name}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleProject;
