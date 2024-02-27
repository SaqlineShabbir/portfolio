import useProject from './ProjectDetails/hooks/UseProjects';

import SingleProject from './SingleProject/SingleProject';
const Projects = () => {
  const { projects } = useProject();
  return (
    <div className="projects-main lg:px-[150px] px-5 bg-[#FFA546] pb-5 font-Oswald">
      <h1 className="text-white py-5 ">
        Look at my <br /> Projects
      </h1>

      <div className="projects-content grid lg:grid-cols-3">
        {projects?.map((project) => (
          <SingleProject project={project}></SingleProject>
        ))}
      </div>
    </div>
  );
};

export default Projects;
