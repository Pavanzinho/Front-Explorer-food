import styled from "styled-components";


export const Container = styled.button`

    display:flex;
    align-items:center;
    justify-content:center;
    background: ${({ theme }) => theme.COLORS.TINS_TOMATO_100};
    border-radius:5px;
    border:none;
    align-self:flex-end;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: white;

    &[id="inactiveButton"]{
        pointer-events: none;
        opacity: 0.5;
    }

    &.headerClientRedButton {
        width: 21.6rem;
        height: 100%;
        gap: 8px;


        @media screen and (max-width:1300px){
            display: none;
        }
    }

    &.headerAdmRedButton {
        width: 21.6rem;
        height: 4.901rem;
        gap: 8px;


        @media screen and (max-width:1300px){
            display: none;
        }
    }

    &.signUpRedButton {
        width: 100%;
        height: 100%;


        @media screen and (max-width:1300px){
            display: block;
        }
    }

    &.signInRedButton {
        width: 100%;
        height: 100%;


        @media screen and (max-width:1300px){
            display: block;
        }
    }

    &.clientDetailsRedButton{
        width: 19rem;
        height: 100%;
    
    }

    &.newPlateRedButton{
        height: 4.8rem;
        background: ${({ theme }) => theme.COLORS.TINS_TOMATO_400};
        width: 100%;

        @media screen and (min-width:1300px){
            width: 17.2rem;
        }
    }

    &.editPlateRedButton{
        height: 4.8rem;
        background: ${({ theme }) => theme.COLORS.TINS_TOMATO_400};
        width: 100%;

        @media screen and (min-width:1300px){
            width: 17.2rem;
        }
    }

  
 



`
