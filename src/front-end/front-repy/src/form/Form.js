import Input from './Input';
import SubmitButton from './SubmitButton';
import styles from './styles/Form.module.css';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import { useState } from 'react';

function Form({btnText, handleSubmit}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [vibilityIcon, setVisibilityIcon] = useState(<AiOutlineEye />);


    const submit = (e) => {
        e.preventDefault();
    }

    const togglePasswordVisibility = () => {
        //console.log(passwordVisible);
        setPasswordVisible((prevState) => !prevState);
        setVisibilityIcon(passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />);
    };

    return (
        <form className={styles.container_form} onSubmit={submit}>
           <Input 
            	type="text"
                text="Email"
                name="email"
                placeholder="Digite seu email"
                //onChange={handleOnChange}
                //value=
                autoComplete='on'
           /> 

           <div className={styles.input_container}>
               <Input
               type={passwordVisible ? 'text' : 'password'}
               text="Senha"
               id="passwordInput"
               name="password"
               placeholder="Digite sua senha"
               //onChange={handleOnChange}
               //value=
               />

            <span className={styles.icon} onClick={togglePasswordVisibility}>{vibilityIcon}</span>
           </div>

           <p className={styles.forget}>Forget password?</p>

            <SubmitButton text={btnText}/>
        </form>
    );
}

export default Form;