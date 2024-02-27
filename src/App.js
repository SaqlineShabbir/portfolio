import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropagateLoader from 'react-spinners/ClipLoader';

import About from './Components/About/About';
import Experience from './Components/ExpertArea/Experience/Experience';
import ExpertArea from './Components/ExpertArea/ExpertArea';
import Skills from './Components/ExpertArea/Skills/Skills';
import Home from './Components/Main/Home/Home';
import ProjectDetails from './Components/Main/Projects/ProjectDetails/ProjectDetails';
import useEverything from './hooks/useEverything';

function App() {
  const { isLoading } = useEverything();
  // if(isLoading ) return <div className="spinner"><Spinner  animation="border" /> </div>

  return (
    <div className="spinner">
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <PropagateLoader
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              color={'#123abc'}
              loading={isLoading}
              size={150}
            />
          </div>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
            {/* <Routes>
              <Route path="/blogs" element={<Blogs />} />
            </Routes> */}
            <Routes>
              <Route
                path="/projectDetails/:projectId"
                element={<ProjectDetails />}
              />
            </Routes>
            {/* <Routes>
              <Route path="/skills" element={<Skills />} />
            </Routes>
            <Routes>
              <Route path="/expert-area" element={<ExpertArea />} />
            </Routes> */}

            <Routes path="expert-area" element={<ExpertArea />}>
              <Route path="skills" element={<Skills />} />
              <Route path="experience" element={<Experience />} />
              {/* <Route path="upcoming-events" element={<UpcomingEvents />} />
              <Route path="archived-events" element={<ArchivedEvents />} /> */}
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
