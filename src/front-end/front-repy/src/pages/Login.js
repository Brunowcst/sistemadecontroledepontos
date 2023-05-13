import styles from './Login.module.css';
import Form from '../form/Form';

function Login() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_login}>
                    <h1>Login Now</h1> 
                    <Form btnText="Logar"/>
                </div>
            </div>
        </>
    );
}

export default Login;

/*  <div className={styles.create_account}>
        <p>Não possui uma conta?</p>
    </div> */