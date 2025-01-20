import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { addComment, setComments } from '../../../../Redux/actions';
import ErrorBoundary from '../../../../ErrorBoundary/ErrorBoundary';
import { get, ref, set } from 'firebase/database';
import { db } from '../../../../Firebase/Firebase';

export default function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments) || [];

  const [showButtons, setShowButtons] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [likesState, setLikesState] = useState({});

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
        try {
            const commentsRef = ref(db, 'comments');
            const snapshot = await get(commentsRef);

            if(snapshot.exists()) dispatch(setComments(Object.values(snapshot.val())));  // Set comments to Redux store
        } catch (error) { 
            console.log(error); 
        }
    }
    fetchComments();
  }, [dispatch]);

    // Post comment to db.json
    const handleAddComment = async () => {
        if (inputValue.trim() !== "") {
            const newComment = { title: inputValue };
            try {
                // Send the new comment to the backend
                const commentId = Date.now().toString();  // Unique ID for the comment
                const commentRef = ref(db, 'comments/' + commentId);
                await set(commentRef, newComment);  // Save the new comment to Firebase
                dispatch(addComment({ id: commentId, ...newComment }));  // Add to Redux store
                setInputValue('');
            } catch (error) {
                console.log(error);
                setError(error.message);
            }
        }
    };

    // Like button clicked
    const handleLike = (commentId) => {
        setLikesState((prevState) => ({
            ...prevState,
            [commentId]: {
                isLiked: !prevState[commentId]?.isLiked,
                isDisliked: false,
            }
        }));
    };

    // Dislike button clicked
    const handleDislike = (commentId) => {
        setLikesState((prevState) => ({
            ...prevState,
            [commentId]: {
                isLiked: false,
                isDisliked: !prevState[commentId]?.isDisliked,
            },
        }));
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

            {error ? (
                <ErrorBoundary>
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                        <h1>Oops! Something went wrong while fetching comments.</h1>
                        <p>{error}</p>
                    </div>
                </ErrorBoundary>
            ) : (
                <Box className='allCommentsBox'>
                    {comments.map((comment) => (
                        <Box className='comments'>
                            <Box className='comment'>
                                <AccountCircleIcon className='userAvatar'/>

                                <Box>
                                    <Typography variant='body2' fontWeight={'bold'}>@User</Typography>
                                    <Typography variant='subtitle2' mt={'5px'}>{comment.title}</Typography>

                                    <Box className='likesBox'>
                                        <Checkbox icon={<ThumbUpOffAltIcon className='likeUnlikeBtn'/>} checkedIcon={<ThumbUpAltIcon className='likeUnlikeBtn'/>} 
                                            sx={{'&.Mui-checked': {color: 'black'}}} 
                                            onClick={() => handleLike(comment.id)} checked={likesState[comment.id]?.isLiked || false}
                                        />
                                        <Checkbox icon={<ThumbDownOffAltIcon className='likeUnlikeBtn'/>} checkedIcon={<ThumbDownAltIcon className='likeUnlikeBtn'/>} 
                                            sx={{'&.Mui-checked': {color: 'black'}}} 
                                            onClick={() => handleDislike(comment.id)} checked={likesState[comment.id]?.isDisliked || false}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            
                            <IconButton><MoreVertIcon className='moreIcon'/></IconButton>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    </CommentsStyled>
  )
}
