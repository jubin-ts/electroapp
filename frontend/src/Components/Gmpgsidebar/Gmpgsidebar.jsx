import React from 'react';
import './Gmpgsidebar.css';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CallIcon from '@mui/icons-material/Call';

function Gmpgsidebar() {
  

  return (
   
        <div className="sidebar-links">
          <a href="#" className="sidebar-link">
            <SportsEsportsIcon /> Games
          </a>
          <a href="#" className="sidebar-link">
            <YouTubeIcon /> Tutorials
          </a>
          <a href="#" className="sidebar-link">
            <WorkspacePremiumIcon /> VIP Membership
          </a>
          <a href="#" className="sidebar-link">
            <WorkIcon /> Portfolio
          </a>
          <a href="#" className="sidebar-link">
            <SupportAgentIcon /> Live Support
          </a>
          <a href="#" className="sidebar-link">
            <CallIcon /> Contact us
          </a>
        </div>
     
  );
}

export default Gmpgsidebar;
