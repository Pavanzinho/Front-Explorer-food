import { Container } from "./style";
import { Input } from "../../components/Input";
import { RedButton } from "../../components/RedButton";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { PasswordInput } from "../../components/PasswordInput";
import { api } from "../../service/api";
import { useState } from "react"


export function SignUp() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const [isAdm, setIsAdm] = useState(false)

    async function handleSignUp() {


        if (!name || !password || !email) {
            return alert("Todos os campos precisam ser preenchidos")
        }

        try {
            const response = await api.post("/users", { name, email, password, is_adm: isAdm ? 1 : 0 })
            alert("Usuário cadastrado")
            console.log(response)
        } catch {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        }
    }

    function handleSignIn() {
        navigate("/")
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleSignUp()
    }

    return (
        <Container>
            <div className="pageContainer">
                <div className="titleContainer">
                    <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C" />
                    </svg>

                    <h1>food explorer</h1>
                </div>

                <form action="" onSubmit={handleSubmit}>

                    <h1>Crie sua conta</h1>
                    <Input
                        title="Seu nome"
                        name="name"
                        placeholder="Maria da Silva"
                        onChange={event => setName(event.target.value)}
                        type="text"
                    />

                    <Input
                        title="Email"
                        name="email"
                        placeholder="exemplo:exemplo@gmail.com"
                        onChange={event => setEmail(event.target.value)}
                        type="email"
                    />


                    <PasswordInput
                        title="Senha"
                        onChange={event => setPassword(event.target.value)}
                    />

                    <div className="checkboxInputContainer">
                        <input
                            type="checkbox"
                            className="checkboxInput"
                            onChange={event => setIsAdm(event.target.checked)}
                        />
                        <span>Quero ter minha loja no Explorer Food!</span>
                    </div>



                    <RedButton
                        onClick={handleSignUp}
                        style={"signUpRedButton"}
                    >

                    </RedButton>

                    <ButtonText
                        title="Já tem uma conta ?"
                        className="buttonText"
                        onClick={handleSignIn}
                    />

                </form>
            </div>
        </Container>
    )
}
