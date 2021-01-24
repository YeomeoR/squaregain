import blur from '../images/pexels-yoss-cinematic-2564153.jpg';
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../styles';
//animation
import { motion } from 'framer-motion'
import { pageAnimation, photoAnim, titleAnim, fade } from '../animation'
import Wave from '../components/Wave'
//email
import SendEmail from '../components/SendEmail'
//images




const AboutSection = () => {
  return (
    <StyledAbout variants={pageAnimation}>
      <StyledDescription>
        <motion.div className="title">
{/* <motion.img variants={photoAnim} src={logo4} alt=""/> */}
          <motion.h3 variants={titleAnim}>
            Advantage Through <span>Sustainability</span>
          </motion.h3>

          <motion.h3 variants={titleAnim}>
            <span>Zero</span>-Carbon
          </motion.h3>

          <motion.h3 variants={titleAnim}>Sustainable Finance</motion.h3>

          <motion.h3 variants={titleAnim}>Wellbeing</motion.h3>

          <motion.h3 variants={titleAnim}>Supply Chain</motion.h3>
        </motion.div>
        <motion.p variants={fade}>
            We are a sustainability consultancy focused on the built
            environment, and work in partnership with our public and private
            sector clients to deliver robust sustainable and commercial
            solutions, through a collaborative, pragmatic approach.
          </motion.p>
        <StyledHide>
          <motion.button variants={fade} onClick={SendEmail}>Contact Us</motion.button>
        </StyledHide>
      </StyledDescription>

      <StyledImage>
        <motion.img variants={photoAnim} src={blur} alt="blur" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
