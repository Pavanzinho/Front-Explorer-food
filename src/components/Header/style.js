import styled from "styled-components";

export const Container = styled.header`
        padding: 5.6rem 2.8rem 2.4rem;
        display: flex;
        align-items: center;
        font-weight: 400;
        height: 11.4rem;
        min-height: 11.4rem;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.DARK_DARK_700};
        font-family: 'Roboto', sans-serif;

        .admHeader{
            display: flex;
            justify-content: space-between;
            width: 100%;


            .menuButton{
                border: none;
                background: transparent;
            }
            .titleContainer{
                display: flex;
                color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                justify-content: center;
                width: 100%;

                button{
                    background: transparent;
                    border: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-direction: row;
                    position: relative;
                    

                    .iconAndTitle{
                        .titleSpan{
                            font-size:2.1rem;
                            line-height: 2.5rem;
                            color: white;
                            font-weight: 700;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            
        
                        }

                    }

                    .adminSpan{
                        font-size: 12px;
                        font-family: 'Roboto', sans-serif;
                        line-height: 160%;
                        color: var(--tints-cake-200, #82F3FF);
                        position: absolute;
                        left: 190px;
                        right: 0;
                        top: 14px;
                        bottom: 0;
                        
                    }
                }
                
  
            }

            .searchInput{
                height:100% ;
                width: 58.81rem;
                background: ${({ theme }) => theme.COLORS.DARK_DARK_900};
                display: none;

            }

            .redButton{
                display: none
                
            }

            .requestSvg{
                display: none;
            }

            .logoutSvg{
                display: none;
                border: none;
                background: transparent;
            }
        }

        .appHeader{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 2.6rem;


            .menuButton{
                border: none;
                background: transparent;
            }
            
            .titleContainer{
                display: flex;
                color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                width: 100%;
                justify-content: center;

                
                img{
                    height: 100%;
                }
                
                button{
                    background: transparent;
                    border: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    
                    .iconAndTitle{
                        .titleSpan{
                            font-size:2.1rem;
                            line-height: 2.5rem;
                            color: white;
                            font-weight: 700;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            
        
                        }

                    }

                    .adminSpan{
                        font-size: 12px;
                        font-family: 'Roboto', sans-serif;
                        line-height: 160%;
                        color: var(--tints-cake-200, #82F3FF);
                        position: absolute;
                        left: 190px;
                        right: 0;
                        top: 14px;
                        bottom: 0;
                        
                    }
                }
                
  
            }

            .searchInput{
                height:100% ;
                width: 58.81rem;
                background: ${({ theme }) => theme.COLORS.DARK_DARK_900};
                display: none;
                

            }

            .redButton{
                display: none;
                
            }

            .requestSvg{
                display: flex;
            }

            .logoutSvg{
                display: none;
                border: none;
                background: transparent;
            }
        }
            
            
    
    
@media screen and (min-width:1300px){
    
        display: flex;
        align-items: center;
        padding: 0 12.3rem;
        gap: 3.2rem;
        
        .admHeader{
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;


            .menuButton{
                border: none;
                background: transparent;
                display: none;
            }
            .titleContainer{
                display: flex;
                color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                justify-content: center;
                width: 22.2rem;


                    button{
                        background: transparent;
                        border: none;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 0;


                        .iconAndTitle{
                        .titleSpan{
                            font-size:2.1rem;
                            line-height: 2.5rem;
                            color: white;
                            font-weight: 700;
                            display: flex;
                            align-items: center;
                            gap: 8px;
        
                        }

                    }
                        
                        .adminSpan{
                            font-size: 12px;
                            font-family: 'Roboto', sans-serif;
                            line-height: 160%;
                            color: var(--tints-cake-200, #82F3FF);
                            position: absolute;
                            left: 140px;
                            right: 0;
                            top: 32px;
                            bottom: 0;
                        
                        }
                    
                }


    
                
  
            }

            .searchInput{
                min-height:4.8rem ;
                width: 58.1rem;
                background: ${({ theme }) => theme.COLORS.DARK_DARK_900};
                display: flex;
                padding: 1.2rem 1.4rem;
                gap: 8px;
                border-radius: 5px;

                input{
                    width: 100%;
                    background: transparent;
                    border: none;
                }

            }


            .requestSvg{
                display: none;
            }

            .logoutSvg{
                display: flex;
                border: none;
                background: transparent;
            }
        }

        .appHeader{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 4.8rem;


            .menuButton{
                border: none;
                background: transparent;
                display: none;
            }
            .titleContainer{
                display: flex;
                max-width: 20rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};

                button{
                    background: transparent;
                    border: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    
                    span{
                        font-size:2.1rem;
                        line-height: 2.5rem;
                        color: white;
                        font-weight: 700;
    
                    }
                }
                
  
            }

            .searchInput{
                min-height:4.8rem ;
                width: 58.1rem;
                background: ${({ theme }) => theme.COLORS.DARK_DARK_900};
                display: flex;
                padding: 1.2rem 1.4rem;
                gap: 8px;
                border-radius: 5px;

                input{
                    width: 100%;
                    background: transparent;
                    border: none;
                }

            }

            .redButton{
                display: flex;
                
            }

            .requestSvg{
                display: none;
            }

            .logoutSvg{
                display: block;
                border: none;
                background: transparent;
            }
        }
}




`
