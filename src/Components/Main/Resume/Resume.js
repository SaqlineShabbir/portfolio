import React, { useEffect, useRef } from "react";
import { GoDotFill } from "react-icons/go";
const Resume = () => {
  const experience = [
    {
      id: 1,
      title: "Postgraduate Diploma in Information Technology (PGDIT) NSTU",
      company: "Ostad",
      //   logo: ostad,
      date: "February 2024 - Present",
      width: 35, // Use a number instead of a string
    },
    {
      id: 2,
      title: "Bachelor of Business Administration (BBA)",
      company: "Programming Hero",
      //   logo: ph,
      date: " March 2017 - April 2021",
      width: 55, // Use a number instead of a string
    },
    {
      id: 3,
      title: "Higher Secondary Certificate (HSC)",
      company: "GenRes",
      //   logo: genres,
      date: "January 2015 - Feb 2017",
      width: 50,
    },
  ];
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "MySQL",
    "Tailwind",
    "Bootstrap",
    "Mongoose",
    "Typescript",
    "Redux",
    "Firebase",
    "Prisma",
  ];
  const tools = [
    {
      id: 1,
      name: "VsCode",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    },
    {
      id: 2,
      name: "Github",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s",
    },
    {
      id: 3,
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png",
    },
    {
      id: 4,
      name: "Postman",
      logo: "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png",
    },
    {
      id: 5,
      name: "MongoDb Compass",
      logo: "https://static.macupdate.com/products/62461/m/mongodb-compass-logo.png?v=1663508519",
    },

    // {
    //   id: 7,
    //   name: "Trello",
    //   logo: "https://assets.stickpng.com/images/58482beecef1014c0b5e4a36.png",
    // },
    {
      id: 8,
      name: "Vercel",
      logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png",
    },
    {
      id: 9,
      name: "Swagger",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png",
    },
  ];
  const blobRef = useRef(null);
  useEffect(() => {
    const blob = blobRef.current;
    const handleResize = () => {
      //   randomBlob(blobRef);
    };

    // Randomize the initial position
    // randomBlob(blobRef);

    window.addEventListener("resize", handleResize);

    const intervalId = setInterval(() => {
      //   randomBlob(blobRef);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="max-w-[1380px] mx-auto w-full"
    >
      <div className="lg:md:px-0 px-4 lg:md:py-30 py-20">
        <div
          ref={blobRef}
          className="blob2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="rounded-xl px-6 py-12"
          style={{ background: "rgba(200, 200, 200, 0.05)" }}
        >
          {/* header */}
          <div className="flex items-center justify-between">
            <h2 className="font-Raleway font-semibold text-2xl ">Resume</h2>

            <div className="flex justify-between">
              <GoDotFill size={25} color="red" />
              <GoDotFill size={25} color="green" />
              <GoDotFill size={25} color="blue" />
            </div>
          </div>

          {/* content part 1 */}
          <div className="grid lg:md:grid-cols-2 lg:md:gap-x-28 py-8">
            <div>
              <div className="flex items-center justify-between pb-6">
                <h2 className="flex flex-col font-montserrat">
                  <span className="lg:md:text-xl text-lg font-medium ">
                    Sabbir Hossain
                  </span>
                  <span className="lg:md:text-md text-[12px] ">
                    MERN Stack Developer
                  </span>
                </h2>
                <h2 className="font-montserrat flex items-center gap-x-2">
                  <span className="text-[#EF4765] lg:md:text-6xl text-5xl font-bold">
                    2
                  </span>
                  <span className="flex flex-col  lg:md:text-md text-[12px]">
                    Years
                    <span className="">Experience </span>
                  </span>
                </h2>
              </div>
              <hr className="w-42  border-t-2 border-gray-700" />
              <p className="pt-6 lg:md:text-[16px] text-[12px]">
                I'm a young and energetic MERN Stack Developer who's passionate
                about learning and staying on the cutting edge of technology. I
                love picking up new skills quickly and staying in tune with the
                latest industry trends. My main goal is to use my skills to make
                a positive impact in the world. In addition to my technical
                abilities, I'm a great communicator, which helps me collaborate
                effectively with diverse teams. I bridge the gap between
                developers and other stakeholders to ensure successful projects.
                I'm committed to using my knowledge to create solutions that not
                only meet but surpass user and client expectations, ultimately
                making a real difference in the digital world.
              </p>
            </div>
            <hr className="w-42  border-t-2 border-gray-700 mt-12 mb-6 lg:md:hidden block" />
            <div>
              {/* <div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div> */}
              {experience.map((exp) => (
                <div key={exp?.id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="lg:md:text-lg text-md font-montserrat font-medium  mb-2">
                        {exp?.title}
                      </h2>
                      {/* <img
                        style={{ width: `${exp?.width}%` }}
                        className={`h-auto`}
                        src={exp?.logo}
                        alt="ostad"
                        width=""
                        height=""
                      /> */}
                    </div>
                    <h2
                      className={`py-2 px-6 text-[12px] lg:text-[15px] font-medium rounded-lg ${
                        exp?.date.includes("Present") ||
                        exp?.date.includes("Feb")
                          ? "bg-[#EF4765] text-[#E0DEDE]"
                          : "bg-[#343957] text-[#E0DEDE]"
                      }`}
                    >
                      {exp?.date}
                    </h2>
                  </div>
                  <hr className="w-42  border-t-2 border-gray-700 mt-4 mb-6" />
                </div>
              ))}
            </div>
          </div>

          {/* content part 2 */}
          <div className="grid lg:md:grid-cols-2 lg:md:gap-x-28 py-8">
            <div>
              <h2 className="lg:md:text-xl text-lg font-medium  font-montserrat ">
                Skills
              </h2>
              <hr className="w-42  border-t-2 border-gray-700 mb-6 mt-4" />
              <div className="grid lg:md:grid-cols-5 grid-cols-3 lg:md:gap-4  gap-2 items-center justify-between pb-6">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    style={{ background: "rgba(255, 255, 255, 0.12)" }}
                    className="rounded-lg"
                  >
                    <h2 className="lg:md:text-md text-[12px] font-montserrat font-medium border p-2 text-center">
                      {skill}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="lg:md:text-xl text-lg font-medium  font-montserrat ">
                Tools I use every day
              </h2>
              <hr className="w-42  border-t-2 border-gray-700 mb-6 mt-4" />
              <div className="grid lg:md:grid-cols-6 grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <div key={tool?.id} className="rounded-lg">
                    <img
                      src={tool?.logo}
                      alt={tool?.name}
                      width={50}
                      height={50}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* content part 3 */}
          <div>
            <hr className="w-42  border-t-2 border-gray-700 mb-6 mt-4" />

            <h2 className="lg:md:text-2xl text-xl font-Raleway  ">
              Loading More...
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
