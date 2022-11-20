import {
  AttachMoney,
  LocalLibraryOutlined,
  LocationSearching,
  MailOutline,
  PermIdentity,
} from '@material-ui/icons';
import { Badge, Button } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './user.css';
import { browserRoutes } from '../../routes/browserRoutes';

const User = () => {
  const {
    state: { data },
  } = useLocation();
  return (
    <div className='user'>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            {data?.image ? (
              <img src={data?.image} alt='' className='userShowImg' />
            ) : (
              <div
                style={{ backgroundColor: 'lightgray' }}
                className='topDevImg'
              >
                {data?.name?.slice(0, 2)}
              </div>
            )}
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>{data?.name}</span>
              <span className='userShowUserTitle'>{data?.designation}</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>
                {data?.name?.split(' ')?.slice(0, 2)}
              </span>
            </div>

            <span className='userShowTitle'>Contact Details</span>

            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>
                {data?.id || data?.email}
              </span>
            </div>
            {data?.country ? (
              <div className='userShowInfo'>
                <LocationSearching className='userShowIcon' />
                <span className='userShowInfoTitle'>{data?.country}</span>
              </div>
            ) : null}
            {data?.skills?.length
              ? data?.skills?.map((skill) => (
                  <div className='userShowInfo'>
                    <LocalLibraryOutlined className='userShowIcon' />
                    <span className='userShowInfoTitle'>{skill}</span>
                  </div>
                ))
              : null}
            {data?.rate ? (
              <div className='userShowInfo'>
                <AttachMoney className='userShowIcon' />
                <span className='userShowInfoTitle'>
                  Hourly / ${data?.rate}
                </span>
              </div>
            ) : null}
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>About Me</span>
          <p className='devAboutText'>{data?.aboutMe}</p>
        </div>
        <div className='userPoints'>
          <div className='userUpdateTitle'>My Achievements</div>
          <div className='achievements'>
            <span className='achievementInfo'>
              Rank{' '}
              <Badge
                className='rankBadge'
                color='success'
                badgeContent={data?.rate}
                showZero
              ></Badge>
            </span>
            <span className='achievementInfo'>
              Points
              <Badge
                className='pointBadge'
                color='primary'
                badgeContent={data?.points}
                showZero
              ></Badge>
            </span>
            <span className='achievementInfo'>
              Answers{' '}
              <Badge
                className='ansBadge'
                color='error'
                badgeContent={data?.answers || 0}
                showZero
              ></Badge>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
