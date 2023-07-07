import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import styles from './styles/Historico.module.css'
import { getFuncionarios } from '../api/funcionarios';

function Historico() {
    const [funcionario, setFuncionarios] = useState([])
    const {bearer} = useContext(AuthContext)

    useEffect(() => {
        const dataFuncionarios = async () => {
            try {
                const data = await getFuncionarios({bearer});
                setFuncionarios(data)
            } catch (error) {
                console.log(error)
            }
        };

        dataFuncionarios();
    }, []);

    
    return (
        <div className={styles.grid}>
            <section className={styles.section}>
                <h1>Histórico marcações</h1>
            </section>

            {funcionario.length > 0 && (
                <div>
                    {funcionario.map((func) => {
                       return <div>{func.nome}</div>
                    })}
                </div>
            )}
        </div>
    );
}

export default Historico;