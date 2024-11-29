import React from 'react';
import { HeaderStyled, LogoBox, SearchBox, SettingBox } from './HeaderStyles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from './logo.png';
import { IconButton } from '@mui/material';

export default function Header({toggleVisible}) {
  return (
    <HeaderStyled>
      <LogoBox>
        <IconButton onClick={toggleVisible}>
          <MenuIcon sx={{cursor: 'pointer'}}/>
        </IconButton>
        <img src={logo} alt="Logo" />
      </LogoBox>

      <SearchBox>
        <form>
          <input type="text" placeholder='Search'/>
          <IconButton className='searchIcon'><SearchIcon/></IconButton>
        </form>
        <IconButton className='micIcon'>
          <MicIcon/>
        </IconButton>
      </SearchBox>

      <SettingBox>
        <IconButton>
          <VideoCallOutlinedIcon/>
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon/>
        </IconButton>
        <IconButton className='accIcon'>
          <AccountCircleIcon/>
        </IconButton>
      </SettingBox>
    </HeaderStyled>
  );
}