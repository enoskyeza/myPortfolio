// src/components/Navigation.js

import React from 'react';
import { FaHome, FaUser, FaCode, FaEnvelope, FaBlog } from 'react-icons/fa';
import './Navigationbar.css';

const Navigationbar = () => {
  return (
    <div className="navigation-container">
        <div className='icon-container'>
          <div className="navigation-button">
            <FaHome size={23}/>
          </div>
          <div className="navigation-button">
            <FaUser size={20}/>
          </div>
          <div className="navigation-button">
            <FaCode size={20}/>
          </div>
          <div className="navigation-button">
            <FaEnvelope size={20}/>
          </div>
          <div className="navigation-button">
            <FaBlog size={20}/>
          </div>
        </div>
    </div>
  );
}

export default Navigationbar;
