import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsText, Duration, ThumbnailWrapper, VideoDetails, VideosStyled, } from './VideosStyles';
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getVideos } from '../../../../API/API';
import Loading from '../../Loading/Loading';
import { setVideos } from '../../../../Redux/actions';

export default function Videos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { videos, loading } = useSelector((state) => state.videos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVideos();
        dispatch(setVideos(data) || []); // Dispatch action to store videos in Redux
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
}, [dispatch]); 

  const handleClickItem = (video) => {
    navigate('/play', { state: {video} });
  }

  return (
    <>
    {loading ? (
      <Loading/>
    ) : (
      <VideosStyled className='videosBox'>
        <Grid container className='videosGrid'>
          {videos.map((video) => (
            <Grid item key={video.id} className='cardContainer' onClick={() => handleClickItem(video)} xs={12} sm={6} md={3.8}>
              {/* Thumbnail Section */}
              <ThumbnailWrapper className='thumbnailWrapper'>
                <img src={video.imgLink} alt="Video Thumbnail" height={'100%'} width={'100%'} className='thumbnailImg' />

                <Duration>{video.duration}</Duration>
              </ThumbnailWrapper>

              {/* Video Details */}
              <VideoDetails className='videoDetails'>
                <Box className='avatarTexts'>
                    <Avatar src={video.avatar} alt="Channel Avatar" className='avatar'/>
                    
                    <DetailsText>
                        <Typography variant="subtitle2" className="title">
                          {video.title}
                        </Typography>
                        <Typography variant="body2" className="channel">
                          {video.channel}
                        </Typography>
                        <Typography variant="caption" className="views">
                          {video.views}
                        </Typography>
                    </DetailsText>
                </Box>

                <IconButton className='moreBtn'><MoreVertIcon/></IconButton>
              </VideoDetails>
            </Grid>
          ))}
        </Grid>
      </VideosStyled>
    )}
    </>
  )
}
