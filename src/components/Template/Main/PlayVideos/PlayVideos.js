import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from '../Home/Home';
import Comments from '../Comments/Comments';
import { HomeBox, PlayStyled } from './PlayStyled';
import { selectChannel } from '../../../../Redux/actions';
import { Box, Button, ButtonGroup, Divider, IconButton, Typography } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Checkbox from '@mui/material/Checkbox';

// Import Firebase database functions
import { ref, get, set, update } from 'firebase/database';
import { db } from '../../../../Firebase/Firebase';

export default function PlayVideos() {
  const dispatch = useDispatch();
  const location = useLocation();
  const video = location.state?.video;
  console.log(video);

  const [isDisliked, setIsDisliked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const subscribersRef = ref(db, 'subscribers');
        const snapshot = await get(subscribersRef);

        if (snapshot.exists()) {
          const subscriptions = snapshot.val();
          setIsSubscribed(subscriptions[video.id]?.isSubscribed || false);
        }
      } catch (error) {
        console.error('Failed to fetch subscribers:', error);
      }
    };

    const fetchLikes = async () => {
      try {
        const likesRef = ref(db, `likes/${video.id}`);
        const snapshot = await get(likesRef);

        if (snapshot.exists()) {
          const likeData = snapshot.val();
          setIsLiked(likeData.isLiked || false);
          setIsDisliked(likeData.isDisliked || false);
        }
      } catch (error) {
        console.error('Failed to fetch likes:', error);
      }
    };

    if (video) {
      fetchSubscribers();
      fetchLikes();
    }
  }, [video]);


  const handleSubscribe = async () => {
    if (!video || isSubscribed[video.id]) return;

    try {
      const videoRef = ref(db, `videos/${video.id}`);
      const subscribersRef = ref(db, `subscribers/${video.id}`);

      // Read data
      const videoSnapshot = await get(videoRef);
      const videoData = videoSnapshot.exists() ? videoSnapshot.val() : {};

      const subscribersSnapshot = await get(subscribersRef);
      const isAlreadySubscribed = subscribersSnapshot.exists();

      if (isAlreadySubscribed) {
        console.log("Already subscribed!");
        return;
      }

      // New subscriber information for the post
      const newSub = {
        videoId: video.id,
        channel: video.channel,
        imgLink: video.imgLink,
        isSubscribed: true,
      };

      // Updated video information for Put
      const updatedVideo = {
        ...videoData,
        subscribers: (videoData.subscribers || 0) + 1,
        isSubscribed: true,
      };

      // Writing data to Firebase
      await set(subscribersRef, newSub); // Writing subscriber information
      await update(videoRef, updatedVideo); // Update video data

      // Dispatch for Redux 
      dispatch(selectChannel(video.channel, video.imgLink));

      // Updated UI
      video.subscribers = updatedVideo.subscribers;

      setIsSubscribed((prevState) => ({
        ...prevState,
        [video.id]: true,
      }));

      console.log("Subscribed successfully!");

    } catch (error) {
      console.error("Subscription failed:", error);
    }
  };


  const handleLike = async () => {
    if (!video) return;

    try {
      const likesRef = ref(db, `likes/${video.id}`);
      const updatedLike = { isLiked: !isLiked, isDisliked: false };

      await update(likesRef, updatedLike);
      setIsLiked(!isLiked);
      setIsDisliked(false);
    } catch (error) {
      console.error('Failed to like video:', error);
    }
  };

  const handleDislike = async () => {
    if (!video) return;

    try {
      const likesRef = ref(db, `likes/${video.id}`);
      const updatedDislike = { isDisliked: !isDisliked, isLiked: false };

      await update(likesRef, updatedDislike);
      setIsDisliked(!isDisliked);
      setIsLiked(false);
    } catch (error) {
      console.error('Failed to dislike video:', error);
    }
  };

  return (
    <PlayStyled>
      <Box className="videoCommentBox">
        <Box className="videosBox">
          <iframe src={video.videoLink} frameBorder="0"></iframe>
          <Box className="videoInform">
            <h2>{video.title}</h2>
            <Box className="videoTitles">
              <Box className="titlesItems">
                <Box className="channelBox">
                  <img src={video.imgLink} alt="Channel" />
                  <Box>
                    <p className="channel">{video.channel}</p>
                    <p className="subscribers">{video?.subscribers || 0} subscribers</p>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      className="subscribeBtn"
                      onClick={handleSubscribe}
                      style={{
                        backgroundColor: isSubscribed ? 'white' : '',
                        border: isSubscribed && '1px solid black',
                        color: isSubscribed && 'black',
                      }}
                    >
                      {isSubscribed ? 'Subscribed' : 'Subscribe'}
                    </Button>
                  </Box>
                </Box>
                <Box className="shareDownBtnsBox">
                  <Box className="likeUnlikeBox">
                    <ButtonGroup className="btnsGroup">
                      <Checkbox
                        icon={<ThumbUpOffAltIcon className="likeUnlikeBtn groupIcon likeIcon" />}
                        checkedIcon={<ThumbUpAltIcon className="likeUnlikeBtn groupIcon likeIcon" />}
                        sx={{ '&.Mui-checked': { color: 'black' } }}
                        onClick={handleLike}
                        checked={isLiked}
                      />
                      <Divider orientation="vertical" variant="middle" flexItem />
                      <Checkbox
                        icon={<ThumbDownOffAltIcon className="likeUnlikeBtn groupIcon" />}
                        checkedIcon={<ThumbDownAltIcon className="likeUnlikeBtn groupIcon" />}
                        sx={{ '&.Mui-checked': { color: 'black' } }}
                        onClick={handleDislike}
                        checked={isDisliked}
                      />
                    </ButtonGroup>
                  </Box>
                  <Button variant="contained" className="shareDownBtns" startIcon={<ReplyIcon className="shareIcon" />}>
                    Share
                  </Button>
                  <Button
                    variant="contained"
                    className="shareDownBtns"
                    startIcon={<VerticalAlignBottomIcon className="downIcon" />}
                  >
                    Download
                  </Button>
                  <IconButton className="shareDownBtns downIcon">
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box className="descBox">
                <Typography variant="caption" className="views">
                  {video.views}
                </Typography>
                <Typography variant="caption">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fuga animi, in obcaecati temporibus,
                  assumenda doloremque consequatur maiores consectetur adipisci soluta odit ducimus dolorum voluptate
                  voluptatibus eos error voluptas non? Aperiam exercitationem nostrum animi omnis dolore. Rem magni
                  neque quas labore quo tempora, quos hic officiis mollitia eum, id eos qui! Doloremque ut saepe
                  veritatis quo expedita perferendis dignissimos exercitationem.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Comments />
        </Box>
      </Box>
      <HomeBox>
        <Home />
      </HomeBox>
    </PlayStyled>
  );
}
