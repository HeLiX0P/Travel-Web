import React from 'react';
import '../styles/Courses.css';

function Courses() {
  return (
    <section className="course">
      <h1>Courses We Offer</h1>
      <p>Discover your path to success...</p>
      <div className="row">
        <div className="course-col">
          <h3>Intermediate</h3>
          <p>Build a strong foundation...</p>
        </div>
        <div className="course-col">
          <h3>Degree</h3>
          <p>Pursue your passion...</p>
        </div>
        <div className="course-col">
          <h3>Post Graduations</h3>
          <p>Elevate your expertise...</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;