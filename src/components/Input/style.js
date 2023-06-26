import styled from "styled-components";

export const Container=styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: 'Roboto', sans-serif;


    >input{

        width: 100%;
        background-color: ${({theme})=>theme.COLORS.DARK_DARK_900};
        border: none;
        border-radius: 10px;
        padding: 1.6rem 1.4rem;
        color: ${({theme})=>theme.COLORS.LIGHT_LIGHT_400};
        
        &::placeholder{
            color: ${({theme,})=>theme.LIGTH_LIGHT_500}
        }
        
        &:focus{
            outline: none;
        }
    }

`