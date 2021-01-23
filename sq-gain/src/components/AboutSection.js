import blur from '../images/pexels-negative-space-6618 (1).jpg'

const AboutSection = () => {
  return (
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>Advantage Through <span>Sustainability</span></h2>
        </div>
        <div className="hide">
          <h2><span>Zero</span>-Carbon</h2>
        </div>
        <div className="hide">
          <h2><span>Sustainable</span> Finance</h2>
        </div>
        <div className="hide">
          <h2>Wellbeing</h2>
        </div>
        <div className="hide">
          <h2>Supply Chain</h2>
        </div>
      <p>We are a sustainability consultancy focused on the built environment, and work in partnership with our public and private sector clients to deliver robust sustainable and commercial solutions, through a collaborative, pragmatic approach.</p>
      <button>Contact Us</button>
    </div>
    <div className="image">
      <img src={blur} alt="blur"/>
    </div>
    </div>
  );
};

export default AboutSection;
