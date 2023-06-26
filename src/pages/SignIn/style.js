import styled from "styled-components";


export const Container = styled.div`
    max-width: 42.8rem;
    display: flex;
    flex-direction: column;
    margin:0 auto;
    height: 100%;

    .pageContainer{

        display: flex;
        flex-direction: column;
        padding: 15.8rem 4.7rem 0 6.5rem;
        height: 100%;



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
           
            >h1{
                font-size: 3.7rem;
                line-height: 4.3rem;
                font-weight: 700;
                color: white;
            }

        }

        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 3.2rem;
            justify-content: center;

            h1{
                display: none;
            }

            label{
               display: flex;
               flex-direction: column;
               gap: 8px;
               font-family: 'Roboto', sans-serif;
            }
            
            button{
                height: 4.8rem;
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
        }
    }



    @media screen and (min-width: 1300px){
        
        max-width: none;
        
        .pageContainer{
            display: flex;
            flex-direction: row;
            height: 100vh;
            gap: 30rem;
            padding: 11rem 10.8rem 11rem 0;
            justify-content: center;
            

            .titleContainer{
                display: flex;
                align-items: center;
                margin: 0 0 0 auto;
                
                h1{
                    font-size: 4.2rem;
                    line-height: 4.9rem;
                }

                img{
                    width: 5rem;
                    height: 4.7rem;
                }
            }


            form{
            max-width: 60rem;
            display: flex;
            padding: 6.4rem;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3.2rem;
            background: ${({ theme }) => theme.COLORS.DARK_DARK_700};
            border-radius: 16px;

                h1{
                    display: block;
                    font-family: 'Poppins',sans-serif;
                    font-weight: 500;
                    line-height: 4.48rem;
                    font-size: 3.2rem;
                }
           
            

           
            }
        }
    }
    
`