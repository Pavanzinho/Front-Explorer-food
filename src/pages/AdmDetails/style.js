import styled from "styled-components";

export const Container = styled.div`
    /* width: 100%;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;

    color: ${({theme})=>theme.COLORS.LIGHT_LIGHT_300}; */


    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
    
    main{
        padding: 0 5.6rem 3.35rem;
        display: flex;
        flex-direction: column;
        gap: 4.2rem;      
        margin-top: 1.6rem;  
        height: 100%;
        
        .backContainer{
            display: flex;
            gap: 10px;

            .backButton{
                background: transparent;
                border: none;
                display: flex;
                gap: 8px;
                
                .backImg{
                    padding: 5px;
                    display: flex;
                    align-items: center;
                }
                
        
                span{
                    font-size: 2.4rem;
                    line-height: 3.36rem;
                    font-weight: 700;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                }
            }
        }

        .foodFlexDirectionControl{
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
            .foodImg{  
                display: flex;
                align-items: center;
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
                
                h1{
                    font-size: 2.7rem;
                    line-height: 3.786rem;
                    font-weight: 500;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                    display: flex;
                    justify-content: start;
                }
                
                p{
                    font-size: 1.6rem;
                    line-height: 2.271rem;
                    font-weight: 400;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                    text-align: center;
    
                }
    
                .tagsContainer{
                    padding: 0 2.85rem;
                    display: flex;
                    height: 8.8rem;
                    justify-content: space-between;
                    flex-wrap: wrap;

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

                        span{
                            font-size: 1.4rem;
                            line-height: 2.4rem;
                            font-family: 'Poppins',sans-serif;
                        }
                   }
    
                    
       
                }
    
                .orderQuantity{
                    width: 100%;
                    display: flex;
                    gap: 1.6rem;
                    
                    button{
                        gap: 5px;
                        height: 4.8rem;
                    }
    
                    .foodQuantityAdjusterContainer{
                        display: flex;
                        align-items: center;
                        gap: 1.56rem;

                        .numbersQuantity{
                            font-size: 2.2rem;
                            line-height: 2.4rem;
                        }
                    }           
                }
            }
        }               
    }



@media screen and (min-width:1300px){
        width: 100%;
        font-family: 'Poppins', sans-serif;
        display: flex;
        flex-direction: column;
        height: 100vh;
    
    main{
        padding: 0 12rem 3.35rem;
        display: flex;
        flex-direction: column;
        gap: 4.2rem;
        height: 100%;
        margin-top: 4rem;
     
        .backContainer{
            display: flex;
            gap: 10px;


            .backButton{
                background: transparent;
                border: none;
                display: flex;
                gap: 8px;
                
                .backImg{
                    padding: 5px;
                    display: flex;
                    align-items: center;
                }
                
        
                span{
                    font-size: 2.4rem;
                    line-height: 3.36rem;
                    font-weight: 700;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                }
            }
            
        }

        .foodFlexDirectionControl{
            display: flex;
            flex-direction: row;
            gap: 4.8rem;
            
            .foodImg{
                width: 27rem;
                height: 27rem;
                background-image: url('../../src/assets/food.svg');
                background-repeat: no-repeat;
                background-size: cover;
                margin: 0;
               
            }
    
            .foodDescription{
                display: flex;
                flex-direction: column;
                gap: 2.4rem;
                
                h1{
                    font-size: 4rem;
                    line-height: 5.6rem;
                    font-weight: 500;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                    display: flex;
                    justify-content: flex-start;
                    width: 100%;
                }
                
                p{
                    font-size: 2.4rem;
                    line-height: 3.3rem;
                    font-weight: 400;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                    text-align: start;
                    width: 100%;
                    font-family: 'Poppins', sans-serif;
    
                }
    
                .tagsContainer{
                    padding: 0 ;
                    display: flex;
                    height: auto;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    align-self: flex-start;

                   .tag:nth-of-type(1){
                        margin: 1.2rem 1.2rem 1.2rem 0;
                   }
                   
                   
                    .tag{
                        margin: 1.2rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: ${({ theme }) => theme.COLORS.DARK_DARK_1000};
                        min-width: 6.4rem;
                        max-height: 3.2rem;
                        padding: 0.4rem 0.8rem;

                        span{
                            font-size: 1.4rem;
                            line-height: 2.4rem;
                            font-family: 'Poppins',sans-serif;
                        }
                   }
    
                }
    
                .orderQuantity{
                    width: 100%;
                    display: flex;
                    gap: 3.3rem;
                    margin-top: 2.4rem;
                    
                    button{
                        gap: 5px;
                        height: 4.8rem;
                        width: 16.2rem;
                    }
    
                    .foodQuantityAdjusterContainer{
                        display: flex;
                        align-items: center;
                        gap: 1.56rem;
                    }           
                }
            }
        }               
    }

}




`