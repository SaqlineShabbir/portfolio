import About from '../../About/About';
import ExpertArea from '../../ExpertArea/ExpertArea';
import Service from '../../ProvidedService/Service';

import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Portfolio from './PortFolio/Portfolio';
// import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
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
