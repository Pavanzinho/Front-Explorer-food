
import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../service/api";


const AuthContext = createContext({}); //possibilita fornecimento de contexto.

function AuthProvider({ children }) {
    const [data, setData] = useState({});


    async function signIn({ email, password }) {

        try {

            //response possuirá o retorno de SessionsControllers, pois back-end identificada requisição na rota de sessions
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem("@explorerfood:user", JSON.stringify(user));
            localStorage.setItem("@explorerfood:token", token)

            setData({ user, token })    

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível logar")
            }
        }
    }

    function signOut() {
        
        localStorage.removeItem("@explorerfood:user")
        localStorage.removeItem("@explorerfood:token")

        setData({});
      
    }


    useEffect(() => {
        const token = localStorage.getItem("@explorerfood:token")
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, [data]);


    useEffect(() => {
        const user = localStorage.getItem("@explorerfood:user")
        const token = localStorage.getItem("@explorerfood:token")

        if (user && token) {
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, []);

    //Provendo dados do usuário para todas as rotas; {children}--> será substituido por routes
    return (
        <AuthContext.Provider value={{ signIn, user: data.user,token:data.token, signOut }}>
            {children}
        </AuthContext.Provider>

    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context

}

export { AuthProvider, useAuth };

