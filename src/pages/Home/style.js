import styled from "styled-components";
import { device } from "../../styles/global"

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

        @media ${device.desktop}{
            background-color: ${({ theme }) => theme.COLORS.DARK_DARK_700};
            height: 28rem;
            margin: 16.4rem 12rem 6.2rem ;
        }
        

        .bannerImg{   
            background-image: url("../../src/assets/bannerImg.png");
            width: 19rem;
            height: 14rem;
            position: absolute;
            bottom: 0;
            left:-25px;
            background-repeat: no-repeat;
            
            @media ${device.desktop}{
                background-image: url("../../../src/assets/Banner.png");;
                width: 65rem;
                height: 44rem;
                position: absolute;
                background-size:cover;
                bottom: 0px;
                left:-60px;
                background-repeat: no-repeat;
            }
        }

        .bannerText{ 
            position: absolute;
            right: 5rem;
            display: flex;
            flex-direction: column;
            min-width: 21rem;
            width: 35%;
            max-width: 42px;

            @media ${device.desktop}{
                position: absolute;
                right: 10rem;
                display: flex;
                flex-direction: column;
                min-width: 21rem;
                max-width: 42rem;
            }

            h1{
                font-size: 1.8rem;
                line-height: 2.2rem;
                @media ${device.desktop}{
                    font-size: 4rem;
                    line-height: 5.6rem;
                }
            }
            
            p{
                font-size: 1.2rem;
                line-height: 1.6rem;
                @media ${device.desktop}{
                    font-size: 1.6rem;
                    line-height: 1.6rem;
                }
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
        @media ${device.desktop}{
            margin: 0 12rem ;
            max-width: 100%;
            overflow-x: hidden;
        }

        h2{
            font-size: 1.8rem;
            line-height: 140%;
            font-weight: 500;
            @media ${device.desktop}{
                font-size: 3.2rem;
                font-weight: 500;
                line-height: 4.48rem;
            }
        }
        
        .typeOfFoodList{
            margin:2.4rem 0;
            max-width: none;
           
            @media ${device.desktop} {
                height: 52.9rem;
                position: relative;
                display: flex;
            }

            button{
                display: none;
                @media ${device.desktop}{
                    display: flex;
                }
            }

            h2{
                font-size:1.8rem;
                line-height:2.5rem;
                background-color: ${({ theme }) => theme.LIGHT_LIGHT_300};
                font-weight:500;
                margin-bottom: 2.4rem;
            }

            .buttonMoveForRight{ 
                
                button{     
                    @media ${device.desktop}{
                        background: transparent;
                        position: absolute;
                        z-index: 2;
                        width: 4rem;
                        height: 4rem;
                        right: 0;
                        top: 170px;
                        border:none;
                    }
                    
                    img{
                        @media ${device.desktop}{
                            width: 15px;
                            height: 28px;
                    
                        }
                    }
                }
            }

            .buttonMoveForLeft{
                    button{
                        @media ${device.desktop} {
                            background: transparent;
                            position: absolute;
                            z-index: 2;
                            width: 4rem;
                            height: 4rem;
                            left: 0;
                            top: 170px;
                            border:none;
                        }   
                        img{
                            @media ${device.desktop}{
                                width: 15px;
                                height: 28px;
                            }
                        }
                    }
            }
            
            .cardsFoodContainer{
                width:100%;
                display:flex;
                gap:1.6rem; 
                height: 30rem; 
                
                @media ${device.desktop}{
                    height: 100%;
                    max-height: 46.2rem;
                    max-width: 100%;
                    display: flex;
                    align-items: center;
                    position: relative;
                }
                
                .admFoodCard{
                    background: ${({ theme }) => theme.COLORS.DARK_DARK_600};
                    @media ${device.desktop}{
                        display:flex;
                        flex-direction:column;
                        align-items: center;
                        gap:15px;
                        background:${({ theme }) => theme.COLORS.DARK_DARK_300};
                        padding:1.6rem;
                        border-radius:8px;
                        position: relative;
                        height: 100%;
                        width: 30.4rem;
                        max-width: none;
                        min-width: 30.4rem;
                    }
                
                    #handleDetails{
                        .foodImg{
                            img{
                                width:8.8rem;
                                height:8.8rem;
                                display:flex;
                                @media ${device.desktop}{
                                    width:17.6rem;
                                    height:17.6rem;
                                    display:flex;
                                    background-repeat: no-repeat;
                                    background-size: cover;
                                }
                            } 
                        }

                        #heart{
                            @media ${device.desktop}{
                                position: absolute;
                                right:1.6rem ;
                                top: 1.6rem;
                            
                                :hover{
                                    color: red;
                                }
                            }

                        }

                        .foodTitle{
                                  
                            @media ${device.desktop}{
                                font-weight:700;
                                font-size:2.4rem;
                                line-height:3.3rem;
                                width:100%;
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                gap:15px;
                                color: ${({ theme }) => theme.LIGHT_LIGHT_300};
                            }

                            img{
                                @media ${device.desktop}{
                                    width: 20px;
                                    height: 20px;
                                }
                            }


                        }
                        
                        .descriptionOfFood{
                            @media ${device.desktop}{
                                font-size: 1.4rem;
                                line-height: 2.24rem;
                                font-family: 'Roboto', sans-serif;
                                color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
                                display: flex;
                            }
                        }
                    
                        .priceOfFood{
                            gap:5px;
                            display:flex;
                            @media ${device.desktop}{
                                gap:10px;
                                display:flex;
                            }
                        
                            span{
                                font-family: 'Roboto',sans-serif;
                                color:#82F3FF;
                                font-size:1.4rem;
                                @media ${device.desktop}{
                                    font-family: 'Roboto',sans-serif;
                                    color:#82F3FF;
                                    font-size:3.2rem;
                                }
                            }
        
                        }
    
                    }
                    
                    .foodQuantityAdjusterContainer{
                        display:flex;
                        align-items:center;
                        font-size:1.4rem;
                        @media ${device.desktop} {
                            display:flex;
                            gap:1.6rem;
                            align-items:center;
                            font-size:1.4rem;
                            flex-direction: row;
                        }

                        div{
                            @media ${device.desktop}{
                                display: flex;
                                flex-direction: row;
                                gap: 1.4rem;
                                align-items: center;
                                height: 4.8rem;
                            }
                            
                            img{
                                @media ${device.desktop}{
                                    width: 2.4rem;
                                    height: 2.4rem;
                                    object-fit: cover;
                                }
                            }
            
                            .NumbersQuantity{
                                @media ${device.desktop}{
                                    gap: 0;
                                }
                            }
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
                    
                    button{
                        @media ${device.desktop}{
                            width:9.2rem;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            background: ${({ theme }) => theme.COLORS.TINS_TOMATO_100};
                            border-radius:5px;
                            border:none;
                            align-self:flex-end;
                        }

                        span{
                            @media ${device.desktop}{
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
    } 
`                           