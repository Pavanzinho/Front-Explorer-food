import styled from "styled-components";


export const Container=styled.footer`
    min-height:7.7rem;
    width:100%;
    background:${({theme})=>theme.COLORS.DARK_DARK_600};
    padding: 0 2.7rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    /* align-self:flex-end; */
   

    .footerContentContainer{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        
        .footerTitle{
            font-size:1.526rem;
            font-weight:700;
            line-height:1.8rem;
            color:${({theme})=>theme.COLORS.LIGHT_LIGHT_700};
            font-family: 'Roboto', sans-serif;
            display:flex;
            gap:7px;
    
        }
        
        .messageOfRightsReserved{
            font-family: 'DM sans', sans-serif;
            font-size:1.2rem;
            line-height:1.562rem;
            font-weight:400;
            
        }
    }


    

`