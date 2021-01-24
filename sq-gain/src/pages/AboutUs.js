import AboutSection from '../components/AboutSection';
// import ServicesSection from '../components/ServicesSection';
import Personnel from '../components/Personnel';
//styled
import styled from 'styled-components'

const AboutUs = () => {
  return (
    <>
      <AboutSection />
      {/* <ServicesSection /> */}
      <StyledLine></StyledLine>
      <Personnel />
    </>
  );
};

const StyledLine = styled.div`

  background: #ccc;
  height: 0.2rem;
  margin: 2rem 0rem;
  width: 90%;
  margin-left: 5%;

`;
export default AboutUs;
