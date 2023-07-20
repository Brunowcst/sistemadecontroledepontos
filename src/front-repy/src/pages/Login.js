import styles from './styles/Login.module.css';
import Form from '../form/Form';
import {BsFacebook} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import Logo from '../material/images/logorepy.svg'


function Login() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_login}>
                    <img src={Logo} alt='Logo' height={60} className={styles.logo}/>
                    <h1>Login Now</h1> 
                    <Form btnText="Logar"/>
                    {/* <div>
                        <p className={styles.textSign}>Ou entre com:</p>
                        <div className={styles.icons_container}>
                            <BsFacebook className={styles.icon}/>
                            <FcGoogle className={styles.icon_google}/>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Login;

/*  <div className={styles.create_account}>
        <p>Não possui uma conta?</p>
    </div> */