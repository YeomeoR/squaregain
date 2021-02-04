//email
import SendEmail from '../components/SendEmail';
//twitter
import tweet from '../images/iconmonstr-twitter-1-16.png';
//styles
import styled from 'styled-components';
import { StyledAbout } from '../styles';
//animations
import { motion } from 'framer-motion';
import Wave from '../components/Wave'
import { fade, pageAnimation, lineAnim } from '../animation';
import ScrollTop from '../components/ScrollTop';
//images
import cyber from '../images/Cyber Essentials Large.png'
import lednet from '../images/LedNet.png'
import london from '../images/LondonCouncils.png'
//pdf

const Docs = () => {
  return (
    //styles

    <StyledDocs
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />

      <div className="container"><img src={lednet} alt="lednet" /><img src={london} alt="london" /></div>
      <motion.h1 variants={fade}>   Useful links and docs    </motion.h1>
      <p>Click on the links below to view our external resources.</p>
      <motion.div variants={lineAnim} className="personnel-line"></motion.div>
          <div>
        <div className="description">
          <button>
            <a
              href="https://www.youtube.com/watch?v=d_NHZOOdKHI&feature=youtu.be"
              target="blank"
            >
              Retrofitting Buildings - Webinar Recording
            </a>
          </button>

          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="description">
        <button>
          <a
            href="https://www.youtube.com/watch?v=fmmPNNSDI8s&feature=youtu.be"
            target="blank"
          >
            New Buildings - Webinar Recording
          </a>
        </button>

        <div className="description">
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="description">
        <button>
          <a
            href="https://www.youtube.com/watch?v=fmmPNNSDI8s&feature=youtu.be"
            target="blank"
          >
            Transport - Webinar Recording
          </a>
        </button>
        <div>
          <Wave />
          </div>
        <div className="description">
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="description">
        <button>
          <a
            href="https://www.youtube.com/watch?v=wG7PEmnLD5Q&feature=youtu.be"
            target="blank"
          >
            Power - Webinar Recording
          </a>
        </button>

        <div className="description">
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="description">
        <button>
          <a
            href="https://www.youtube.com/watch?v=qD9Y9vkS2sw&feature=youtu.be"
            target="blank"
          >
            Procurement, Consumption & Waste - Webinar Recording
          </a>
        </button>

        <div className="description">
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="description">
        <button>
          <a
            href="https://4ce02075-daf0-4ecb-8c67-d35d378c68c1.filesusr.com/ugd/ad63ff_63ec24eab3734923a50fc0e9878e7811.pdf"
            target="blank"
          >
            Climate Foundation - PDF
          </a>
        </button>

        <div className="description">
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="description">
        <button>
          <a
            href="https://4ce02075-daf0-4ecb-8c67-d35d378c68c1.filesusr.com/ugd/ad63ff_c0e3dffc14b744ee9d1b42743e05157d.pdf"
            target="blank"
          >
            Transport - PDF
          </a>
        </button>

        <div className="description">
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="description">
        <button>
          <a
            href="https://4ce02075-daf0-4ecb-8c67-d35d378c68c1.filesusr.com/ugd/ad63ff_20ee9e309e284cd5bc2a3b1234246c51.pdf"
            target="blank"
          >
            Decarbonising Power Systems - PDF
          </a>
        </button>

        <div className="description">
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="description">
        <button>
          <a
            href="https://4ce02075-daf0-4ecb-8c67-d35d378c68c1.filesusr.com/ugd/ad63ff_526231ecb7a740358360ddf22aeda686.pdf"
            target="blank"
          >
            Consumption and Waste - PDF
          </a>
        </button>

        <div className="description">
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
        <div className="description">
          <button>
            <a href="https://climatecrisisaction.com/" target="blank">
              Climate Action e-Learning
            </a>
          </button>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
            ></motion.div>
        </div>
      </div>

      <div className="description" id="contact-section">
        <img className="co-logo" src={cyber} alt="cyber" />
        <h2>
          <span>Contact Us</span>
        </h2>

        <div className="description">
          <p>
            <button onClick={SendEmail}>email</button> : (info@squaregain.co)
          </p>
          <p>
            <em>tel</em>: 07814 246 382
          </p>
          <p>
            <a href="https://twitter.com/Square_Gain" target="blank">
              <img id="tweet" src={tweet} alt="tweet" /> @square_gain
            </a>
          </p>
          <p>
            Address: Suite 004, Oakford House, 25 Orchard Drive, Wye, Kent TN25
            5AT, UK
          </p>
        </div>
      </div>
    </StyledDocs>
  );
};

const StyledDocs = styled(StyledAbout)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  .container {
    display: flex;
    margin: 5px 0 30px 0;
    background: #fff;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
  
  a {
    text-decoration: none;
    font-size: 1.7rem;
    color: #fff;
  }
  button{
    z-index: 100;
  }
  
  }
  #contact-section p {
    padding: 10px;
  }
`;

export default Docs;
