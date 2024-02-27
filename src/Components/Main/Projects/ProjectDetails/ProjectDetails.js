import React from 'react';
import { useParams } from 'react-router';
import useProject from './hooks/UseProjects';
import './ProjectDetails.css';
const ProjectDetails = () => {
  const { projectId } = useParams();
  const { projects } = useProject();

  const exactItem = projects?.filter((pd) => pd.id === projectId);
  return (
    <>
      <div className="projectDetails-main ">
        <div className="projectDetails-content">
          <div>
            <h1> {exactItem[0]?.name}</h1>
            <p>{exactItem[0]?.pera} </p>
            <h5>Technology</h5>
            <ul className="d-flex">
              <div>
                <p>
                  <i className="far fa-check-circle text-warning"></i> React Js
                </p>
                <p>
                  <i className="far fa-check-circle text-warning"></i> Bootstrap
                </p>
                <p>
                  <i className="far fa-check-circle text-warning"></i> Mongo DB
                </p>
              </div>
              <div className="ms-3">
                <p>
                  <i className="far fa-check-circle text-warning"></i> Express
                  Js
                </p>
                <p>
                  <i className="far fa-check-circle text-warning"></i> Mongo DB
                </p>
                <p>
                  <i className="far fa-check-circle text-warning"></i> Media
                  Query
                </p>
              </div>
            </ul>
            <a href={exactItem[0]?.liveLink}>
              <button className="details-btn">Live Link</button>
            </a>
            <a href={exactItem[0]?.sourceCode}>
              {' '}
              <button className="details-btn">Source Code</button>
            </a>
          </div>
          <div className="projectDetails-texts">
            <img src={exactItem[0]?.img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
