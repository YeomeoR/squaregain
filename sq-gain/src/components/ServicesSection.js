// import icons
import weather from '../images/iconmonstr-weather-91-24.png';
import finance from '../images/iconmonstr-currency-11-24.png';
import infrastructure from '../images/iconmonstr-networking-2-24.png';
import responsibility from '../images/iconmonstr-danger-8-24.png';
import environmental from '../images/iconmonstr-tree-5-24.png';
import supply from '../images/iconmonstr-link-1-24.png';
import wellbeing from '../images/iconmonstr-tree-5-24.png';
import building from '../images/iconmonstr-recycling-15-24.png';
//images
import millennium from '../images/pexels-pixabay-220769.jpg';
import blur from '../images/pexels-negative-space-6618 (1).jpg';
// styles
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage } from '../styles';

const ServicesSection = () => {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>
          <span></span>
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={weather} alt="weather" />
              <h3>Climate Emergency and Carbon</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={finance} alt="finance" />
              <h3>Sustainable Finance</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={infrastructure} alt="infrastructure" />
              <h3>Sustainable Infrastructure</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={responsibility} alt="responsibility" />
              <h3>Corporate Responsibility, Risk Management and Reporting</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={environmental} alt="environmental" />
              <h3>Sustainability and Environmental Management Systems</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={supply} alt="supply" />
              <h3>Supply-Chain Risk Management</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={wellbeing} alt="wellbeing" />
              <h3>Wellbeing</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={building} alt="building" />
              <h3>Zero Carbon and Green Buildings</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              optio! Amet suscipit aliquid velit sit debitis deleniti id
              accusamus. Ea.
            </p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={millennium} alt="millennium" />
        <img src={blur} alt="blur" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 85%;

    padding: 2rem 0rem;
    font-size: 0.9rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  padding: 1rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 10;
      color: #23d997;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
