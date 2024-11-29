import styled from "styled-components";

export const TypesStyled = styled.div`
    width: calc(100%);
    padding: 1.4% 50px;
    
    .btnsBox{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 15px;


        button{
            text-transform: none;
            color: black;
            background-color: #F4F4F4;
            border-radius: 8px;
            padding: 4px 10px;
            margin: 0;
            font-size: 13px;
            font-weight: bold;
        }
        .active{
            color: white;
            background-color: black;
        }
    }

`;