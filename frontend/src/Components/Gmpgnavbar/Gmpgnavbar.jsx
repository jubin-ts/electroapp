import React, { useState } from 'react';
import './Gmpgnavbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import img1 from "../../assets/Logo.svg";
import Chat from "../client/Chat"; // Assuming your Chat component is in the 'client' directory
import Profile from '../profile/profile'; // Assuming your profile component is in the 'profile' directory
import Notification from '../Notification/Notificaton';

function Gmpgnavbar() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleNotificationsClick = () => {
    setNotificationsOpen(!notificationsOpen);
    // Add your logic for handling notifications here
  };

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
    // Add your logic for handling profile here
  };

  const handleChatClick = () => {
    setChatOpen(!chatOpen);
    // Add your logic for handling chat here
  };

  return (
    <div className="topbar">
      <div className="logo">
        <img src={img1} alt="logo" />
      </div>
      <div className="maindiv">
        <div className='icons'>
          <button className={notificationsOpen ? 'active' : ''} onClick={handleNotificationsClick}>
            <NotificationsIcon />
          </button>
            {notificationsOpen && <Notification />}  
          <button className={profileOpen ? 'active' : ''} onClick={handleProfileClick}>
            <PersonIcon />
          </button>
          {profileOpen && <Profile />} {/* Conditionally render the Profile component */}
          <button className={chatOpen ? 'active' : ''} onClick={handleChatClick}>
            <ChatBubbleIcon />
          </button>
          {chatOpen && <Chat />}

        </div>
        <div className="nav-right">
          <div className="languageswitcher nav-btn">
            <select>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          <button className='deposit'>Deposit</button>
        </div>
      </div>
    </div>
  );
}

export default Gmpgnavbar;
