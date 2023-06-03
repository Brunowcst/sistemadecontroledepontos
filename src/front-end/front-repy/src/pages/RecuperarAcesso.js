import Input from '../form/Input';
import {useState, useEffect} from 'react';
import SubmitButton from '../form/SubmitButton';
import styles from './RecuperarAcesso.module.css';

function RecuperarAcesso(props) {
const [email, setEmail] = useState('');
const [mensagem, setMensagem] = useState('');
const [csrfToken, setCsrfToken] = useState('');

    function HandleChange (e) {
        setEmail(e.target.value)
    }

    useEffect(() => {
        // Obter o token CSRF do backend
        fetch('http://localhost:8000/get_csrf_token/')  // Rota para obter o token CSRF do backend
        .then((response) => response.json())
        .then((data) => {
            setCsrfToken(data.csrfToken);  // Definir o token CSRF no estado
        })
        .catch((error) => {
            console.error('Erro ao obter o token CSRF:', error);
        });
    }, []);

    const submit = (e) => {
        e.preventDefault();
        const emailData = email;

        const csrftoken = csrfToken; // Obter o valor do token CSRF

        fetch('http://localhost:8000/password_reset/', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(emailData),
        }).then((response) => response.json())
        .then((data) => {
          setMensagem(data.mensagem); // Exibe a mensagem retornada pelo Django
        })
        .catch((error) => {
          console.error('Erro:', error);
          setMensagem('Ocorreu um erro ao solicitar a recuperação de acesso. Por favor, verifique se o email está cadastrado e tente novamente');
        });
    }

    function getCookie(name) {
        const cookieName = `${name}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
      
        for (let i = 0; i < cookieArray.length; i++) {
          let cookie = cookieArray[i];
          while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
          }
          if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
          }
        }
      
        return '';
    }

    return (
        <section className={styles.container}>
                <form className={styles.form} onSubmit={submit}>
                    <p>Esqueceu suas credenciais de acesso? Solicite uma recuperação por email.</p>
                    <Input
                        type='email'
                        name='email'
                        text='Email'
                        placeholder='Digite um email válido'
                        handleOnChange={HandleChange}
                        value={email}
                        autoComplete='on'
                    />
                    <SubmitButton text="Enviar solicitação"/>
                </form>
                {mensagem && <p className={styles.erroMessage}>{mensagem}</p>}
        </section>

    );
}

export default RecuperarAcesso;