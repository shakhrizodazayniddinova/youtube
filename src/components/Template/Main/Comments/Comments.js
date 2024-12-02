import React, { useState } from 'react';
import { CommentsStyled } from './CommentsStyled';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../../Redux/actions';

export default function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);

  const [showButtons, setShowButtons] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setShowButtons(true);
  }
  const handleCancel = () => {
    setShowButtons(false);
    setInputValue("");
  }

  return (
    <CommentsStyled>
        <Box className='commentsBox'>
            <Typography variant='h6' fontWeight={600}>{comments.length} comments</Typography>

            <Box className='addCommentBox'>
                <Box className='commentForm'>
                    <AccountCircleIcon className='userAvatar'/>
                    <input placeholder='Add a comment...' onFocus={handleFocus} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                </Box>

                {showButtons && (
                    <Box className='commentBtnsBox'>
                        <Box>
                            <IconButton><SentimentSatisfiedOutlinedIcon className='smileIcon'/></IconButton>
                        </Box>

                        <Box className='commentBtnBox'>
                            <Button onClick={handleCancel} className='cancelBtn'>Cancel</Button>
                            <Button variant='contained' className='commentBtn' disabled={inputValue.trim() === ''} onClick={() => {dispatch(addComment(inputValue)); setInputValue('')}}>Comment</Button>
                        </Box>
                    </Box>
                )}
            </Box>

            <Box className='allCommentsBox'>
                {comments.map((comment) => (
                    <Box className='comments'>
                        <Box className='comment'>
                            <AccountCircleIcon className='userAvatar'/>

                            <Box>
                                <Typography variant='body2' fontWeight={'bold'}>@User</Typography>
                                <Typography variant='subtitle2' mt={'5px'}>{comment.title}</Typography>

                                <Box className='likesBox'>
                                    <Checkbox icon={<ThumbUpOffAltIcon className='likeUnlikeBtn'/>} checkedIcon={<ThumbUpAltIcon className='likeUnlikeBtn'/>} sx={{'&.Mui-checked': {color: 'black'}}}/>
                                    <Checkbox icon={<ThumbDownOffAltIcon className='likeUnlikeBtn'/>} checkedIcon={<ThumbDownAltIcon className='likeUnlikeBtn'/>} sx={{'&.Mui-checked': {color: 'black'}}}/>
                                </Box>
                            </Box>
                        </Box>
                        
                        <IconButton><MoreVertIcon className='moreIcon'/></IconButton>
                    </Box>
                ))}
            </Box>
        </Box>
    </CommentsStyled>
  )
}
