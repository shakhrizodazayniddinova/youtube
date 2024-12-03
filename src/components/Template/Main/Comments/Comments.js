import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
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
import { addComment } from '../../../../Redux/actions';

export default function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments) || [];

  const [showButtons, setShowButtons] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

    // Like button clicked
    const handleLike = () => {
        if (!isLiked) {
            setIsLiked(true);      // Mark like as active
            setIsDisliked(false);
        }
    };

    // Dislike button clicked
    const handleDislike = () => {
        if (isLiked) {
            setIsLiked(false);     // Uncheck the like button
            setIsDisliked(true);
        }
    };

    // input focus
    const handleFocus = () => {
        setShowButtons(true);
    };

    // cancel button
    const handleCancel = () => {
        setShowButtons(false);
        setInputValue("");
    };

    // Post comment to db.json
    const handleAddComment = async () => {
        if (inputValue.trim() !== "") {
            const newComment = { title: inputValue };
            try {
                const response = await axios.post('http://localhost:5000/comments', newComment);
                dispatch(addComment(response.data));
                setInputValue('');
            } catch (error) {
                console.log(error);
            }
        }
    };

    // Handle Enter key press for adding a comment
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddComment();
        }
    };


  return (
    <CommentsStyled>
        <Box className='commentsBox'>
            <Typography variant='h6' fontWeight={600}>{comments.length} comments</Typography>

            <Box className='addCommentBox'>
                <Box className='commentForm'>
                    <AccountCircleIcon className='userAvatar'/>
                    <input placeholder='Add a comment...' onFocus={handleFocus} value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress}/>
                </Box>

                {showButtons && (
                    <Box className='commentBtnsBox'>
                        <Box>
                            <IconButton><SentimentSatisfiedOutlinedIcon className='smileIcon'/></IconButton>
                        </Box>

                        <Box className='commentBtnBox'>
                            <Button onClick={handleCancel} className='cancelBtn'>Cancel</Button>
                            <Button variant='contained' className='commentBtn' disabled={inputValue.trim() === ''} onClick={handleAddComment}>Comment</Button>
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
                                    <Checkbox icon={<ThumbUpOffAltIcon className='likeUnlikeBtn'/>} checkedIcon={<ThumbUpAltIcon className='likeUnlikeBtn'/>} sx={{'&.Mui-checked': {color: 'black'}}} onClick={handleLike} checked={isLiked}/>
                                    <Checkbox icon={<ThumbDownOffAltIcon className='likeUnlikeBtn'/>} checkedIcon={<ThumbDownAltIcon className='likeUnlikeBtn'/>} sx={{'&.Mui-checked': {color: 'black'}}} onClick={handleDislike} checked={isDisliked}/>
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
