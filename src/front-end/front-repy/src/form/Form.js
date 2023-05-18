import Input from './Input';
import SubmitButton from './SubmitButton';
import styles from './styles/Form.module.css';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import { useState } from 'react';

function Form({btnText, handleSubmit}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [vibilityIcon, setVisibilityIcon] = useState(<AiOutlineEye />);
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

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
        console.log(data)
        // console.log("foi")
        // console.log(usuario)
        // console.log(password)

        fetch("http://localhost:5000/api/login/", {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body:  JSON.stringify(data),
        }).then((response) => response.json())
            .then((data) => {
                if(data.sucess) {
                    window.alert("usuário validado")
                } else {
                    window.alert("usuário não encontrado")
                }
            }).catch(err => console.log(err));
    }

    return (
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
    );
}

export default Form;