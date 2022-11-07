import React from 'react';
import './header.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import LanguageModal from '../languages/LanguageModal';
import { useSelector } from 'react-redux';
import SkillModal from '../skills/SkillModal';

export default function Header() {
  const showLanguageModal = useSelector(
    (state) => state.modalSlice.languageModal
  );
  const showSkillModal = useSelector((state) => state.modalSlice.skillModal);
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
      <LanguageModal show={showLanguageModal} />
      <SkillModal show={showSkillModal} />
    </div>
  );
}
