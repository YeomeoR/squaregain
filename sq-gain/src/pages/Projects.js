//styles
import styled from 'styled-components';
import { StyledAbout } from '../styles';
//animations
import { motion } from 'framer-motion';
import { fade, pageAnimation, lineAnim } from '../animation';

//images
import nhs from '../images/NHS.png';
import pri from '../images/PRI logo_PNG.png';
import isg from '../images/isg.png';
import romania from '../images/romania.png';
import ciria from '../images/ciria.png';
import iema from '../images/IEMA_SF_PNG.png';
import atmosphere from '../images/Atmosphere_PNG.png';
import fisp from '../images/FISP_PNG.png';
import fsc from '../images/FSC_PNG.png';
import ciriaLearn from '../images/CIRIA_eLearn_PNG.png';
import social from '../images/socialPartnerships.png';

const Projects = () => {
  return (
    <StyledProjects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.h1 variants={fade}>Our Recent Projects</motion.h1>
      <p>
        Projects include consultancy, systems and product development, training
        services, event development and management. Selected recent projects are
        shown below.
      </p>
      <motion.div variants={lineAnim} className="personnel-line"></motion.div>
      <div className="project">
        <img className="co-logo" src={pri} alt="pri" />
        <h2>
          <span>United Nations Principles for Responsible Investment</span>
        </h2>

        <div className="description">
          <p>
            Square Gain developed and delivered the PRI Supply Chain
            Environmental, Social & Governance Supply-Chain Risk Management
            guidance and questionning toolkit. This involved partnership with a
            number of leading ESG investors including: Actis Coller Capital
            HESTA Super Fund IFM Investors InfraRed Capital Partners JP Morgan
            Asset Management Macquarie Meridiam Partners Group Pegasus Capital
            Advisors
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <img className="co-logo" src={nhs} alt="nhs" />
        <h2>
          <span>Net Zero Carbon NHS</span>
        </h2>

        <div className="description">
          <p>
            This ambitious project by NHS England and NHS Improvement was
            focused on developing a transition tool for NHS trusts to use on
            their pathway to net zero carbon emissions. The suite of practical
            outputs included a Client Brief, Refurbishment Pilot, Transition
            Tool and Innovative Solutions Library. The project was co-ordinated
            by the Carbon Free Group CIC with key development provided by Square
            Gain.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <img className="co-logo" src={isg} alt="isg" />
        <h2>
          <span>ISG compliance check and eLearning</span>
        </h2>

        <div className="description">
          <p>
            Square Gain provided assurance services to ISG accross all divisions
            (UK and Europe), complimented by eLearning on environmental issues
            such as noise, waste, pollution, wellbeing and sustainable
            materials. ​
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <img className="co-logo" src={romania} alt="romania" />
        <h2>
          <span>Next Generation Buildings, Romania</span>
        </h2>

        <div className="description">
          <p>
            Developed content on finance options for a sustainable built
            environment, and the vital role that wellbeing plays as part of
            sustainability. This included how Green buildings complement the
            WELL Building Standard and links to the Green & Healthy Mortgage,
            for which banks are now offering lower cost financing. This
            initiative has now grown internationally.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <img className="co-logo" src={ciria} alt="ciria" />
        <h2>
          <span>CIRIA - Wellbeing on Construction Sites</span>
        </h2>

        <div className="description">
          <p>
            Square Gain authored this CIRIA guide, focused on delivering
            wellbeing on site, during the construction process. The guide
            compliments the WELL Building Standard (which focuses on the built
            asset www.wellcertified.com). The guide focuses on Mind, Body,
            Culture and the Physical Environment and is available from
            www.ciria.org
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <img className="co-logo" src={iema} alt="iema" />
        <h2>
          <span>IEMA - Sustainable Finance Guide</span>
        </h2>

        <div className="description">
          <p>
            Square Gain co-authored the Institute of Environmental Management &
            Assessment's (IEMA) Sustainable Finance Guide, which provides an
            introduction to finance and sustainable finance for sustainability
            and environmental professionals. This includes an overview of
            financial markets, mechanisms and products, and how to position a
            company's activities, products and services to benefit from
            sustainable finance. Square Gain has recently started to provide
            training to leading organisations on sustainable finance.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <img className="co-logo" src={fisp} alt="fisp" />
        <img className="co-logo" src={fsc} alt="fsc" />
        <img className="co-logo" src={atmosphere} alt="atmosphere" />
        <h2>
          <span>Atmosphere Furniture - Furniture Industry Sustainability </span>
        </h2>

        <div className="description">
          <p>
            Square Gain developed a full environmental management system for
            Atmosphere Furniture, which not only saved cost and reduced risk
            exposure, it also allowed the company to gain accreditation to the
            Furniture Industry Sustainability Programme (FISP), and to gain
            Forestry Stewardship Council (FSC) certification.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <img className="co-logo" src={ciriaLearn} alt="ciriaLearn" />
        <h2>
          <span>CIRIA e-Learning programme</span>
        </h2>

        <div className="description">
          <p>
            Square Gain designed and developed content and delivery of the CIRIA
            e-Learning programme for Environmental Good Practice on Site,
            starting with the design and development of Water pollution and
            Resource & Waste management modules. The project was developed using
            Articulate Storyline and delivered using the Litmos platform, and is
            CPD approved by the Institute of Environmental Management &
            Assessment (IEMA).
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <img className="co-logo" src={social} alt="social" />
        <h2>
          <span>Annual Review for Social Partneships</span>
        </h2>

        <div className="description">
          <p>
            Square Gain provides editorial services and content development on
            Sustainability for the practitioners element of the Annual Review
            for Social Partnerships, with a circulation of over 1.4 million
            copies.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
    </StyledProjects>
  );
};

const StyledProjects = styled(StyledAbout)`
  display: block;
  span {
    display: block;
    font-size: 3rem;
  }

  h1 {
    font-size: 4rem;
  }
  h2 {
    margin-left: 0;
    padding: 1.5rem 0;
    font-weight: lighter;
  }
  .personnel-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default Projects;
