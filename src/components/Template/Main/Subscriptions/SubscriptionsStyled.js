import styled from "styled-components";

export const SubStyled = styled.div`
    width: 100%;
    height: calc(100vh - 56px);
    display: flex;
    justify-content: center;
    padding: 50px 0px;
    
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    .subBox{
        display: flex;
        align-items: start;
        flex-direction: column;
        gap: 20px;

        .subscribedChannelsBox{
            display: flex;
            align-items: center;
            gap: 20px;

            .channelImg{
                width: 130px;
                height: 130px;
                border-radius: 50%;
            }

            .subTexts{
                width: 600px;
                display: flex;
                flex-direction: column;
                gap: 5px;
            }

            .subBtn{
                border-radius: 20px;
                background-color: #f4f4f4;
                color: black;
                box-shadow: none;
                text-transform: none;
            }
        }
    }
`;