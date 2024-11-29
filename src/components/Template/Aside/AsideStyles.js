import styled from "styled-components";

export const AsideStyled = styled.div`
    display: ${props => (props.isVisible ? 'flex' : 'none')};
    flex-direction: column;
    width: 224px;
    height: calc(100vh - 56px);
    padding: 16px 15px;
    background-color: white;

    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media(max-width: 450px){
        display: ${props => (props.isVisible ? 'flex' : 'none')};
        position: absolute;
        z-index: 999;
        height: 100vh;
        padding: 15px 12px;
        width: 220px;
    }
`;

export const AsideListBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.3s;

    .active{
        background-color: #F4F4F4;
        transition: 0.3s;
    }

    .borderLabel{ 
        border-bottom: 1px solid #E5E5E5;
        padding: 0px 0px 15px;
        margin-bottom: 15px;
    }

    .typeBox{
        display: flex;
        align-items: center;
        gap: 8px;
        padding-bottom: 5px;

        svg{
            font-size: 15px;
        }
    }
`;

export const AsideList = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    padding-left: 15px;
    cursor: pointer;
`;

export const AsideFooter = styled.div`
    width: 100%;
    padding-top: 20px;
    color: darkgray;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .links{
        color: gray;
        display: flex;
        flex-direction: column;
        gap: 10px;
        cursor: pointer;
    }
`;
