import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background-color: ${({theme})=>theme.COLORS.DARK_DARK_400};
        color: ${({theme})=>theme.COLORS.LIGHT_LIGHT_300};
        font-size: 1.6rem;
        width: 100%;
        overflow-x: hidden;
    }

    button, a{
        cursor: pointer;
       
    }

    input{
        color: white;
        
        &:focus{
            outline: none;
        }
    }


    @media screen and (max-width: 427px){
        :root{
            font-size: 52%;
    }
    }
    

`