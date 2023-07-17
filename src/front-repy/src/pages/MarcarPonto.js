import styles from './styles/MarcarPonto.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Input from '../form/Input';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';

import { useState } from 'react';
import SubmitButton from '../form/SubmitButton';

function MarcarPonto() {
    const [justificativa, setJustificativa] = useState("")
    const [value, onChange] = useState(new Date());
    const [vibilityIcon, setVisibilityIcon] = useState(<AiOutlineEye />);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    function handleJustificativa(e) {
        setJustificativa(e.target.value);
        console.log(justificativa)
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
        setVisibilityIcon(passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />);
    };

    return (
        <div className={styles.grid}>
            <h1>Marcar ponto</h1>
            <section className={styles.section}>
                <div className={styles.containerCalendar}>
                    <Calendar 
                    className={styles.calendar}
                    onChange={onChange} 
                    value={value} 
                    />
                </div>

                <form className={styles.sectionUser}>
                    <div>
                        <input type="checkbox" name="justifica" />
                        <label for="scales">Justificativa</label>
                    </div>
                    <textarea
                        className={styles.textArea}
                        placeholder='Descrição'
                        rows={6}
                        onChange={handleJustificativa}
                        value={justificativa}
                    />
                    <div className={styles.input_container}>
                       <Input
                       customClass='inputCadastro'
                       type={passwordVisible ? 'text' : 'password'}
                       id="passwordInput"
                       name="password"
                       placeholder="Digite sua senha"
                       handleOnChange={handlePassword}
                       value={password}
                       />
                        <span className={styles.icon} onClick=  {togglePasswordVisibility}>{vibilityIcon} </span>
                    </div>
                    <div className={styles.button}>
                        <SubmitButton text='Confirmar'/>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default MarcarPonto;