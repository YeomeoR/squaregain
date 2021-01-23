// import icons
import weather from '../images/iconmonstr-weather-90-240.png';
import finance from '../images/iconmonstr-currency-10-240.png';
import infrastructure from '../images/iconmonstr-networking-4-240.png';
import responsibility from '../images/iconmonstr-danger-8-240.png';
import environmental from '../images/iconmonstr-leaf-1-240 (1).png';
import supply from '../images/iconmonstr-link-2-240.png';
import wellbeing from '../images/iconmonstr-tree-5-240.png';
import building from '../images/iconmonstr-recycling-15-240.png';
//images
import millennium from '../images/pexels-pixabay-220769.jpg';

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          <span></span>
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={weather} alt="weather" />
              <h3>Climate Emergency and Carbon</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={finance} alt="finance" />
              <h3>Sustainable Finance</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={infrastructure} alt="infrastructure" />
              <h3>Sustainable Infrastructure</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={responsibility} alt="responsibility" />
              <h3>Corporate Responsibility, Risk Management and Reporting</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={environmental} alt="environmental" />
              <h3>Sustainability and Environmental Management Systems</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={supply} alt="supply" />
              <h3>Supply-Chain Risk Management</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={wellbeing} alt="wellbeing" />
              <h3>Wellbeing</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={building} alt="building" />
              <h3>Zero Carbon and Green Buildings</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={millennium} alt="millennium" />
      </div>
    </div>
  );
};

export default ServicesSection;
