import { Container } from "./style";


export function RedButton({ newplate, clientHeader, style, children, ...rest }) {

    let idForInactiveButton;


    const styleButtonTextMap = {
        headerClientRedButton: "Pedidos(0)",
        headerAdmRedButton: "Novo prato",
        signUpRedButton: "Criar conta",
        signInRedButton: "Entrar",
        clientDetailsRedButton: "",
        newPlateRedButton: "Criar prato",
        editPlateRedButton: "Salvar alterações"
    };

    const buttonText = styleButtonTextMap[style] || "";
    idForInactiveButton = newplate ? "inactiveButton" : "";

    return (
        <Container
            {...rest}
            type="submit"
            className={style}
            id={idForInactiveButton}

        >
            {children}
            <span>{buttonText}</span>
        </Container>
    )
}
