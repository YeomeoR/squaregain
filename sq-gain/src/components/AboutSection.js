import blur from '../images/pexels-yoss-cinematic-2564153.jpg';
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../styles';
//images
import logo3 from '../images/logo3.png'



const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <img src={logo3} alt=""/>
          <h3>
            Advantage Through <span>Sustainability</span>
          </h3>

          <h3>
            <span>Zero</span>-Carbon
          </h3>

          <h3>Sustainable Finance</h3>

          <h3>Wellbeing</h3>

          <h3>Supply Chain</h3>
        </div>
        {/* <p>
            We are a sustainability consultancy focused on the built
            environment, and work in partnership with our public and private
            sector clients to deliver robust sustainable and commercial
            solutions, through a collaborative, pragmatic approach.
          </p> */}
        <StyledHide>
          <button>Contact Us</button>
        </StyledHide>
      </StyledDescription>

      <StyledImage>
        <img src={blur} alt="blur" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
