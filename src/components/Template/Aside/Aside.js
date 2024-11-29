import React, { useState } from 'react';
import { AsideFooter, AsideList, AsideListBox, AsideStyled } from './AsideStyles';
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RestoreIcon from '@mui/icons-material/Restore';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

import pdp from './pdp.png';
import js from './js.png';
import frontend from './frontend.png';
const asideItems1 = [
  {icon: <HomeIcon/>, label: 'Home'},
  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z" fillRule="evenodd"></path></svg>, 
   label: 'Shorts'},
  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z" fillRule="evenodd"></path></svg>, label: 'Subscriptions', class: 'borderLabel'},
  
  {icon: <RestoreIcon/>, label: 'History', type: 'You', typeIcon: <ArrowForwardIosOutlinedIcon/>, typeClass: 'typeBox'},
  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="M3.75 5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 5 20.25 5H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 9 20.25 9H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-8.5Zm8.5 4c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5Zm3.498-3.572c-.333-.191-.748.05-.748.434v6.276c0 .384.415.625.748.434L22 17l-6.252-3.572Z" fillRule="evenodd"></path> </svg>, label: 'Playlists'},
  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="M3.5 5.5h17v13h-17v-13ZM2 5.5C2 4.672 2.672 4 3.5 4h17c.828 0 1.5.672 1.5 1.5v13c0 .828-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.672-1.5-1.5v-13Zm7.748 2.927c-.333-.19-.748.05-.748.435v6.276c0 .384.415.625.748.434L16 12 9.748 8.427Z" fillRule="evenodd"></path></svg>, label: 'Your videos'},
  {icon: <WatchLaterOutlinedIcon/>, label: 'Watch Later'},
  {icon: <ThumbUpOutlinedIcon/>, label: 'Liked videos', class: 'borderLabel'},

  {icon: <img src={js} width={24} style={{borderRadius: '50%'}}/>, label: 'JavaScript', type: 'Subscriptions', typeClass: 'typeBox'},
  {icon: <img src={frontend} width={24} style={{borderRadius: '50%'}}/>, label: 'Frontend'},
  {icon: <img src={pdp} width={24} style={{borderRadius: '50%'}}/>, label: 'PDP Academy', class: 'borderLabel'},

  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" width="24" ><path clipRule="evenodd" fillRule="evenodd" d="m14 2-1.5.886-5.195 3.07C4.637 7.533 3 10.401 3 13.5c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5V1l-1.5 1-3 2L14 5V2ZM8.068 7.248l4.432-2.62v3.175l2.332-1.555L18.5 3.803V13.5c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-2.568 1.357-4.946 3.568-6.252ZM9 15c0-1.226.693-2.346 1.789-2.894L15 10v5c0 1.657-1.343 3-3 3s-3-1.343-3-3Z"/></svg>, label: 'Trending', type: 'Explore', typeClass: 'typeBox'},
  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" width="24" ><path clipRule="evenodd" d="M19 3c0-.271-.146-.521-.383-.654-.237-.133-.527-.127-.758.014l-9 5.5c-.223.136-.359.379-.359.64v7.901C8.059 16.146 7.546 16 7 16c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3v-7.08l7.5-4.583v6.064c-.441-.255-.954-.401-1.5-.401-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V3Zm-1.5 13c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5Zm-9 3c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5Zm9-13.42L10 10.162V8.92l7.5-4.584V5.58Z" fillRule="evenodd"></path></svg>, label: 'Music', },
  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" width="24" ><path clipRule="evenodd" d="M5.636 5.636c.293-.293.293-.768 0-1.06-.293-.294-.768-.294-1.06 0-.976.974-1.75 2.132-2.277 3.406C1.772 9.256 1.5 10.622 1.5 12c0 1.379.272 2.744.8 4.018.527 1.274 1.3 2.432 2.275 3.407.293.293.768.293 1.061 0 .293-.293.293-.768 0-1.061-.836-.836-1.499-1.828-1.95-2.92C3.232 14.352 3 13.182 3 12s.233-2.352.685-3.444c.452-1.092 1.115-2.084 1.951-2.92Zm2.828 1.768c.293.292.293.767 0 1.06-.464.464-.832 1.016-1.083 1.622C7.129 10.693 7 11.343 7 12c0 .656.13 1.306.38 1.913.252.607.62 1.158 1.084 1.622.293.293.293.768 0 1.06-.292.294-.767.294-1.06 0-.604-.603-1.083-1.32-1.41-2.108C5.669 13.7 5.5 12.853 5.5 12c0-.854.168-1.7.495-2.488.326-.788.805-1.505 1.409-2.108.293-.293.768-.293 1.06 0Zm7.072 0c.292-.293.767-.293 1.06 0C17.816 8.623 18.5 10.276 18.5 12c0 1.724-.685 3.377-1.904 4.596-.293.293-.768.293-1.06 0-.293-.293-.293-.768 0-1.06C16.473 14.597 17 13.325 17 12s-.527-2.598-1.464-3.536c-.293-.293-.293-.768 0-1.06Zm2.828-2.829c.293-.293.768-.293 1.06 0C21.395 6.545 22.5 9.215 22.5 12s-1.106 5.456-3.075 7.425c-.293.293-.768.293-1.061 0-.293-.293-.293-.768 0-1.061C20.052 16.676 21 14.387 21 12s-.948-4.676-2.636-6.364c-.293-.293-.293-.768 0-1.06ZM12 14c1.105 0 2-.895 2-2 0-1.104-.895-2-2-2s-2 .896-2 2c0 1.105.895 2 2 2Z" fillRule="evenodd"></path></svg>, label: 'Live', },
  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" width="24" ><path clipRule="evenodd" d="M1 7.803c0-.502.25-.97.668-1.248L6.21 3.527c.482-.322 1.107-.337 1.604-.039L12 6l4.186-2.512c.497-.298 1.122-.283 1.604.039l4.542 3.028c.417.278.668.746.668 1.248v6.307c0 .549-.3 1.054-.782 1.316l-9.5 5.182c-.447.244-.989.244-1.436 0l-9.5-5.182C1.3 15.164 1 14.658 1 14.11V7.803ZM16 12.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5Zm-9-5c-.552 0-1 .448-1 1V10H4.5c-.552 0-1 .448-1 1 0 .553.448 1 1 1H6v1.5c0 .553.448 1 1 1s1-.447 1-1V12h1.5c.552 0 1-.447 1-1 0-.552-.448-1-1-1H8V8.5c0-.552-.448-1-1-1ZM18.5 11c.828 0 1.5-.672 1.5-1.5S19.328 8 18.5 8 17 8.672 17 9.5s.672 1.5 1.5 1.5Z" fillRule="evenodd"></path></svg>, label: 'Gaming', },
  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" width="24" ><path clipRule="evenodd" d="M2 5.121V3l.94.94.56.56.5.5.94-.94.12-.12L6 3l.94.94.12.12L8 5l.94-.94.12-.12L10 3l.94.94.12.12L12 5l.94-.94.12-.12L14 3l.94.94.12.12L16 5l.94-.94.12-.12L18 3l.94.94.12.12L20 5l.5-.5.56-.56L22 3v16c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V5.121ZM10.75 19.5h-4.5v-5.25h4.5v5.25Zm1.25 0V13H5v6.5H4c-.276 0-.5-.224-.5-.5V7.65l2.514-2.514.925.925L8 7.12l1.06-1.06.94-.94.94.94L12 7.12l1.06-1.06.94-.94.94.94L16 7.12l1.06-1.06.926-.925L20.5 7.65V19c0 .276-.224.5-.5.5h-8ZM19 9v2H5V9h14Zm-5 4h5v1.5h-5V13Zm5 3h-5v1.5h5V16Z" fillRule="evenodd"></path></svg>, label: 'News', },
  {icon: <EmojiEventsOutlinedIcon/>, label: 'Sport', },
  {icon: <LightbulbOutlinedIcon/>, label: 'Learning', },
  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" width="24" ><path clipRule="evenodd" d="M11.58 2.03c.545-.078 1.1-.003 1.606.214.506.218.942.57 1.26 1.02.319.448.508.976.547 1.525.038.55-.075 1.099-.328 1.588-.252.489-.634.899-1.104 1.185-.254.154-.527.27-.81.343v.705l7.18 5.026c.267.187.383.527.284.84-.098.312-.388.524-.715.524H18v3c0 .552-.448 1-1 1h-2v3h-1v-1h-1v1h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-7H4.5c-.327 0-.617-.212-.715-.524-.099-.313.017-.653.285-.84l7.18-5.026V7.25c0-.414.336-.75.75-.75.275 0 .545-.076.78-.219.235-.143.427-.348.553-.593.126-.244.183-.519.163-.793-.019-.275-.114-.539-.273-.763-.16-.225-.377-.4-.63-.51-.253-.109-.53-.146-.803-.107-.272.038-.53.151-.742.326-.213.174-.373.404-.464.664-.137.391-.564.597-.955.46-.391-.136-.598-.564-.461-.955.182-.52.503-.98.928-1.328.425-.35.939-.575 1.484-.652ZM15 15h1.5v2.5H15V15Zm2.12-1.5H6.88L12 9.915l5.12 3.585ZM7.5 15h6v4.5h-6V15Z" fillRule="evenodd"></path></svg>, label: 'Fashion & Beauty',  class: 'borderLabel'},
];

export default function Aside({isVisible}) {
  const [ activeIndex1, setActiveIndex1 ] = useState(0);

  return (
    <AsideStyled isVisible={isVisible}>
      <AsideListBox>
        {asideItems1.map((item, index) => (
          <Box>
            <Box className={`${item.typeClass}`}>
              <Typography fontWeight={'600'} paddingLeft={'15px'}>{item.type}</Typography>
              {item.typeIcon}
            </Box>

            <Box className={item.class}>
              <AsideList className={activeIndex1 === index ? 'active' : ''} onMouseDown={() => setActiveIndex1(index)}>
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
