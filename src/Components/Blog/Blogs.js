import React from 'react';
import img1 from '../../asset/images/Abstract PNG.png';
// import './Blogs.css';
const Blogs = () => {
  return (
    <div className="Blogs-main lg:px-[100px]  lg:py-[100px]">
      <h2>
        From My <br />
        Blog Post
      </h2>
      <div className="blog-content-main  grid lg:grid-cols-4">
        <div className="single-blog bg-[#ffd900]   p-[30px] lg-m-[10px]">
          <div className="single-blog-left">
            <p>09 February 2022</p>
            <h4>Diversification of digital marketing stategies</h4>
            <button className="blog-button  bg-[#ffd900] mt-10">
              Read More
            </button>
          </div>
          <div className="single-blog-right">
            <img className=" w-[200px] h-[200px] px-[20px]" src={img1} alt="" />
          </div>
        </div>
        <div className="single-blog bg-[#ffd900]  flex p-[30px] lg-w-[600px] lg-m-[10px]">
          <div className="single-blog-left">
            <p>09 February 2022</p>
            <h4>Diversification of digital marketing stategies</h4>
            <button className="blog-button">Read More</button>
          </div>
          <div className="single-blog-right">
            <img className="h-[200px] w-[200px] px-[20px]" src={img1} alt="" />
          </div>
        </div>
        <div className="single-blog  bg-[#ffd900]  flex p-[30px] lg-w-[600px] lg-m-[10px]">
          <div className="single-blog-left">
            <p>09 February 2022</p>
            <h4>Diversification of digital marketing stategies</h4>
            <button className="blog-button">Read More</button>
          </div>
          <div className="single-blog-right">
            <img className="h-[200px] px-[20px]" src={img1} alt="" />
          </div>
        </div>
        <div className="single-blog  bg-[#ffd900]  flex p-[30px] lg-w-[600px] lg-m-[10px]">
          <div className="single-blog-left">
            <p>09 February 2022</p>
            <h4>Diversification of digital marketing stategies</h4>
            <button className="blog-button">Read More</button>
          </div>
          <div className="single-blog-right">
            <img src={img1} className="h-[200px] w-[200px] px-[20px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
