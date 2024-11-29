import styled from "styled-components";

export const VideosStyled = styled.div`
  width: 100%;
  height: calc(100vh - 130px);
  padding: 20px 40px;

  overflow-y: scroll;
  ::-webkit-scrollbar{
      display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media(max-width: 450px){
    padding: 20px 20px;
  }

  .videosGrid{
    width: 100%;
    gap: 25px;
  }
  
  .cardContainer{
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
`;

// Thumbnail container
export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  overflow: hidden;
  border-radius: 12px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

// Duration label on thumbnail
export const Duration = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
`;

// Video details section
export const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 12px;

  .avatarTexts{
    display: flex;
    
    .avatar{
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  
    .title {
      font-weight: bold;
      line-height: 1.4;
      margin-bottom: 8px;
    }
  
    .channel {
      color: gray;
    }
  
    .views {
      color: gray;
    }
  }

  .moreBtn{
    color: black;
    padding: 0;
  }
`;

// Text container for details
export const DetailsText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;