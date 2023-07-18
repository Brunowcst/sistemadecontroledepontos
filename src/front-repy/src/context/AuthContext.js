import { createContext, useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext();


export default AuthContext;

export const AuthProvider = ({children}) => {
    
    const navigate = useNavigate();

    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
      
    const [bearer, setBearer] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        console.log(bearer)
    }, [bearer]);

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
                setBearer(data.access)
                navigate('/home')
            } else {
                window.alert('Usuário não encontrado ou credenciais inválidas');
            }
        } catch (error) {
            console.log(error);
        }
    }

        const updateToken = async () => {
            console.log('Update token called')
            try {
                let response = await fetch("http://localhost:8000/token/refresh/", {
                  method: 'POST',
                  headers: {
                    'Content-type' : 'application/json',
                  },
                  body: JSON.stringify({'refresh': authTokens?.refresh}),
                });
                let data = await response.json();
                if(response.status === 200) {
                    setUser(jwt_decode(data.access));
                    setAuthTokens(data);
                    localStorage.setItem('authTokens', JSON.stringify(data))
                } else {
                    logoutUser()
                }
            } catch (error) {
                console.log(error);
            }
        }

        useEffect(() => {
            let minutes = 1000 * 60 * 60
            let interval = setInterval(() => {
                if(authTokens) {
                    updateToken()
                }
            }, minutes)
            return () => clearInterval(interval)
        }, [authTokens, loading]);

        useEffect(() => {
            const authTokens = localStorage.getItem('authTokens');
            if (authTokens) {
                const { access } = JSON.parse(authTokens);
                setBearer(access);
            }
        }, [updateToken]);

        const logoutUser = () => {
            setAuthTokens(null)
            setUser(null)
            localStorage.removeItem('authTokens')
            navigate('/')
        }

        let contextData = {
            loginUser:loginUser,
            user:user,
            logoutUser:logoutUser,
            bearer:bearer,
        }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}