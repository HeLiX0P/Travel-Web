import React from 'react';
import '../styles/Blog.css';

function Blog() {
  return (
    <section className="campus">
      <h1>Our Global Campus</h1>
      <p>At Nexus Educare, our campus is a hub of activity and innovation...</p>
      <div className="row">
        <div className="campus-col">
          <img src="images/london.png" alt="London" />
          <div className="layer">
            <h3>LONDON</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src="images/i.png" alt="New York" />
          <div className="layer">
            <h3>NEW YORK</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src="images/i.png" alt="Washington" />
          <div className="layer">
            <h3>WASHINGTON</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;