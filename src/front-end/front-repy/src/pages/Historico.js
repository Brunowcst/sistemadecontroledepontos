import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import styles from './styles/Historico.module.css'

function Historico() {
    const [funcionario, setFuncionarios] = useState([])
    const {bearer} = useContext(AuthContext)

    useEffect(() => {
        const getFuncionarios = async () => {
    
            try {
                let response = await fetch("http://localhost:8000/funcionario/", {
                  method: 'GET',
                  headers: {
                    'Content-type' : 'application/json',
                    'Authorization' : 'Bearer ' + bearer
                  },
                }).then((resp) => resp.json()
                    .then((data) => {
                        setFuncionarios(data)
                        console.log('func '+ funcionario)
                    })
                );

            } catch (error) {
                console.log(error);
            }
        }    

        getFuncionarios()
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