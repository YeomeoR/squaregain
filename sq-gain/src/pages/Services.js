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
import towerBridge from '../images/pexels-chris-schippers-427679.jpg';
//animation
import { motion } from 'framer-motion'
import { pageAnimation, photoAnim } from '../animation'
import ScrollTop from '../components/ScrollTop'

// styles
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage } from '../styles';


const Services = () => {
 
    return ( 
      <StyledServices variants={pageAnimation} initial='hidden' animate='show'>
        <ScrollTop />
      <StyledDescription >
        <motion.h2>
          <span>What We Excel At...</span>
        </motion.h2>
        <StyledCards>
          <StyledCard >
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={weather} alt="weather" />
              <motion.h5>Climate Emergency and Carbon</motion.h5>
            </motion.div>
            <p>
            Assisting local councils to develop and implement robust action plans, in response to their declarations of climate and ecological emergency, Square Gain provides technical and commercial support to implement practical actions accross buildings, transport, procurement waste and other high intensity areas.  Services include:
Carbon benchmarking
Priory setting
Programme development
Implementation
Training (in-person, remotely and via e-learning)
Monitoring and communication
​
To access free introductory e-learning visit: www.ClimateCrisisAction.com
            </p>
          </StyledCard>
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={infrastructure} alt="infrastructure" />
              <motion.h5>Sustainable Infrastructure</motion.h5>
            </motion.div>
            <p>
            Support to sustainable infrastructure investors, clients and developers.
Expert sustainability, life-cycle, environmental,  social knowledge
Qualified and experienced in CEEQUAL assessment, and verification, including active involvement in the highest scoring CEEQUAL scoring project (M25 motorway widening)
Qualified and experienced in Envision Sustainable infrastructure rating scheme, including active involvement in the first Envision Platinum rated project (I-4 Highway, Florida)
Good working knowledge of GRESB Infrastructure, SuRE and Infrastructure Sustainability.
            </p>
          </StyledCard>
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={supply} alt="supply" />
              <motion.h5>Supply-Chain Risk Management</motion.h5>
            </motion.div>
            <p>
            Supply chains are often opaque.  We have significant experience working with investors, multinationals and their supply chains and have worked on this issue with (amongst others) UN Principles for Responsible Investment and the Chartered Institute for Purchase and Supply.
ESG (Environmental, Social and Governance) investor & multi-national supply-chain engagement strategy and implementation.
Assistance with TCFD (Taskforce on Financial Related Climate Disclosure) responses to investors (including working on the joint Institute and Faculty of Actuaries (IoFA) and Institue of Environmental Management & Assessment (IEMA) Financial Related Climate Disclosures working group.
Sustainable Development Goals (SDGs) - materiality and supply-chain risk assessment
Working with our partners in Horizon Ledger we have developed a DLT (Distributed Ledger Technology) based tool to accurately map the supply-chain, benefiting from zero-knowledge proof.  This enables the identification of supply-chain exposure to capital and ESG risks. This is being piloted on specific issues associated with the SDG and regulation such as the Modern Slavery Act 2015. Also being used to map SDG materiality and geographical risk.
Please contact us to join the pilot group
            </p>
          </StyledCard>
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={finance} alt="finance" />
              <motion.h5>Sustainable Finance</motion.h5>
            </motion.div>
            <p>
            Sustainable finance seeks to improve environment, social and governance issues whilst also making a healthy financial return.  Square Gain services include:
Support on reporting, including climate related financial disclosure aligned with the requirements of TCFD (Taskforce on Financial Related Climate Disclosure)
Action-orientated support to enhance positive performance and disclosure on financial and ESG (Environmental, Social and Governance) issues.
Consultancy support on sustainable finance and commercial awareness
Capacity-building training, on sustainable finance and commercial awareness. Tailored for environment and sustainability professionals.  This has been provided to leading consultancies including Mott Macdonald, ERM, AECOM, EBRD and with other large organisations such as Network Rail.
Contact us for a free Sustainable Finance overview download
            </p>
          </StyledCard>
          
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={responsibility} alt="responsibility" />
              <motion.h5>Corporate Responsibility, Risk Management and Reporting</motion.h5>
            </motion.div>
            <p>
            Sustainability strategy, and planning
Implementation support
Environmental training & awareness
Risk and Value auditing, including environmental, social and governance issues, and business ethics
Reporting
            </p>
          </StyledCard>
         
          
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={wellbeing} alt="wellbeing" />
              <motion.h5>Wellbeing</motion.h5>
            </motion.div>
            <p>
            WELL Building Standard:  WELL AP (accredited professional) services
RESET indoor air quality (IAQ) monitoring and benchmarking
Training & capacity building of what is entailed with the WELL Building Standard, best practices and common pitfalls.

            </p>
          </StyledCard>
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={environmental} alt="environmental" />
              <motion.h5>Sustainability and Environmental Management Systems</motion.h5>
            </motion.div>
            <p>
            Strategy development and due diligence
Carbon Management Strategy and Planning
Company corporate responsibility reporting to meet investor ESG requirements (including TCFD)
Development and improvement of Environmental Management Systems - to ensure practical, simple and in-line with certifications including ISO 14001, ISO45001, BS8555
Audit and verification services
Sustainable building and infrastructure certification, including: BREEAM, HQM, CEEQUAL, Envision
Training - bespoke in-house and public courses
eLearning - development of bespoke solutions,
using a variety of delivery platforms
including Articulate Storyline and Litmos.
​
            </p>
          </StyledCard>
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={building} alt="building" />
              <motion.h5>Zero Carbon and Green Buildings</motion.h5>
            </motion.div>
            <p>
            Working with our partner the Carbon Free Group, we provide ultra-low and zero carbon buildings.  Services range from consultancy support, through to design, sourcing innovative supply-chain companies, and full turnkey solutions.  Experience includes exemplar sustainability and innovation on over 500 retail, education, public, commercial and residential buildings.  Other services include:
Green building cost consulting and life cycle cost analysis
Sustainability masterplanning
Technology due-diligence
BREEAM
SKA
Home Quality Mark (HQM).
            </p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={millennium} alt="millennium" />
        <motion.img variants={photoAnim} src={blur} alt="blur" />
        <motion.img variants={photoAnim} src={towerBridge} alt="towerBridge" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  h5 {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
  p {
    width: 85%;

    padding: 2rem 0rem;
    font-size: 0.9rem;
  }
`;

const StyledCards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

const StyledCard = styled(motion.div)`
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



 
export default Services;