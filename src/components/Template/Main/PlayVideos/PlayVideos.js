import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Comments from '../Comments/Comments';
import { selectChannel } from '../../../../Redux/actions';
import { HomeBox, PlayStyled } from './PlayStyled';
import { Box, Button, ButtonGroup, Divider, IconButton, Typography } from '@mui/material';
import Home from '../Home/Home';
import ReplyIcon from '@mui/icons-material/Reply';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Checkbox from '@mui/material/Checkbox';

export default function PlayVideos() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const video = state?.video;

  const [subscribedVideos, setSubscribedVideos] = useState({});
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  
  const handleSubscribe = (videoId) => {
    dispatch(selectChannel(
      video.channel,
      video.imgLink,
    ));
    
    // Update the subscription status for the specific video
    setSubscribedVideos(prevState => ({
      ...prevState,
      [videoId]: true, // Mark the video as subscribed
    }));
  }
  const isSubscribed = subscribedVideos[video.id];

   // Like button clicked
   const handleLike = () => {
    if (!isLiked) {
      setCount(count + 1);  // Increase count
      setIsLiked(true);      // Mark like as active
      setIsDisliked(false);
    }
  };

  // Dislike button clicked
  const handleDislike = () => {
    if (isLiked) {
      setCount(count - 1);  // Decrease count if liked
      setIsLiked(false);     // Uncheck the like button
      setIsDisliked(true);
    }
  };


  return (
    <PlayStyled>
      <Box className='videoCommentBox'>
        <Box className='videosBox'>
          <iframe src={video.videoLink} frameBorder="0"></iframe>

          <Box className='videoInform'>
            <h2>{video.title}</h2>

            <Box className='videoTitles'>
              <Box className='titlesItems'>
                <Box className='channelBox'>
                  <img src={video.imgLink}/>

                  <Box>
                    <p className='channel'>{video.channel}</p>
                    <p className='subscribers'>11.5K subscribers</p>
                  </Box>

                  <Box>
                    <Button variant='contained' className='subscribeBtn' onClick={() => handleSubscribe(video.id)} style={{ backgroundColor: isSubscribed ? 'white' : '', border: isSubscribed && '1px solid black', color: isSubscribed && 'black' }}>{isSubscribed ? 'Subscribed' : 'Subscribe'}</Button>
                  </Box>
                </Box>


                <Box className='shareDownBtnsBox'>
                  <Box className='likeUnlikeBox'>
                    <ButtonGroup className='btnsGroup'>
                      <Box className='likeBox'>
                        <Checkbox icon={<ThumbUpOffAltIcon className='likeUnlikeBtn groupIcon likeIcon'/>} checkedIcon={<ThumbUpAltIcon className='likeUnlikeBtn groupIcon likeIcon'/>} sx={{'&.Mui-checked': {color: 'black'}}} onClick={handleLike} checked={isLiked}/>
                        <Typography variant='caption'>{count}</Typography>
                      </Box>

                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Checkbox icon={<ThumbDownOffAltIcon className='likeUnlikeBtn groupIcon'/>} checkedIcon={<ThumbDownAltIcon className='likeUnlikeBtn groupIcon'/>} sx={{'&.Mui-checked': {color: 'black'}}} onClick={handleDislike} checked={isDisliked}/>
                    </ButtonGroup>
                  </Box>

                  <Button variant='contained' className='shareDownBtns' startIcon={<ReplyIcon className='shareIcon'/>}>Share</Button>
                  <Button variant='contained' className='shareDownBtns' startIcon={<VerticalAlignBottomIcon className='downIcon'/>}>Download</Button>
                  <IconButton className='shareDownBtns downIcon'><MoreHorizIcon/></IconButton>
                </Box>
              </Box>
                
              <Box className='descBox'>
                <Typography variant='caption' className='views'>{video.views}</Typography>
                <Typography variant='caption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fuga animi, in obcaecati temporibus, assumenda doloremque consequatur maiores consectetur adipisci soluta odit ducimus dolorum voluptate voluptatibus eos error voluptas non?
                Aperiam exercitationem nostrum animi omnis dolore. Rem magni neque quas labore quo tempora, quos hic officiis mollitia eum, id eos qui! Doloremque ut saepe veritatis quo expedita perferendis dignissimos exercitationem.</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Comments/>
        </Box>
      </Box>

      <HomeBox>
        <Home/>
      </HomeBox>
    </PlayStyled>
  );
}
