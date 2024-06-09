import Service from "../../ProvidedService/Service";

import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Portfolio from "./PortFolio/Portfolio";
// import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Resume></Resume>
      {/* <About></About> */}
      {/* <ExpertArea /> */}
      <Portfolio />
      <Service />

      {/* <Projects></Projects> */}
      {/* <Blogs /> */}
      <Contact></Contact>
    </>
  );
};

export default Home;
