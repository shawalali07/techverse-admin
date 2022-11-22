import React from 'react';
import './header.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import LanguageModal from '../languages/LanguageModal';
import { useSelector } from 'react-redux';
import SkillModal from '../skills/SkillModal';
import SnippetModal from '../snippets/SnippetModal';
import SnippetViewModal from '../snippets/SnippetViewModal';
import logo from '../../assets/images/logo.png';

export default function Header() {
  const showLanguageModal = useSelector(
    (state) => state.modalSlice.languageModal
  );
  const showSkillModal = useSelector((state) => state.modalSlice.skillModal);
  const showSnippetModal = useSelector(
    (state) => state.modalSlice.snippetModal
  );
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <img className='techverseLogo' src={logo} />
        </div>
        {/* <div className='topRight'>
          <img
            src='http://res.cloudinary.com/dp0vz4npm/image/upload/v1667142933/srizvpmdj230zpwzcvao.jpg'
            alt=''
            className='topAvatar'
          />
        </div> */}
      </div>
      <LanguageModal show={showLanguageModal} />
      <SkillModal show={showSkillModal} />
      <SnippetModal show={showSnippetModal} />
    </div>
  );
}
