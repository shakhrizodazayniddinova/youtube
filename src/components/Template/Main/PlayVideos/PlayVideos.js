import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

const APIUrl = 'http://localhost:5000/subscribers';

export default function PlayVideos() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const video = state?.video;

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState({});

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get(APIUrl);
        const subscriptions = response.data;

        const subscribedChannel = subscriptions.reduce((acc, sub) => {
          acc[sub.videoId] = sub.isSubscribed;
          return acc;
        }, {})

        setIsSubscribed(subscribedChannel);
      } catch (error) { console.error('Failed to fetch subscribers:', error); }
    };

    const fetchLikes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/likes');
        const videoData = response.data.find((like) => like.videoId === video?.id);

        if(videoData){
          setIsLiked(videoData.isLiked);
          setIsDisliked(videoData.isDisliked);
        }
      } catch (error) { console.error('Failed to fetch likes:', error); }
    }

    fetchSubscribers();
    fetchLikes();
  }, [video?.id]);
  
  // subscribe video function
  const handleSubscribe = async () => {
    if (!video || isSubscribed[video.id]) return;

    if (isSubscribed[video.id]) {
      console.log('Already subscribed!');
      return; 
    }
  
    // datas for post subscribers
    const newSub = { videoId: video.id, channel: video.channel, imgLink: video.imgLink, isSubscribed: true };
    
    // datas for put subscribers
    const updatedVideo = { ...video, subscribers: (video.subscribers || 0) + 1, isSubscribed: true };
  
    try {
      await axios.post(APIUrl, newSub);  // post subscribers
  
      await axios.put(`http://localhost:5000/videos/${video.id}`, updatedVideo)  // put subscribers count
  
      dispatch(selectChannel(video.channel, video.imgLink));  // subscribed channel redux
  
      video.subscribers = updatedVideo.subscribers;  // update UI

      setIsSubscribed((prevState) => ({
        ...prevState,
        [video.id]: true,
      }));  // update subscribe state

    } catch (error) {
      console.error('Subscription failed:', error);
    }
  };
  
  // like video function
  const handleLike = async () => {
    if (!video) return;

    try {
      const response = await axios.get(`http://localhost:5000/likes?videoId=${video.id}`);
      const likesData = response.data[0];

      if(likesData) {
        await axios.put(`http://localhost:5000/likes/${likesData.id}`, {...likesData, isLiked: !likesData.isLiked, isDisliked: false,});
        setIsLiked(!likesData.isLiked);
        setIsDisliked(false);
      }
      else {
        await axios.post('http://localhost:5000/likes', {videoId: video.id, isLiked: true, isDisliked: false});
        setIsLiked(true);
        setIsDisliked(false);
      }

      // setIsLiked((prev) => !prev);
    } catch (error) {
      console.log('Like failed');
    }
  };

  // dislike video function
  const handleDislike = async () => {
    if (!video) return;

    try {
      const response = await axios.get(`http://localhost:5000/likes?videoId=${video.id}`);
      const likesData = response.data[0];

      if(likesData) {
        await axios.put(`http://localhost:5000/likes/${likesData.id}`, {...likesData, isDisliked: !likesData.isDisliked, isLiked: false});
        setIsDisliked(!likesData.isDisliked);
        setIsLiked(false);
      }
      else {
        await axios.post('http://localhost:5000/likes', {videoId: video.id, isLiked: false, isDisliked: true});
        setIsLiked(false);
        setIsDisliked(true);
      }

      // setIsLiked((prev) => !prev);
    } catch (error) {
      console.log('Like failed');
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
                    <p className='subscribers'>{video?.subscribers || 0 } subscribers</p>
                  </Box>

                  <Box>
                    <Button variant='contained' className='subscribeBtn' onClick={handleSubscribe} style={{ backgroundColor: isSubscribed[video.id] ? 'white' : '', border: isSubscribed[video.id] && '1px solid black', color: isSubscribed[video.id] && 'black' }}>
                      {isSubscribed[video.id] ? 'Subscribed' : 'Subscribe'}
                    </Button>
                  </Box>
                </Box>


                <Box className='shareDownBtnsBox'>
                  <Box className='likeUnlikeBox'>
                    <ButtonGroup className='btnsGroup'>
                        <Checkbox icon={<ThumbUpOffAltIcon className='likeUnlikeBtn groupIcon likeIcon'/>} checkedIcon={<ThumbUpAltIcon className='likeUnlikeBtn groupIcon likeIcon'/>} sx={{'&.Mui-checked': {color: 'black'}}} onClick={handleLike} checked={isLiked}/>
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
