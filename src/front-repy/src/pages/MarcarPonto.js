import styles from './styles/MarcarPonto.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Input from '../form/Input';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';

import { useState, useContext, useEffect } from 'react';
import SubmitButton from '../form/SubmitButton';
import AuthContext from '../context/AuthContext';
import { base } from '../api/base';
import {navigate, useNavigate} from 'react-router-dom'

function MarcarPonto() {
    const navigate = useNavigate()
    const {bearer} = useContext(AuthContext)
    const [value, onChange] = useState(new Date());
    const [ponto, setPonto] = useState({
        descricao: '',
        cor_turno: 1,
        cod_func: 2,
        // date: "",
    });

    const postPonto = async (e) => {
        e.preventDefault();
        try {
            getDate();
            let response = await fetch(`${base}/registrarPonto/`, {
              method: 'POST',
              headers: {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${bearer}`
              },
              body: JSON.stringify(ponto)
            });
            const data = await response.json();
            console.log( data);
            if(response.status === 201) {
                navigate('/home')
                console.log("Ponto cadastrado")
            } else {
                throw new Error('Error: requisição de dados.')
            }
        } catch (error) {
            console.log(error)
            throw error;
        }
    }   


    function handleChange(e) {
        const { name, value } = e.target;
    
        if (['cod_turno'].includes(name)) {
            setPonto((prevData) => ({
                ...prevData,
                [name]: [parseInt(value, 10)],
            }));
        } else {
            setPonto((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }

    console.log(ponto)

    const getDate = ((e) => {
        const data = new Date();
        const year = data.getFullYear();
        const month = String(data.getMonth() + 1).padStart(2, '0');
        const day = String(data.getDate()).padStart(2, '0');
        const hours = String(data.getHours()).padStart(2, '0');
        const minutes = String(data.getMinutes()).padStart(2, '0');
        const seconds = String(data.getSeconds()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        setPonto((prevData) => ({
            ...prevData,
            date: formattedDate,
        })); 
    })

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
                        name='descricao'
                        rows={6}
                        onChange={handleChange}
                        value={ponto.descricao}
                    />
                    <div className={styles.input_container}>
                       {/* <Input
                       className='inputMarcar'
                       type='password'
                       id="passwordInput"
                       name="password"
                       placeholder="Digite sua senha"
                       handleOnChange={handleChange}
                       value={ponto.password}
                       /> */}

                        <button onClick={postPonto} className={styles.button}>Confirmar</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default MarcarPonto;