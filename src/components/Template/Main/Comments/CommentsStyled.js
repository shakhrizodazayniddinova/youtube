import styled from "styled-components";

export const CommentsStyled = styled.div`
    width: 100%;
    height: auto;

    .commentsBox{
        display: flex;
        flex-direction: column;
        gap: 20px;

        .addCommentBox{
            width: 100%;

            .commentForm{
                width: 100%;
                display: flex;
                align-items: center;
                gap: 10px;

                .userAvatar{
                    font-size: 40px;
                }
    
                input{
                    flex: 1;
                    border: none;
                    border-bottom: 1px solid gray;
                    outline: none;
                    margin-top: -10px;
                    padding-bottom: 5px;

                    &:focus{
                        border-bottom: 2px solid black;
                    }
                }
            }

            .commentBtnsBox{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 40px;

                .smileIcon{
                    font-size: 25px;
                    color: black;
                }
                
                .commentBtnBox{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: 0.3s;
    
                    button{
                        text-transform: none;
                        border-radius: 20px;
                        padding-left: 18px;
                        padding-right: 18px;
                    }
                    .cancelBtn{
                        color: black;
                        
                        &:hover{
                            background-color: #f3f3f3;
                        }
                    }
                }
            }
        }

        .allCommentsBox{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 15px;

            .comments{
                width: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;

                .comment{
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
    
                    .userAvatar{
                        font-size: 40px;
                    }

                    .likesBox{
                        .likeUnlikeBtn{
                            font-size: 20px;
                        }
                    }
                }

                .moreIcon{
                    color: black;
                }
            }
        }
    }
`;