import { createContext, useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext();


export default AuthContext;

export const AuthProvider = ({children}) => {
    
    const navigate = useNavigate();
    let [user, setUser] = useState(null)
    let [authToken, setAuthToken] = useState(null)

    const loginUser = async ({e, usuario, password}) => {
        e.preventDefault();
        const data = {
            username: usuario,
            password: password,
        };

        let response = fetch("http://localhost:8000/api/login/", {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => response.json())
            .then((data) => {
                if(data.success) {
                    navigate("/home")
                } else {
                    window.alert("usuário não encontrado")
                }
            }).catch((error) => console.log(error));
    }


    let contextData = {
        loginUser:loginUser,
        name : "Bruno",
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}