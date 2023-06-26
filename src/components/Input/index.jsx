import { Container } from "./style";

export function Input({title,placeholder, ...rest}){

    return(
        <Container {...rest}>
            
            {title}
            <input placeholder={placeholder}/>

           
        </Container>

    )
}