import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SubStyled } from './SubscriptionsStyled';
import { Box, Button, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Subscriptions() {
  const dispatch = useDispatch();
  const { channel, imgLink } = useSelector((state) => state.channel.selectedChannel || {});
  const [channelData, setChannelData] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // subscribe channel function
  useEffect(() => {
    if(channel && imgLink){
      setChannelData((prevData) => {
        const exists = prevData.some((item) => item.name === channel);

        if(!exists){
          return[...prevData, {name: channel, img: imgLink}];
        }
        return prevData;
      });
    }
  }, [channel, imgLink]);

  return (
    <SubStyled>
      <Box className='subBox'>
        <Typography variant='h4' fontWeight={'bold'}>All subscriptions</Typography>
        
        {channelData.map((item) => (
          <Box className='subscribedChannelsBox'>
            <img src={item.img} alt="channel image" className='channelImg'/>

            <Box className='subTexts'>
              <Typography variant='h6'>{item.name}</Typography>
              <Typography variant='caption' color='gray'>@{item.name} • 11K subscribers</Typography>
              <Typography variant='caption' color='gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa expedita hic distinctio, quo molestiae consequatur nesciunt laboriosam. Distinctio eos odio, suscipit vel at deleniti</Typography>
            </Box>

            <Box>
              <Button aria-controls={open ? 'subscription-menu' : undefined} aria-expanded={open ? 'true' : undefined}  onClick={handleClick} variant="contained" 
                startIcon={<NotificationsIcon />} endIcon={<KeyboardArrowDownIcon/>} className='subBtn' >Subscribed
              </Button>

              <Menu anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <NotificationsActiveIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>All</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <NotificationsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Personalised</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <NotificationsOffIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>None</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonOffIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Unsubscribe</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        ))}
      </Box>
    </SubStyled>
  )
}