import React from 'react';
import './header.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Header() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Techverse</span>
        </div>
        <div className='topRight'>
          <img
            src='http://res.cloudinary.com/dp0vz4npm/image/upload/v1667142933/srizvpmdj230zpwzcvao.jpg'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
}
