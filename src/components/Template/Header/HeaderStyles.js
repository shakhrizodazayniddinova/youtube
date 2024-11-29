import styled from "styled-components";

export const HeaderStyled = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
`;

export const LogoBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    gap: 24px;

    img{
        object-fit: cover;
        cursor: pointer;
    }
`;
export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    form{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: transparent;
        border: 1px solid #CCCCCC;
        border-radius: 20px;
        padding: 0px 0px 0px 20px;
        width: 600px;
        height: 40px;
    }

    input{
        flex: 1;
        outline: none;
        border: none;
        padding-top: 5px;

        &::placeholder{
            font-size: 15px;
        }
    }
    .searchIcon{
        background-color: #F4F4F4;
        border-radius: 0px 20px 20px 0px;
        width: 60px;
        height: 100%;
        color: black;
    }

    .micIcon{
        background-color: #F4F4F4;
        color: black;
    }
`;

export const SettingBox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: 16%;

    button{
        color: #000;

        svg{
            font-size: 28px;
        }
    }

    .accIcon{
        svg{
            font-size: 35px;
        }
    }
`;