import React,  { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import styles from './styles/FuncionarioDetalhes.module.css'
import iconPerfil from '../material/icons/perfil.svg'
import AuthContext from '../context/AuthContext';
import { base } from '../api/base';

function FuncionarioDetalhes() {
    const navigate = useNavigate();
    const {bearer} = useContext(AuthContext);
    const [funcionario, setFuncionario] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getFuncionarios = async () => {
            try {
                let response = await fetch(`${base}/funcionario/${id}`, {
                  method: 'GET',
                  headers: {
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${bearer}`
                  },
                });
                let data = await response.json();
                if(response.status === 200) {
                    setFuncionario(data)
                } else {
                    throw new Error('Error: requisição de dados.')
                }
            } catch (error) {
                console.log(error)
                throw error;
            }
        }   

        getFuncionarios();
    }, []);


    const delFuncionario = async () => {
        try {
            let response = await fetch(`${base}/funcionario/${id}`, {
                method: 'DELETE',
                headers: {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${bearer}`
                },
            });
            if(response.status === 204) {
                navigate("/funcionario")
                console.log("usuario deletado")
            } else {
                throw new Error('Error: requisição de dados.')
            }
        } catch (error) {
            console.log(error)
            throw error;
        }
    }   

    return (
        <div className={styles.grid}>
            <section className={styles.section}>
                <div className={styles.userHeader}>
                    <img src={iconPerfil} alt='Imagem default perfil' height={100}/>
                    <p>{funcionario.nome}</p>
                </div>

                <div className={styles.userDatas}>
                    <div className={styles.column}>
                        <div>
                            <label>Código</label>
                            <p>{funcionario.id}</p>
                        </div>

                        <div>
                            <label>Data nascimento</label>
                            <p>{funcionario.data_nasc}</p>
                        </div>

                        <div>
                            <label>CPF</label>
                            <p>{funcionario.cpf}</p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div>
                            <label>Sexo</label>
                            <p>{funcionario.sexo}</p>
                        </div>

                        <div>
                            <label>Código depto</label>
                            <p>{funcionario.cod_depto}</p>
                        </div>

                        <div>
                            <label>Turno</label>
                            <p>Geral</p>
                        </div>
                    </div>
                </div>

                <div className={styles.containerButtons}>
                    {/* <button className={`${styles.button} ${styles.buttonConfirmar}`}>Confirmar</button> */}
                    {/* <button className={`${styles.button} ${styles.buttonRelatorio}`}>Gerar Relatório</button> */}
                    <button onClick={delFuncionario} className={`${styles.button} ${styles.buttonInativar}`}>Inativar</button>
                </div>
            </section>
        </div>
    );
}

export default FuncionarioDetalhes;