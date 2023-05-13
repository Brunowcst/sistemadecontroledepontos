import Input from './Input';
import SubmitButton from './SubmitButton';
import styles from './styles/Form.module.css';

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

           <Input 
           type="text"
           text="Senha"
           name="password"
           placeholder="Digite sua senha"
           //onChange={handleOnChange}
           //value=
           />

           <p className={styles.forget}>Forget password?</p>

            <SubmitButton text={btnText}/>
        </form>
    );
}

export default Form;