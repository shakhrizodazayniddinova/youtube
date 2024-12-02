import styled from "styled-components";

export const PlayStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px 0px 50px;

    .videoCommentBox{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;

        .videosBox{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-top: 10px;
            
            h2, p{
                margin: 0;
                padding: 0;
            }
            iframe{
                width: 100%;
                height: 550px;
                border-radius: 15px;
            }
    
            .videoInform{
                display: flex;
                flex-direction: column;
                gap: 10px;
                
                .videoTitles{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
    
                    .titlesItems{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
    
                        .channelBox{
                            display: flex;
                            align-items: center;
                            gap: 10px;
                
                            img{
                                width: 40px;
                                height: 40px;
                                border-radius: 50%;
                            }
                
                            .channel{
                                font-weight: 600;
                            }
                            .subscribers{
                                font-size: 12px;
                                color: gray;
                            }
                            .subscribeBtn{
                                border-radius: 20px;
                                text-transform: none;
                                background-color: black;
                                margin-left: 15px;
                                box-shadow: none;
                            }
                        }
    
                        .shareDownBtnsBox{
                            display: flex;
                            align-items: center;
                            gap: 15px;
    
                            .shareDownBtns{
                                text-transform: none;
                                border-radius: 20px;
                                background-color: #f3f3f3;
                                color: black;
                                box-shadow: none;
                            }
                            .shareIcon{
                                transform: rotateY(180deg);
                            }
                            .downIcon{
                                height: 100%;
                            }
                        }
                    }
    
                    .descBox{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        min-height: 100px;
                        background-color: #f3f3f3;
                        border-radius: 15px;
                        padding: 15px 20px;
                        
                        .views{
                            font-size: 14px;
                            font-weight: 550;
                        }
                    }
                }
            }
        }
    }
`;

export const HomeBox = styled.div`
    width: 470px;

    .videosBox{
        min-height: 100vh;
        height: 100%;

        .cardContainer{
            min-width: 400px;
            display: flex !important;
            flex-direction: row;
            
            .thumbnailWrapper{
                width: 180px !important;
                height: 100px;
                border-radius: 12px;
    
                .thumbnailImg{
                    width: 100%;
                }
            }
            
            .videoDetails{
                flex: 1;
    
                .avatarTexts{
                    .avatar{
                        display: none;
                    }
                }
            }
        }
    }

`;