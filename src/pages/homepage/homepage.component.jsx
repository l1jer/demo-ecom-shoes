import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">sneakers</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">training</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">boots</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">dress shoes</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">casual shoes</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
