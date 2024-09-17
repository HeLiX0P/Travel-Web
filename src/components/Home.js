import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section className="header">
      <div className="text-box">
        <h1>Welcome to Nexus Educare</h1>
        <p>Your gateway to a world of opportunity.</p>
        <a href="/courses" className="hero-btn">Explore Courses</a>
      </div>
    </section>
  );
}

export default Home;