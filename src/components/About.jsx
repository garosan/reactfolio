import React from "react";

const About = () => {
  return (
    <div className="About">
      <div className="About-container">
        <div className="About-avatar">
          <figure>
            <img src="/" alt="" />
          </figure>
        </div>
        <div className="About-name">
          <h2>Edgar Sánchez</h2>
        </div>
        <div className="About-profession">
          <p>Frontend Developer</p>
        </div>
        <div className="About-desc">
          <p>
            Web developer with a passion for learning, improving and making a
            positive impact.
          </p>
        </div>
        <div className="About-location">
          <p>Monterrey, MX</p>
        </div>
        <div className="About-social">Social</div>
      </div>
    </div>
  );
};

export default About;
