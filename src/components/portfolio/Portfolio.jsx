import "./portfolio.css";

import IMG1 from "../../assets/Lib.png";
import IMG2 from "../../assets/Realestate.jpeg";
import IMG3 from "../../assets/Atm.jpeg";
import IMG4 from "../../assets/Port.png";
import IMG5 from "../../assets/MerchantSpring.jpg";
import IMG6 from "../../assets/Weatherapp.jpeg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Library Management Project",
      img: IMG1,
      description:
        "Local Pc project for handle the Library System",
      technologies: "Python  -  MySql",
      // link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/iamasishmishra/LibraryManagementSystem-Python-Mysql",
    },
    {
      id: 2,
      title: "My Portfolio 1.0",
      img: IMG4,
      description:
        "Basic Portfolio Design. Describes What i have done till now..",
      technologies: "Html  -  Css  -  JavaScript",
      // link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/iamasishmishra/My-Portfolio",
    },
    {
      id: 3,
      title: "Real E state Using React",
      img: IMG2,
      description: "It includes all the information about house/flat for buy, rent and repair.",
      technologies: "Html  -  Css  -  Java Script  -  React Js",
      // link: "https://rubycode-blog-project.vercel.app/",
      github: "https://github.com/iamasishmishra/Real-estate-app-reactjs",
    },
    {
      id: 4,
      title: "Atm Machine Using Core Java",
      img: IMG3,
      description: "This Project includes all the Atm operations",
      technologies: "Core Java",
      // link: "https://alpha-agency-project.vercel.app/",
      github: "https://github.com/iamasishmishra/Atm-Machine-Proj",
    },
    {
      id: 5,
      title: "Spring-Emp-application",
      img: IMG5,
      description:
        "This includes All the operations regarding Employye(find,save,delete,find with id,salary ranges",
      technologies: "Java  -  Spring",
      // link: "https://jokes-project.vercel.app/",
      github: "https://github.com/iamasishmishra/Spring-emp-App",
    },
    {
      id: 6,
      title: "Weather App using Java Script",
      img: IMG6,
      description:
        "Fetch all data of different cities based on cities's weather",
      technologies: "Html -  Css - Javascript",
      // link: "https://fs-poster-project.vercel.app/",
      github: "https://github.com/iamasishmishra/Weather-app",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Contributions</h5>
      <h2>Project Portfolios</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              {/* <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Not Live Yet
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
