import styled from "styled-components";
import { device } from "../../styles/global";

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    font-family: 'Poppins', sans-serif;
    flex-direction: column;
    height: 100vh;
    
    @media ${device.desktop}{
        width: 100%;
        font-family: 'Poppins', sans-serif;
        display: flex;
        flex-direction: column;
    }
    
    main{
        padding: 0 5.6rem 3.35rem;
        display: flex;
        flex-direction: column;
        gap: 4.2rem;      
        margin-top: 1.6rem;  
        height: 100%;

        @media ${device.desktop}{
            padding: 0 12rem 3.35rem;
            display: flex;
            flex-direction: column;
            gap: 4.2rem;
            height: 100%;
            margin-top: 4rem;
        }
        
        .backContainer{
            display: flex;
            gap: 10px;

            @media ${device.desktop}{
                display: flex;
                gap: 10px;
            }

            .backButton{
                background: transparent;
                border: none;
                display: flex;
                gap: 8px;
                @media ${device.desktop}{
                    background: transparent;
                    border: none;
                    display: flex;
                    gap: 8px;
                }
                
                .backImg{
                    padding: 5px;
                    display: flex;
                    align-items: center;
                    @media ${device.desktop}{
                        padding: 5px;
                        display: flex;
                        align-items: center;
                    }
                }
                
        
                span{
                    font-size: 2.4rem;
                    line-height: 3.36rem;
                    font-weight: 700;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                    @media ${device.desktop}{
                        font-size: 2.4rem;
                        line-height: 3.36rem;
                        font-weight: 700;
                        color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                    }
                }
            }
        }

        .foodFlexDirectionControl{
            display: flex;
            flex-direction: column;
            gap: 1.6rem;

            @media ${device.desktop}{
                display: flex;
                flex-direction: row;
                gap: 4.8rem;
            }
            
            .foodImg{  
                display: flex;
                align-items: center;

                @media ${device.desktop}{
                    width: 27rem;
                    height: 27rem;
                    background-image: url('../../src/assets/food.svg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    margin: 0;
                }

                img{
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 27rem;
                    height: 27rem;
                    margin: auto; 
                    border-radius:10px ;
                }          
            }
    
            .foodDescription{
                display: flex;
                flex-direction: column;
                gap: 2.4rem;
                align-items: center;
                max-width: 28.7rem; 
                min-width: 27rem;
                justify-content: center; 
                margin: auto;
               

                @media ${device.desktop}{
                    display: flex;
                    flex-direction: column;
                    gap: 2.4rem;
                    max-width: 100%; 
                    justify-content:flex-start ;
                    margin: 0;
                }
                
                
                h1{
                    font-size: 2.7rem;
                    line-height: 3.786rem;
                    font-weight: 500;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                    display: flex;
                    justify-content: start;

                    @media ${device.desktop}{
                        font-size: 4rem;
                        line-height: 5.6rem;
                        font-weight: 500;
                        color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                        display: flex;
                        justify-content: flex-start;
                        width: 100%;
                    }
                }
                
                p{
                    font-size: 1.6rem;
                    line-height: 2.271rem;
                    font-weight: 400;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                    text-align: center;
                    width: 100%;
                    

                    @media ${device.desktop}{
                        font-size: 1.6rem;
                        line-height: 2.271rem;
                        font-weight: 400;
                        color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                        text-align: left;
                    }
    
                }
    
                .tagsContainer{
                    padding: 0 2.85rem;
                    display: flex;
                    height: 8.8rem;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    @media ${device.desktop}{
                        padding: 0 ;
                        display: flex;
                        height: auto;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        align-self: flex-start;
                    }

                   .tag{
                        margin: 0.6rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: ${({ theme }) => theme.COLORS.DARK_DARK_1000};
                        min-width: 6.4rem;
                        max-height: 3.2rem;
                        padding: 0.4rem 0.8rem;
                        border-radius: 8px;

                        @media ${device.desktop}{
                            margin: 1.2rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background: ${({ theme }) => theme.COLORS.DARK_DARK_1000};
                            min-width: 6.4rem;
                            max-height: 3.2rem;
                            padding: 0.4rem 0.8rem;
                        }

                        span{
                            font-size: 1.4rem;
                            line-height: 2.4rem;
                            font-family: 'Poppins',sans-serif;

                            @media ${device.desktop}{
                                font-size: 1.4rem;
                                line-height: 2.4rem;
                                font-family: 'Poppins',sans-serif;
                            }
                        }
                   }   
       
                }
    
                .orderQuantity{
                    width: 100%;
                    display: flex;
                    gap: 1.6rem;
                    height: 4.8rem;

                    @media ${device.desktop}{
                        width: 100%;
                        display: flex;
                        gap: 3.3rem;
                        margin-top: 2.4rem;
                    }

                    button{
                        @media ${device.desktop}{
                            gap: 5px;
                            height: 4.8rem;
                            width: 16.2rem;
                        }
                    }
                    
                    /* button{
                        gap: 5px;
                        height: 4.8rem;
                    } */
    
                    .adjusterQuantityFood{
                        display: flex;
                        align-items: center;
                        gap: 1.56rem;

                        .numbersOfQuantity{
                            span{
                                @media ${device.desktop}{
                                    font-size: 2.2rem;
                                    line-height: 2.4rem;
                                }
                            }
                            
                        }
                    }           
                }
            }
        }               
    }
`















// .orderQuantity{
//     width: 100%;
//     display: flex;
//     gap: 1.6rem;
//     justify-content: center;
    
//     button{
//         gap: 5px;
//         height: 4.8rem;
//         width: 100%;
        
//     }

//     .foodQuantityAdjusterContainer{
//         display: flex;
//         align-items: center;
//         gap: 1.56rem;

//         .numbersQuantity{
//             font-size: 2.2rem;
//             line-height: 2.4rem;
//         }
//     }           
// }