import styled from "styled-components";

export const Container = styled.div`

    display:flex;
    flex-direction:column;
    align-items: center;
    padding:1.6rem;
    border-radius:8px;
    position: relative;
    height: 100%;
    max-width: 21rem;
    min-width: 21rem;


    #handleDetails{
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction:column;
        align-items: center;
        gap:14px;
        background: transparent;
        border:none;

        .foodImg{
            background-image: url('../../src/assets/food.svg');
            background-size: cover;
            display:flex;
            background-position: center;   
        }
        
        #heart{
            position: absolute;
            right:1.6rem ;
            top: 1.6rem;
    
            :hover{
                color: red;
            }
        }
        
    
            .foodTitle{
                font-weight:500;
                font-size:1.4rem;
                line-height:2.4rem;
                width:100%;
                display:flex;
                align-items:center;
                justify-content:center;
                gap:5px
        
            }
    
        
    
        .descriptionOfFood{
            font-size: 1.4rem;
            line-height: 2.24rem;
            font-family: 'Roboto', sans-serif;
            color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
            display: none;
        }
        .priceOfFood{
            gap:0.5rem;
            display:flex;
            font-family: 'Roboto',sans-serif;
            color:#82F3FF;
            font-size:1.6rem;
            
        }
    }
    .foodQuantityAdjusterContainer{
        display:flex;
        gap:1.6rem;
        align-items:center;
        font-size:1.4rem;
        flex-direction: column;

        div{
            display: flex;
            flex-direction: row;
            gap: 1.4rem;
            align-items: center;
            height: 4.8rem;
            
            img{
                width: 2.4rem;
                height: 2.4rem;
                object-fit: cover;
            }

            .NumbersQuantity{
                gap: 0;
            }
        }
    }
    .redButton{
        width:9.2rem;
        display:flex;
        align-items:center;
        justify-content:center;
        background: ${({ theme }) => theme.COLORS.TINS_TOMATO_100};
        border-radius:0.5rem;
        border:none;
        align-self:flex-end;
        
        span{
            font-weight:500;
            color:white;
            line-height:2.4rem;
            font-family: 'Poppins',sans-serif;
            font-size:1.4rem;
            padding: 0.4rem 0
        }
    }

   
    `
