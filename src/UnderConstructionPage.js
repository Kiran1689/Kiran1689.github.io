import React from 'react';
import './UnderConstructionPage.css'; 

const UnderConstructionPage = () => {
  return (
    <div className="under-construction-container">
      <div className="stars-1" aria-hidden="true"></div>
      <div className="stars-2" aria-hidden="true"></div>
      <div className="stars-3" aria-hidden="true"></div>
      <main className="main">
        <section className="contact">
          <h1 className="title">Will Be Back Soon</h1>
          <h2 className="sub-title">Site Under Construction</h2>
        </section>
      </main>
    </div>
  );
};

export default UnderConstructionPage;
