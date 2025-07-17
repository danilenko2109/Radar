import React from 'react';
import './HomePage.scss';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
     
      <div className="road-container">
        <div className="road"></div>
        <div className="car">
          <div className="car-top"></div>
          <div className="car-bottom"></div>
          <div className="window"></div>
          <div className="wheel front-wheel"></div>
          <div className="wheel back-wheel"></div>
          <div className="headlight"></div>
        </div>
      </div>

      
      <div className="content">
        <div className="russian-flag">
          <div className="flag-stripe white"></div>
          <div className="flag-stripe blue"></div>
          <div className="flag-stripe red"></div>
        </div>
        
        <h1 className="title">
          Добро пожаловать в <span className="radar-text">RADAR24</span>
        </h1>
        
        <NavLink to="/radar" className="start-button">
          Начать
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;