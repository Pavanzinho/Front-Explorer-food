import { Container } from "./style";
import { Input } from "../../components/Input";
import { RedButton } from "../../components/RedButton";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { PasswordInput } from "../../components/PasswordInput";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password })
    }

    function handleSignUp() {
        navigate("/register")
    }

    function handleSubmit(event){
        event.preventDefault()
        handleSignIn()
    }

    return (
        <Container >

            <div className="pageContainer" >
                <div className="titleContainer">
                    <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C" />
                    </svg>

                    <h1>food explorer</h1>
                </div>
                <form onSubmit={handleSubmit}>

                    <h1>Faça login</h1>

                    <Input
                        title="Email"
                        name="email"
                        placeholder="exemplo:exemplo@gmail.com"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        
                    />

                    <PasswordInput
                        title="Senha"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />

                    <RedButton
                        onClick={handleSignIn}
                        style="signInRedButton"
                    >

                    </RedButton>

                    <ButtonText
                        title="Criar uma conta"
                        className="buttonText"
                        onClick={handleSignUp}
                    />
                </form>
            </div>
        </Container>
    )
}
