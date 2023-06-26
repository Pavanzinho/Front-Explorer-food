import styled from "styled-components";

export const Container = styled.div`

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 114px;

    .bannerContainer{
        background-color: ${({ theme }) => theme.COLORS.DARK_DARK_700};
        margin: 4.4rem 2.4rem 6.2rem;
        min-height: 12rem;
        position: relative;
        display: flex;
        gap: 5px;
        align-items: center;
        
        .bannerImg{
            background-image: url("../../src/assets/bannerImg.png");
            width: 19rem;
            height: 14rem;
            position: absolute;
            bottom: 0;
            left:-25px;
            background-repeat: no-repeat;
        }

        .bannerText{ 
            position: absolute;
            right: 5rem;
            display: flex;
            flex-direction: column;
            min-width: 21rem;
            width: 35%;
            max-width: 42px;
            h1{
                font-size: 1.8rem;
                line-height: 2.2rem;
            }
            p{
                font-size: 1.2rem;
                line-height: 1.6rem;
            }
        }
        

    }
    
    main{
        margin:0 0 0 2.4rem;
        display:flex;
        flex-direction: column;
        gap:2.4rem;
        font-family: 'Poppins', sans-serif;
        max-width: none;

      
        .typeOfFoodList{
            margin:2.4rem 0;
            max-width: none;

            button{
                display: none;
            }
            
            h2{
                font-size:1.8rem;
                line-height:2.5rem;
                background-color: ${({ theme }) => theme.LIGHT_LIGHT_300};
                font-weight:500;
                margin-bottom: 2.4rem;
                
            }

            .cardsFoodContainer{
                width:100%;
                display:flex;
                gap:1.6rem; 
                height: 30rem;
               
                
                .admFoodCard{
                    background: ${({ theme }) => theme.COLORS.DARK_DARK_600};
                
                    .foodImg{
                        img{
                            width:8.8rem;
                            height:8.8rem;
                            display:flex;
                        }
                        
                    }
    
                        .priceOfFood{
                            gap:5px;
                            display:flex;
                            
                            span{
                                font-family: 'Roboto',sans-serif;
                                color:#82F3FF;
                                font-size:1.4rem;
                            }
    
                        }
    
                        .foodQuantityAdjusterContainer{
                            display:flex;
                            align-items:center;
                            font-size:1.4rem;
         
                        }
    
                        button{
                            width:9.2rem;
                            height: 100%;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            border-radius:5px;
                            border:none;
                            align-self:flex-end;
    
    
                            span{
                                font-weight:500;
                                color:white;
                                line-height:2.4rem;
                                font-family: 'Poppins',sans-serif;
                                font-size:1.4rem;
                                padding: 4px 0
                            }
                        }
                
                }            
            }
        }   
    }
    
                                  

`                           