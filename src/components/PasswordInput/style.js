import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: 'Roboto', sans-serif;

    
        div{
            display: flex;
            background-color: ${({ theme }) => theme.COLORS.DARK_DARK_900};
            border-radius: 8px;
            padding: 1.6rem 1.4rem;
            height: 4.8rem;
            align-items: center;

            >input{
                width: 100%;
                background-color: transparent;
                border: none;
                border-radius: 10px;
                
                color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
                
                &::placeholder{
                    color: ${({ theme, }) => theme.LIGTH_LIGHT_500};
                }
                &:focus{
                    outline: none;
                }
            }
        
            >button{
                background-color: transparent;
                border: none;
                outline: none;
        
                svg{
                    color: white;
                }
            }
    }





`