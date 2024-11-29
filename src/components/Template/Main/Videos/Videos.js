import React, { useEffect, useState } from 'react';
import { CardContainer, DetailsText, Duration, ThumbnailWrapper, VideoDetails, VideosGrid, VideosStyled, } from './VideosStyles';
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getVideos } from '../../../../API/API';
import Loading from '../../Loading/Loading';

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const fetchData = async () => {
        const data = await getVideos();
        setVideos(shuffleArray(data));
        setLoading(false);
      };
      fetchData();
    }
  }, [loading]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <>
    {loading ? (
      <Loading/>
    ) : (
      <VideosStyled>
        <Grid container className='videosGrid'>
          {videos.map((video) => (
            <Grid item className='cardContainer' xs={12} sm={6} md={3.8}>
                {/* Thumbnail Section */}
                <ThumbnailWrapper className='thumbnailWrapper'>
                    <iframe src={video.link} title="YouTube video player"></iframe>

                    <Duration>{video.duration}</Duration>
                </ThumbnailWrapper>

                {/* Video Details */}
                <VideoDetails>
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
