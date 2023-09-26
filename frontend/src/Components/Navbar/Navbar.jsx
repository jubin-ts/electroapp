
      

import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import img1 from "../../assets/Logo.svg";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="topbar">
      <div className="logo">
        <img src={img1} alt="logo" />
      </div>
      <div className="maindiv">
        <div className="languageswitcher nav-btn">
          <form>
            <select
              name="language"
              id="lang"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </form>
        </div>
        <div className="loginbtn_container nav-btn">
          <button className="loginbtn">{t('login')}</button>
        </div>
        <div className="signupbtn_container nav-btn">
          <button className="signupbttn">{t('signup')}</button>
          <button onClick={() => navigate('/login')}>login</button></div>
        </div>
      </div>

    
  );
}

export default Navbar;
