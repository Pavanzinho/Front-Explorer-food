import styled from "styled-components";
import { device } from "../../styles/global";

export const Container = styled.div`
    max-width: 42.8rem;
    display: flex;
    flex-direction: column;
    margin:0 auto;

    @media ${device.desktop}{
        max-width: none;
    }


    .pageContainer{

        display: flex;
        flex-direction: column;
        padding: 15.8rem 4.7rem 0 6.5rem;
        @media ${device.desktop}{
            display: flex;
            flex-direction: row;
            height: 100vh;
            gap: 20rem;
            padding: 11rem 10.8rem 11rem 0;
            justify-content: center;
        }

        h1,input,label{
            font-family: 'Roboto', sans-serif;
        }

        button{
            font-family: 'Poppins', sans-serif;
        }

        .titleContainer{
            display: flex;
            gap: 11px;
            margin-bottom: 7.3rem;
            @media ${device.desktop}{
                display: flex;
                align-items: center;
                margin: 0 0 0 auto;
            }
           
            >h1{
                font-size: 3.7rem;
                line-height: 4.3rem;
                font-weight: 700;
                color: white;
                @media ${device.desktop}{
                    display: flex;
                    align-items: center;
                    margin: 0 0 0 auto;
                }
            }

            img{
                @media ${device.desktop}{
                    width: 5rem;
                    height: 4.7rem;
                }
            }

        }

        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 3.2rem;
            justify-content: center;
            @media ${device.desktop}{
                max-width: 60rem;
                display: flex;
                padding: 6.4rem;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 3.2rem;
                background: ${({ theme }) => theme.COLORS.DARK_DARK_700};
                border-radius: 16px;
            }

            h1{
                @media ${device.desktop}{
                    display: block;
                    font-family: 'Poppins',sans-serif;
                    font-weight: 500;
                    line-height: 4.48rem;
                    font-size: 3.2rem;
                }
            }

            label{
               display: flex;
               flex-direction: column;
               gap: 8px;
               font-family: 'Roboto', sans-serif;
            }
            
            button{
                min-height: 4.8rem;
                max-height: 4.8rem;
                font-size: 1.6rem;
                line-height: 2.4rem;
                font-weight: 500;

            }  

            .buttonText{
                font-size: 1.4rem;
                line-height: 2.4rem;
                font-weight: 500;
                max-width: 14rem;
                max-height: 2.4rem;
                align-self: center;

            }

            .checkboxInputContainer{
                align-self: flex-start;
                display: flex;
                gap: 1.2rem;
                height: 20px;
               
                .checkboxInput{
                    height: 100%;
                    width: 20px;
                }

                span{
                    font-family: 'Poppins', sans-serif;
                }
            }
        }

        
    }

`