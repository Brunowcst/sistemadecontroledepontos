import { createContext, useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext();


export default AuthContext;

export const AuthProvider = ({children}) => {
    
    const navigate = useNavigate();

    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

    const loginUser = async ({e, usuario, password}) => {
        e.preventDefault();
        const userData = {
            username: usuario,
            password: password,
        };

        try {
            let response = await fetch("http://localhost:8000/token/", {
              method: 'POST',
              headers: {
                'Content-type' : 'application/json',
              },
              body: JSON.stringify(userData),
            });
            let data = await response.json();
            if(response.status === 200) {
                setUser(jwt_decode(data.access));
                setAuthTokens(data);
                localStorage.setItem('authTokens', JSON.stringify(data))
                navigate('/home')
            } else {
                window.alert('Usuário não encontrado');
            }
            } catch (error) {
                console.log(error);
            }
        }

        // useEffect(() => {
        //     let minutes = 2000
        //     let interval = setInterval(() => {
        //         if(authTokens) {
        //             updateToken()
        //         }
        //     }, 2000)
        //     return () => clearInterval(interval)
        //   }, [authTokens, loading]);

        useEffect(() => {
            console.log('user:', user);
            console.log('auth:', authTokens);
          }, [user, authTokens]);

            // .then((data) => {
            //     if(data.success) {
            //         navigate("/home")
            //     } else {
            //         window.alert("usuário não encontrado")
            //     }
            // }).catch((error) => console.log(error));


    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/')
    }

    let contextData = {
        loginUser:loginUser,
        user:user,
        logoutUser:logoutUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}