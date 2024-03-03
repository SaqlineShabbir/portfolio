import React from 'react';

import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
const Contact = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className=" pb-[150px] py-10 px-10">
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#0d47a1",
          //   },
          // },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 50,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 70,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
      <h1 className="text-center font-bold lg:text-5xl text-3xl fw-bolder">
        GET IN TOUCH
      </h1>
      <div className="contact-content px-0 lg:flex justify-between  lg:px-[200px]">
        <div className="contact-texts  pt-[80px]  ">
          <h4 className='text-lg font-bold'>SEY HELLO!</h4>
          <p>
            Feel free to get in touch with me .I'm always open to discussing new
            products, creative ideas or opportunities to be part of your vision.
          </p>

          <h5>
            <i className="fas fa-envelope-open-text text-warning"></i> EMAIL ME{' '}
          </h5>
          <p className="">sabbir0911hossain@gmail.com</p>
          <h5>
            <i className="fas fa-phone-alt text-warning"></i> CALL ME{' '}
          </h5>
          <p>+8801710547636</p>
          <div className="flex space-x-5 pt-5">
            <Link
              className="cursor-pointer"
              to="https://www.facebook.com/SabbirHossain0911"
            >
              {' '}
              <BsFacebook className="text-blue-700" size={32} />
            </Link>

            <Link
              className="cursor-pointer"
              to="https://github.com/SaqlineShabbir"
            >
              <BsGithub className="text-black" size={32} />
            </Link>
            <Link
              className="cursor-pointer"
              to="https://www.linkedin.com/in/sabbir0911/"
            >
              <ImLinkedin className="  text-blue-600" size={32} />
            </Link>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="ml-30  lg:pt-[100px] text-white space-y-2"
        >
          <div className="flex  space-x-3">
            <div>
              <p className="">Name</p>
              <input
                className="mb-3 ms-3  p-[7px]  lg:w-[200px]  w-full border rounded pb-2  border-gray-700"
                placeholder="NAME"
                type="text"
                name="user_name"
              />
            </div>
            <div>
              <p className="">Email</p>
              <input
                className=" p-[7px]  lg:w-[200px] w-full border rounded pb-1 border-gray-700"
                placeholder="EMAIL"
                type="email"
                name="user_email"
              />{' '}
            </div>
          </div>

          <p>Message</p>
          <textarea
            className=" p-[9px]  lg:w-[300px] w-full border rounded pb-2  border-gray-700"
            placeholder="MESSAGE"
            name="message"
          />
          <br />
          {/* <button
            className=" mt-3 border px-5 rounded bg-gray-700"
            type="submit"
            value="Send"
          >
            Send Message
          </button> */}

          <button
            className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-gray-500 rounded hover:bg-white group px-5 py-1 text-white  border"
            type="submit"
            value="Send"
          >
            {/* button box */}
            <span className="w-0 h-0 rounded bg-gray-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
