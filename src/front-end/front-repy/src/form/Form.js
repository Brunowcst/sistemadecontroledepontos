import Input from './Input';
import SubmitButton from './SubmitButton';
import styles from './styles/Form.module.css';
import {AiOutlineEye} from 'react-icons/ai';

function Form({btnText, handleSubmit}) {

    const submit = (e) => {
        e.preventDefault();
    }

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
               type="password"
               text="Senha"
               id="password"
               name="password"
               placeholder="Digite sua senha"
               //onChange={handleOnChange}
               //value=
               />

            <AiOutlineEye className={styles.icon}/>
           </div>

           <p className={styles.forget}>Forget password?</p>

            <SubmitButton text={btnText}/>
        </form>
    );
}

export default Form;