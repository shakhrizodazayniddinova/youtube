import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsText, Duration, ThumbnailWrapper, VideoDetails, VideosStyled, } from './VideosStyles';
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getVideos } from '../../../../API/API';
import { setVideos } from '../../../../Redux/actions';
import Loading from '../../Loading/Loading';
import ErrorBoundary from '../../../../ErrorBoundary/ErrorBoundary';

export default function Videos({searchQuery}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { videos, loading } = useSelector((state) => state.videos);

  // Filter videos based on search query
  // const filteredVideos = videos.filter((video) =>
  //   video.title?.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // throw new Error('Failed to fetch videos');
        const data = await getVideos();
        dispatch(setVideos(data) || []); // Dispatch action to store videos in Redux
      } catch (error) {
        console.error(error);
        setError(error.message);
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
      ) : error ? (
        <ErrorBoundary>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Oops! Something went wrong while fetching videos.</h1>
            <p>{error}</p>
          </div>
        </ErrorBoundary>
      ) : (
        <VideosStyled className='videosBox'>
          <Grid container className='videosGrid'>
            {videos
            .map((video) => (
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