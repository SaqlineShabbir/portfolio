// import './Services.css';
const Service = () => {
  return (
    <div className="services-main py-20 px-5 lg:px-[260px]">
      <h1 className="lg:text-5xl  text-3xl font-Raleway font-bold  text-center lg:text-left">
        Services I Provide
      </h1>
      <div className="services-content-wrapper py-10 text-lg">
        <div className="services-content  hover:bg-gray-100 py-5 px-5  border-b-2">
          <div className="d-flex service-content-text-main py-5">
            <div className="d-flex  service-content-text-left">
              <h4>01</h4>
              <h4 className="px-4">Web Development</h4>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda error natus debitis, totam minus quae iusto inventore
            </p>
          </div>

        </div>
        <div className="services-content   hover:bg-gray-100 py-5 px-5  border-b-2">
          <div className="d-flex service-content-text-main ">
            <div className="d-flex  service-content-text-left">
              <h4>02</h4>
              <h4 className="px-4">Mobile App Development</h4>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda error natus debitis, totam minus quae iusto inventore
            </p>
          </div>
        </div>
        <div className="services-content   hover:bg-gray-100 py-5 px-5  border-b-2">
          <div className="d-flex service-content-text-main ">
            <div className="d-flex  service-content-text-left">
              <h4>03</h4>
              <h4 className="px-4">Responsive Website Design</h4>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda error natus debitis, totam minus quae iusto inventore
            </p>
          </div>
        </div>
        <div className="services-content  hover:bg-gray-100  py-5 px-5  border-b-2">
          <div className="d-flex service-content-text-main ">
            <div className="d-flex  service-content-text-left">
              <h4>04</h4>
              <h4 className="px-4">UI/UX Design</h4>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda error natus debitis, totam minus quae iusto inventore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
