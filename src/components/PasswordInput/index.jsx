import { Container } from "./style";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useState } from "react";

export function PasswordInput({ title, ...rest }) {

    const [notSeePassword, setNotSeePassword] = useState(true)

    function handleShowPassword() {
        setNotSeePassword(!notSeePassword)
    }
    return (

        <Container {...rest}>

            {title}

            <div className="inputContainer">

                <input {...rest}
                    type={notSeePassword ? "password" : "text"}
                    placeholder="mínimo 6 caracteres"
                    required
                />

                <button
                    onClick={handleShowPassword}
                    type="button">

                    {
                        notSeePassword ?
                            <AiFillEye
                                name="eye"
                                size={20}
                            />
                            :
                            <AiFillEyeInvisible
                                name="invisibleEye"
                                size={20}
                            />
                    }
                </button>
            </div>

        </Container>
    )
}
