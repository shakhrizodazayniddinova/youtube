import styled from "styled-components";

export const TypesStyled = styled.div`
    width: 100%;
    padding: 0.7% 40px;
    
    .btnsBox{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 10px 0;

        @media(max-width: 450px){
            gap: 10px;
        }

        overflow: scroll;
        ::-webkit-scrollbar{
            display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;

        .typeBtn{
            width: auto;
            text-transform: none;
            color: black;
            background-color: #F4F4F4;
            border-radius: 8px;
            padding: 10px 15px;
            margin: 0;
            font-size: 13px;
            font-weight: bold;
            border: none;
            cursor: pointer;
            transition: 0.3s;
        }
        .active{
            color: white;
            background-color: black;
            transition: 0.3s;
        }
    }

`;