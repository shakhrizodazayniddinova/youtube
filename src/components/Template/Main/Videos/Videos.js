import React, { useEffect, useState } from 'react';
import { CardContainer, DetailsText, Duration, ThumbnailWrapper, VideoDetails, VideosStyled, } from './VideosStyles';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getVideos } from '../../../../API/API';

export default function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVideos();

      const shuffleVideos = shuffleArray(data);
      setVideos(shuffleVideos);
    };
    
    fetchData();
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <VideosStyled>
        {videos.map((video) => (
            <CardContainer>
                {/* Thumbnail Section */}
                <ThumbnailWrapper>
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
            </CardContainer>
        ))}
    </VideosStyled>
  )
}
