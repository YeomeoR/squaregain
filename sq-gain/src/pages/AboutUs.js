import AboutSection from '../components/AboutSection';
// import ServicesSection from '../components/ServicesSection';
import Personnel from '../components/Personnel';
//animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'



//styled
import styled from 'styled-components'

const AboutUs = () => {
  
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      {/* <ServicesSection /> */}
      <StyledLine></StyledLine>
      <Personnel />
    </motion.div>
  );
};

const StyledLine = styled(motion.div)`

  background: #ccc;
  height: 0.2rem;
  margin: 2rem 0rem;
  width: 90%;
  margin-left: 5%;

`;
export default AboutUs;
