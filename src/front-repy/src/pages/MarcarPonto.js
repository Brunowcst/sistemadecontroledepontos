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
    const [password, setPassword] = useState('');

    function handleJustificativa(e) {
        setJustificativa(e.target.value);
        console.log(justificativa)
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

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
                       className='inputMarcar'
                       type='password'
                       id="passwordInput"
                       name="password"
                       placeholder="Digite sua senha"
                       handleOnChange={handlePassword}
                       value={password}
                       />

                        <button className={styles.button}>Confirmar</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default MarcarPonto;