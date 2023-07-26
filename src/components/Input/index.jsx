import { Container } from "./style";

export function Input({ type, title,placeholder, ...rest}){

    return(
        <Container {...rest}>
            
            {title}
            <input 
            placeholder={placeholder}
            required
            typeof={type}
            />

           
        </Container>

    )
}
