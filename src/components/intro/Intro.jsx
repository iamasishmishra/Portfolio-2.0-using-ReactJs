import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Asish.gif'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Asish Kumar Mishra" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience(Fresher)</h5>
              {/* <small>0 year</small> */}
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          <p>
            A motivated and enthusiastic fresher Java Full Stack student seeking entry-level opportunities to kickstart a career in web development. Equipped with a solid foundation in Java programming, front-end technologies like HTML, CSS, and JavaScript, as well as back-end frameworks like Spring, Spring Boot. Passionate about creating responsive and user-friendly web applications by leveraging the latest technologies and industry best practices. Eager to apply theoretical knowledge to real-world projects and continuously expand skillset through hands-on experience. Committed to delivering high-quality work and contributing to the growth of the organization while actively seeking mentorship and guidance from experienced professionals.
          </p>
          <a href="#contact" className="btn btn-primary">
            Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
