import React, { useState, useEffect } from "react";
import projectImage1 from "../../assets/images/weather4.jpg";
import projectImage2 from "../../assets/images/weather5.jpg";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";


export default function Projects() {
  const [repo, setRepo] = useState([]);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href="https://github.com/Kiran1689"
        newTab={true}
      />
      <div className="project-images">
        <img src={projectImage1} alt="Project 1" />
        <img src={projectImage2} alt="Project 2" />
        {/* Add more <img> tags for other project images */}
      </div>
    </div>
  );
}
