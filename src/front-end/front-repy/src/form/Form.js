import Input from './Input';
import SubmitButton from './SubmitButton';
import styles from './styles/Form.module.css';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import  {AuthProvider} from '../context/AuthContext';

function Form({btnText, handleSubmit}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [vibilityIcon, setVisibilityIcon] = useState(<AiOutlineEye />);
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext);

    const togglePasswordVisibility = () => {
        //console.log(passwordVisible);
        setPasswordVisible((prevState) => !prevState);
        setVisibilityIcon(passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />);
    };

    function handleUsuario(e) {
        setUsuario(e.target.value);
        // console.log('email:' + usuario)
    }

    function handlePassword(e) {
        setPassword(e.target.value);
        // console.log('senha:' + password)
    }

    const submit = (e) => {
        e.preventDefault();
        const data = {
            username: usuario,
            password: password,
        };
        loginUser({ e, usuario, password });
    }
    

    return (
        <AuthProvider>
            <form className={styles.container_form} onSubmit={submit}>
               <Input
                    type="text"
                    text="Email"
                    name="email"
                    placeholder="Digite seu email"
                    handleOnChange={handleUsuario}
                    value={usuario}
                    autoComplete='on'
               />
               <div className={styles.input_container}>
                   <Input
                   type={passwordVisible ? 'text' : 'password'}
                   text="Senha"
                   id="passwordInput"
                   name="password"
                   placeholder="Digite sua senha"
                   handleOnChange={handlePassword}
                   value={password}
                   />
                <span className={styles.icon} onClick={togglePasswordVisibility}>{vibilityIcon}</span>
               </div>
               <p className={styles.forget}>Forget password?</p>
                <SubmitButton text={btnText}/>
            </form>
        </AuthProvider>
    );
}

export default Form;

// fetch("http://localhost:8000/api/login/", {
        //     method: 'POST',
        //     headers: {
        //         'Content-type' : 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // }).then((response) => response.json())
        //     .then((data) => {
        //         if(data.success) {
        //             navigate("/home")
        //         } else {
        //             window.alert("usuário não encontrado")
        //         }
        //     }).catch((error) => console.log(error));
// }