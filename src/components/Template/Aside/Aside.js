import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { exploreDatas, homeDatas, youDatas } from './AsideDatas';
import { AsideFooter, AsideList, AsideListBox, AsideStyled } from './AsideStyles';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { get, ref } from 'firebase/database';
import { db } from '../../../Firebase/Firebase';

export default function Aside({isVisible}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [ homeActive, setHomeActive ] = useState(0);
  const [ youActive, setYouActive ] = useState();
  const [ subscribeActive, setSubscribeActive ] = useState();
  const [ exploreActive, setExploreActive ] = useState();

  const [ channelData, setChannelData ] = useState([]);  

  // btn active function
  const handleActive = (btnType, btnIndex) => {
    const setters = {
      home: setHomeActive,
      you: setYouActive,
      subscribe: setSubscribeActive,
      explore: setExploreActive
    };
  
    // Reset all states
    setHomeActive();
    setExploreActive();
    setSubscribeActive();
    setYouActive();
  
    // Set the active state for the specific button
    setters[btnType]?.(btnIndex);
  };
  
  // subscribe channel function
  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const dbRef = ref(db, 'subscribers');  // refer to the 'subscribers' node
        const snapshot = await get(dbRef);  // get snapshot

        snapshot.exists() ? setChannelData(Object.values(snapshot.val())) : setChannelData([]);
      } catch (error) {
        console.error("Failed to fetch channel data:", error);
      }
    }

    fetchChannelData();
  }, []);

  return (
    <AsideStyled isVisible={isVisible}>
      <AsideListBox>
        {/* home datas map */}
        {homeDatas.map((item, index) => (
          <Box key={item.label}>
            <Box className={`${item.typeClass}`}>
              <Typography fontWeight={'600'} paddingLeft={'15px'}>{item.type}</Typography>
              {item.typeIcon}
            </Box>

            <Box className={item.class}>
              <AsideList className={homeActive === index && 'active'} onClick={() => {handleActive('home', index); navigate('/')}}>
                  {item.icon}
                  <Typography variant='body2' fontSize={'15px'} m={'2px 0 0 0'}>{item.label}</Typography>
              </AsideList>
            </Box>
          </Box>
        ))}

        {/* you datas map */}
        {youDatas.map((item, index) => (
          <Box key={item.label}>
            <Box className={`${item.typeClass}`}>
              <Typography fontWeight={'600'} paddingLeft={'15px'}>{item.type}</Typography>
              {item.typeIcon}
            </Box>

            <Box className={item.class}>
              <AsideList className={youActive === index ? 'active' : ''} onClick={() => handleActive('you', index)}>
                  {item.icon}
                  <Typography variant='body2' fontSize={'15px'} m={'2px 0 0 0'}>{item.label}</Typography>
              </AsideList>
            </Box>
          </Box>
        ))}

        {/* subscribe datas map */}
        <Box className='channelBox'>
          <Box>
            <Typography fontWeight={'600'} paddingLeft={'15px'}>Subscriptions</Typography>
          </Box>

          <Box className='channelInform'>
            {channelData.map((item, index) => (
                <AsideList className={subscribeActive === index ? 'active' : ''} onClick={() => handleActive('subscribe', index)}>
                    <img src={item.imgLink} alt="img" />
                    <Typography variant='body2' fontSize={'15px'} m={'2px 0 0 0'}>{item.channel}</Typography>
                </AsideList>
            ))}
            <AsideList onClick={() => { navigate('/subscriptions'); handleActive('subscribe', 9)}} className={location.pathname === '/subscriptions' ? 'active' : ''}>
                <FormatListBulletedIcon/>
                <Typography variant='body2' fontSize={'15px'} m={'2px 0 0 0'}>All subscriptions</Typography>
            </AsideList>
          </Box>
        </Box>

        {/* explore datas map */}
        {exploreDatas.map((item, index) => (
          <Box key={item.label}>
            <Box className={`${item.typeClass}`}>
              <Typography fontWeight={'600'} paddingLeft={'15px'}>{item.type}</Typography>
              {item.typeIcon}
            </Box>

            <Box className={item.class}>
              <AsideList className={exploreActive === index ? 'active' : ''} onClick={() => handleActive('explore', index)}>
                  {item.icon}
                  <Typography variant='body2' fontSize={'15px'} m={'2px 0 0 0'}>{item.label}</Typography>
              </AsideList>
            </Box>
          </Box>
        ))}
      </AsideListBox>
      
      <AsideFooter>
        <Box className='links'>
          <Typography variant='caption' fontWeight={'600'}>About Press Copyright Contact us Creator Advertise Developers</Typography>
          <Typography variant='caption' fontWeight={'600'}>Terms Privacy Policy & Safety How YouTube works Test new features</Typography>
        </Box>
        <Typography variant='caption'>© 2024 Google LLC</Typography>
      </AsideFooter>
    </AsideStyled>
  )
}
