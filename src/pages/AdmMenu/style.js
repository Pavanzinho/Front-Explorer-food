import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    
        header{
        padding: 5.6rem 2.8rem 2.4rem;
        display: flex;
        align-items: flex-end;
        font-weight: 400;
        height: 11.4rem;
        width: 100%;
        background-color: ${({theme})=>theme.COLORS.DARK_DARK_700};
        font-family: 'Roboto', sans-serif;

        
            >div{
                height: 3.2rem;
                display: flex;
                align-items: center;

                button{
                    background: transparent;
                    border: none;
                    color: white;
                }

                span{
                    margin-left: 14px;
                }
            }
        
        }

        main{
            display: flex;
            flex-direction: column;
            padding: 3.6rem 2.8rem 1.357rem;
            height: 100%;
            


            .inputContainer{
                margin: 3.6rem 0;
                height: 4.8rem;
                width: 100%;
                padding: 1.2rem 1.4rem;
                background-color: ${({ theme }) => theme.COLORS.DARK_DARK_900};
                border-radius: 5px;
                gap:1.4rem;
                align-items: center;
                display: flex;

                >input{
                    width: 100%;
                    background-color: transparent;
                    border: none;
                    color: white;
                    outline: none;

                    
                }

            
            }

            .option{
                height: 5.4rem;
                width: 100%;
                display: flex;
                align-items: center;
                padding-left:1rem ;
                border-bottom: 1px solid #192227;
              
                
                button{
                    font-size: 2.4rem;
                    line-height: 3.36rem;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 300;
                }

              


            }
        }

        footer{
            height: 7.7rem;
            width: 100%;
            background-color: ${({ theme }) => theme.COLORS.DARK_DARK_600};
            padding: 0 2.8rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

           
        }
        .titleContainer{
                display: flex;
                gap:6.47px;
                color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_700};

                span{
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.5rem;
                    line-height: 2rem;
                    font-weight: 700;
                } 
            }

        .textContainer{
          
            color: white;
            
            span{
                font-family: 'DM Sans', sans-serif;
                font-size: 1.2rem;
                line-height: 1.5rem;
                font-weight: 400;
            } 
        }
        
    

`