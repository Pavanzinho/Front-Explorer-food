import styled from "styled-components";

import { device } from "../../styles/global";


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    position: relative;
    @media ${device.desktop}{
        height: 100vh;
    }

    .error{
        border: solid 2px red;
        width: 100%;
    }

    main{
        padding: 0 3.2rem 5.3rem;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-top: 1.6rem;

        @media ${device.desktop} {
            padding: 0 12.3rem 5.3rem;
            height: 100%;
            margin-top: 4.4rem;
        }

        #buttonBack{
            display: flex;
            gap: 10px;
            border: none;
            background: transparent;

            @media ${device.desktop}{
                display: flex;
                gap: 10px;
                border: none;
                background: transparent;
            }

            span{
                font-size: 2.4rem;
                line-height: 3.36rem;
                font-weight: 700;
                color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};

                @media ${device.desktop} {
                    font-size: 2.4rem;
                    line-height: 3.36rem;
                    font-weight: 700;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
                }
            }
        
        }

        h1{
            font-size: 2.8rem;
            font-family: 'Poppins', sans-serif;
            line-height: 3rem;
            color: white;
            margin: 2.4rem 0;
            font-weight: 500;

            @media ${device.desktop}{
                font-size: 2.8rem;
                font-family: 'Poppins', sans-serif;
                line-height: 3rem;
                color: white;
                margin: 2.4rem 0;
                font-weight: 500;
            }

        }

        form{
            width: 100%;
            display: flex;
            flex-direction: column;

            @media ${device.desktop} {
                width: 100%;
                display: flex;
                flex-direction: column;
            }


            fieldset{
                border: none;
                display: flex;
                flex-direction: column;
                gap: 2.4rem;

                @media ${device.desktop}{
                    border: none;
                    display: flex;
                    flex-direction: column;
                    gap: 2.4rem;
                    width: 100%;
                }

                label{
                    display: flex;
                    flex-direction: column;
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.6rem;
                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
                    line-height: 1.6rem;

                    @media ${device.desktop}{
                        display: flex;
                        flex-direction: column;
                        font-family: 'Roboto', sans-serif;
                        font-size: 1.6rem;
                        color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
                        line-height: 1.6rem;
                    }

                    div{
                        border-radius: 8px;

                        @media ${device.desktop}{
                            border-radius: 8px;
                        }
                    }
                }

                .definingDisplay{
                    display: flex;
                    flex-direction: column;
                    gap: 2.4rem;

                    @media ${device.desktop}{
                        display: flex;
                        flex-direction: row;
                        gap: 2.4rem;
                        width: 100%;
                        justify-content: space-between;
                    }
  
                    label:nth-of-type(1){
                        @media ${device.desktop}{
                            width: 20%;
                        }
                        
                        .inputContainer{
                            margin-top: 1.6rem;
                            height: 4.8rem;
                            width: 100%;
                            background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
                            padding: 1.2rem 1.4rem;
                            display: flex;
                            align-items: center;

                            @media ${device.desktop}{
                                margin-top: 1.6rem;
                                height: 4.8rem;
                                width: 100%;
                                background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
                                padding: 1.2rem 1.4rem;
                                display: flex;
                                align-items: center;
                            }
                            
                            input{
                                    background:transparent;
                                    border:none;      
                                    
                                    &::placeholder{
                                        font-size: 1.6rem;
                                        font-weight: 400;
                                        font-family: 'Roboto', sans-serif;
                                        color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
                                    }

                                    @media ${device.desktop}{
                                        background:transparent;
                                        border:none;      
                                        
                                        &::placeholder{
                                            font-size: 1.6rem;
                                            font-weight: 400;
                                            font-family: 'Roboto', sans-serif;
                                            color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
                                        }
                                    }
                            }
        
                            button{
                                background: transparent;
                                border: none;
                                @media ${device.desktop}{
                                    background: transparent;
                                    border: none;
                                }
                            }
                            
                            .inputFileContent{
                                    display: flex;
                                    gap:8px;
                                    width: 100%;
                                    height: 100%;
                                    display: flex;
                                    align-items: center;
                                    padding: 1.2rem 1.8rem;  

                                    @media ${device.desktop}{
                                        display: flex;
                                        gap:8px;
                                        width: 100%;
                                        height: 100%;
                                        display: flex;
                                        align-items: center;
                                        padding: 1.2rem 1.8rem;
                                    }
                                
                                    input {
                                        /* position: absolute; */
                                        opacity: 0;
                                        margin: 0;
                                        padding: 0;
                                        text-align: start;
                                        @media ${device.desktop}{
                                            position: absolute;
                                            opacity: 0;
                                            margin: 0;
                                            padding: 0;
                                        }
                                      
                                    }
                                    span{
                                        width: 100%;
                                        line-height: 2.4rem;
                                        font-size: 1.4rem;
                                      
                                        font-family: 'Poppins', sans-serif;
                                        font-weight: 500;
                                        color: white;

                                        @media ${device.desktop}{
                                            width: 100%;
                                            line-height: 2.4rem;
                                            font-size: 1.4rem;
                                            height: 2.4rem;
                                            font-family: 'Poppins', sans-serif;
                                            font-weight: 500;
                                            color: white;
                                        }
                                        
                                    }
                            
                            }
                        }
                    }
                   
                    label:nth-of-type(2){
                        @media ${device.desktop}{
                            width: 41%;
                        }
                        
                        .inputContainer{
                            margin-top: 1.6rem;
                            height: 4.8rem;
                            width: 100%;
                            background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
                            padding: 1.2rem 1.4rem;
                            display: flex;
                            align-items: center;

                            @media ${device.desktop}{
                                margin-top: 1.6rem;
                                height: 4.8rem;
                                width: 100%;
                                background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
                                padding: 1.2rem 1.4rem;
                                display: flex;
                                align-items: center;
                            }
                            
                            input{
                                    background:transparent;
                                    border:none;      
                                    
                                    &::placeholder{
                                        font-size: 1.6rem;
                                        font-weight: 400;
                                        font-family: 'Roboto', sans-serif;
                                        color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
                                    }

                                    @media ${device.desktop}{
                                        background:transparent;
                                        border:none;      
                                        
                                        &::placeholder{
                                            font-size: 1.6rem;
                                            font-weight: 400;
                                            font-family: 'Roboto', sans-serif;
                                            color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
                                        }
                                    }
                            }
    
                            #inputTextContainer{
                                width: 100%;
                                height: 100%;   

                                @media ${device.desktop}{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                    
                    label:nth-of-type(3){
                        @media ${device.desktop}{
                            width: 32.5%;
                        }
                        
                        .inputContainer{
                            margin-top: 1.6rem;
                            height: 4.8rem;
                            width: 100%;
                            background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
                            padding: 1.2rem 1.4rem;
                            display: flex;
                            align-items: center;

                            @media ${device.desktop}{
                                margin-top: 1.6rem;
                                height: 4.8rem;
                                width: 100%;
                                background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
                                padding: 1.2rem 1.4rem;
                                display: flex;
                                align-items: center;
                            }
                            
                            input{
                                background:transparent;
                                border:none;      
                                    
                                &::placeholder{
                                        font-size: 1.6rem;
                                        font-weight: 400;
                                        font-family: 'Roboto', sans-serif;
                                        color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
                                }

                                @media ${device.desktop}{
                                        background:transparent;
                                        border:none;      
                                        
                                        &::placeholder{
                                            font-size: 1.6rem;
                                            font-weight: 400;
                                            font-family: 'Roboto', sans-serif;
                                            color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
                                        }
                                }
                            }
    
                            button{
                                background: transparent;
                                border: none;

                                @media ${device.desktop}{
                                    background: transparent;
                                    border: none;
                                }
                            }
    
                            #foodCategory{
                                width: 100%;
                                height: 100%;
                                background: transparent;
                                border: none;
                                color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
                                font-family: 'Roboto', sans-serif;
                                font-size: 1.4rem;
                                line-height: 2.2rem;
                                appearance: none;
                                -webkit-appearance: none;
                                -moz-appearance: none;    
            
                                background-image: url("../../src/assets/downArrow.svg");
                                background-repeat: no-repeat;
                                background-position: right;
                            
                                &:focus{
                                    outline: none;
                                }

                                @media ${device.desktop}{
                                    width: 100%;
                                    height: 100%;
                                    background: transparent;
                                    border: none;
                                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
                                    font-family: 'Roboto', sans-serif;
                                    font-size: 1.4rem;
                                    line-height: 2.2rem;
                                    appearance: none;
                                    -webkit-appearance: none;
                                    -moz-appearance: none;    
                
                                    background-image: url("../../src/assets/downArrow.svg");
                                    background-repeat: no-repeat;
                                    background-position: right;
                                
                                    &:focus{
                                        outline: none;
                                    }
                                }
            
                                option{
                                    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_900};
                                    border-radius: 8px;
                                    border: none;
                                    outline: none;
                                    width: 100%;

                                    @media ${device.desktop}{
                                        background-color: ${({ theme }) => theme.COLORS.DARK_DARK_900};
                                        border-radius: 8px;
                                        border: none;
                                        outline: none;
                                        width: 100%;
                                    }
                                }
                            }    
                        }
                    }  
                        
                }

                .definingDisplay2{
                    display: flex;
                    flex-direction: column;
                    gap: 2.4rem;

                    @media ${device.desktop}{
                        display: flex;
                        flex-direction: row;
                        gap: 2.4rem;
                    }
    
                    label:nth-of-type(1){
                        @media ${device.desktop}{
                            width: 74%;
                        }
                        .ContainerOfIngredientsBox{
                            margin-top: 1.6rem;
                            width: 100%;
                            padding: 1.2rem 1.4rem;
                            display: flex;
                            align-items: center;
                            background-color: transparent;

                            @media ${device.desktop}{
                                margin-top: 1.6rem;
                                width: 100%;
                                padding: 1.2rem 1.4rem;
                                display: flex;
                                align-items: center;
                                background-color:${({ theme }) => theme.COLORS.DARK_DARK_800};
                            }
    
                            #ingredientsContainer{
                                width: 100%;
                                display: flex;
                                flex-wrap: wrap;
                                gap: 17px;

                                @media ${device.desktop}{
                                    width: 100%;
                                    display: flex;
                                    flex-wrap: wrap;
                                    gap: 17px;
                                }
                            
                                /* justify-content: space-between; */   
                                
                                
                                div{
                                    span{
                                        font-family: 'Roboto', sans-serif;
                                        font-size: 1.6rem;
                                        line-height: 1.6rem;
                                        color: white;

                                        @media ${device.desktop}{
                                            font-family: 'Roboto', sans-serif;
                                            font-size: 1.6rem;
                                            line-height: 1.6rem;
                                            color: white;
                                        }
                                    }
    
                                    button{
                                        border: none;
                                        background: transparent;
                                        @media ${device.desktop}{
                                            border: none;
                                            background: transparent;
                                        }
                                    }
                                }
                                
                                .tag{
                                    width: 10rem;
                                    height: 3.2rem;
                                    background: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_600};
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    gap: 8px;
                                
                                    span{
                                        font-family: 'Roboto', sans-serif;
                                        font-size: 1.6rem;
                                        line-height: 1.6rem;
                                        color: white;
                                    }
    
                                    
                                }
    
                                .addTag{
                                    width: 10rem;
                                    height: 3.2rem;
                                    background: transparent;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    gap: 8px;
                                    border: 1px dashed #7C7C8A;

                                    @media ${device.desktop}{
                                        width: 10rem;
                                        height: 3.2rem;
                                        background: transparent;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        gap: 8px;
                                        border: 1px dashed #7C7C8A;
                                    }
    
                                    button{
                                        border: none;
                                        background: transparent;

                                        @media ${device.desktop}{
                                            border: none;
                                            background: transparent;
                                        }
                                    }
                                    
                                }
                                
                            }
    
    
                        }
                        
                        
                    }
    
                    label:nth-of-type(2){
                        @media ${device.desktop}{
                            width: 22%;
                        }
                        .inputContainer{
                            margin-top: 1.6rem;
                            height: 4.8rem;
                            width: 100%;
                            background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
                            padding: 1.2rem 1.4rem;
                            display: flex;
                            align-items: center;

                            @media ${device.desktop}{
                                margin-top: 1.6rem;
                                height: 4.8rem;
                                width: 100%;
                                background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
                                padding: 1.2rem 1.4rem;
                                display: flex;
                                align-items: center;
                            }
                            
                            input{
                                @media ${device.desktop}{
                                    background:transparent;
                                        border:none;      
                                        
                                        &::placeholder{
                                            font-size: 1.6rem;
                                            font-weight: 400;
                                            font-family: 'Roboto', sans-serif;
                                            color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
                                        }
                                }    
                                
                                background:transparent;
                                    border:none;      
                                    
                                    &::placeholder{
                                        font-size: 1.6rem;
                                        font-weight: 400;
                                        font-family: 'Roboto', sans-serif;
                                        color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
                                    }
                            }
                        }    
                    }
    
                }
                
                .textAreaLabel{
                    .textAreaContainer{           
                        margin-top: 1.6rem;
                        height: 24rem;
                        width: 100%;
                        background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
                        padding: 1.2rem 1.4rem;
                        display: flex;
                        align-items: center;

                        @media ${device.desktop}{
                            margin-top: 1.6rem;
                            height: 24rem;
                            width: 100%;
                            background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
                            padding: 1.2rem 1.4rem;
                            display: flex;
                            align-items: center;
                        }
        
                        textarea{
                            width: 100%;
                            height: 100%;
                            background: transparent;
                            border: none;
                            color: white;
                            resize: none;
                            font-family: 'Roboto', sans-serif;
                            font-size: 1.6rem;
                            line-height: 100%;
        
                            &::placeholder{
                                font-family: 'Roboto', sans-serif;
                                font-size: 1.6rem;
                                line-height: 100%;
                                color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
                                resize: none;
                            }
        
                            &:focus{
                                outline: none;                             
                            }

                            @media ${device.desktop}{
                                width: 100%;
                                height: 100%;
                                background: transparent;
                                border: none;
                                color: white;
                                resize: none;
                                font-family: 'Roboto', sans-serif;
                                font-size: 1.6rem;
                                line-height: 100%;
            
                                &::placeholder{
                                    font-family: 'Roboto', sans-serif;
                                    font-size: 1.6rem;
                                    line-height: 100%;
                                    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
                                    resize: none;
                            }
                            }
                        }
    
                    }
                
                    #redButton{
                    height: 4.8rem;
                    background: ${({ theme }) => theme.COLORS.TINS_TOMATO_400};
                    width: 100%;

                    @media ${device.desktop}{
                        height: 4.8rem;
                        background: ${({ theme }) => theme.COLORS.TINS_TOMATO_400};
                        width: 15%;
                    }
        
                    >input{
                        width: 100%;
                        height: 100%;
                        background: transparent;
                        border: none;
                        font-family: 'Poppins', sans-serif;
                        color: white;
                        font-weight: 500;

                        @media ${device.desktop}{
                            width: 100%;
                            height: 100%;
                            background: transparent;
                            border: none;
                            font-family: 'Poppins', sans-serif;
                            color: white;
                            font-weight: 500;
                        }
                    }
                    
                    }          
                }    

                
            }

        }     
    }

`

