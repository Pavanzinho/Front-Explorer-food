import { Container } from "./style";


export function RedButton({ newplate, clientHeader, style, children, ...rest }) {

    let idForInactiveButton;

    // if (style === "headerClientRedButton") {
    //     buttonText = " Pedidos(0)"
    // }

    // if (style === "headerAdmRedButton") {
    //     buttonText = "Novo prato"
    // }

    // if (style === "signUpRedButton") {
    //     buttonText = "Criar conta"
    // }

    // if (style === "signInRedButton") {
    //     buttonText = " Entrar"
    // }

    // if (style === "clientDetailsRedButton") {
    //     buttonText = ""
    // }

    // if (newplate) {
    //     idForInactiveButton = "inactiveButton"
    // } else {
    //     idForInactiveButton = ""
    // }

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
            type="button"
            className={style}
            id={idForInactiveButton}

        >
            {children}
            <span>{buttonText}</span>
        </Container>
    )
}