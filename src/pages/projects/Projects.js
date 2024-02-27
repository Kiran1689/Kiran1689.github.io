// eslint-disable-next-line 
import React, { Component, createRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import projectImage2 from "../../assests/images/card.png";
import projectImage4 from "../../assests/images/weather.png";
import projectImage1 from "../../assests/images/BI11.jpg";
import projectImage3 from "../../assests/images/resume2.png";
import projectImage5 from "../../assests/images/BI22.jpg";
import projectImage6 from "../../assests/images/ADP.png"


class Projects extends Component {
  constructor(props) {
    super(props);
    this.slidesRef = React.createRef(null);
    this.dotsRef = React.createRef();
    this.state = {
      slideIndex: 1,
    };
  }
  

  componentDidMount() {
    this.showSlides(this.state.slideIndex);
    this.autoPlaySlides();
  }

  autoPlaySlides = () => {
    setInterval(() => {
      const newIndex = this.state.slideIndex + 1;
      this.showSlides(newIndex);
    }, 3000);
  };

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  showSlides = (n) => {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");
  
    if (slides.length === 0) {
      return; // Return early if there are no slides
    }
  
    if (n > slides.length) {
      n = 1;
    }
    if (n < 1) {
      n = slides.length;
    }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
  
    this.setState({ slideIndex: n });
  };
  
  
  
  
  dotsRef = React.createRef(null);
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1 className="projects-heading-text" style={{ color: theme.text }}>
                  {projectsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              My Recent Works
            </h1>
          </Fade>
        </div>
        <div className="slideshow-container" ref={this.slidesRef}>
          <div className="mySlides fade">
            <img src={projectImage6} style={{ width: "100%" }} alt="Slide 6" />
          </div>
          <div className="mySlides fade">
            <img src={projectImage1} style={{ width: "100%" }} alt="Slide 1" />
          </div>
          <div className="mySlides fade">
            <img src={projectImage2} style={{ width: "100%" }} alt="Slide 2" />
          </div>
          <div className="mySlides fade">
            <img src={projectImage3} style={{ width: "100%" }} alt="Slide 3" />
          </div>
          <div className="mySlides fade">
            <img src={projectImage4} style={{ width: "100%" }} alt="Slide 4" />
          </div>
          <div className="mySlides fade">
            <img src={projectImage5} style={{ width: "100%" }} alt="Slide 5" />
          </div>
        </div>
        <br />
        <div style={{ textAlign: "center" }} ref={this.dotsRef}>
          <span className="dot" onClick={() => this.showSlides(1)}></span>
          <span className="dot" onClick={() => this.showSlides(2)}></span>
          <span className="dot" onClick={() => this.showSlides(3)}></span>
          <span className="dot" onClick={() => this.showSlides(4)}></span>
          <span className="dot" onClick={() => this.showSlides(5)}></span>
          <span className="dot" onClick={() => this.showSlides(6)}></span>
        </div>
        <Button
          text={"Visit Github"}
          className="project-button"
          href="https://github.com/Kiran1689"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
