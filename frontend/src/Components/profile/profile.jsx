import React, { useState } from 'react';
import './profile.css';

function Profile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      {/* <button className="dropdown-button" onClick={toggleDropdown}>
        Profile
      </button>
      {isDropdownOpen && ( */}
        <ul className="profile">
          <li>
            <a href="/Profiles">Profile</a>
          </li>
          <li>
            <a href="/Wallet">Wallet</a>
          </li>
          <li>
            <a href="/Buycoins">Buy Coins</a>
          </li>
          <li>
            <a href="/ReferEarn">Refer & Earn</a>
          </li>
          <li>
            <a href="/Settings">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      {/* )} */}
    </div>
  );
}

export default Profile;
