import styles from './styles/Funcionario.module.css';
import { getFuncionarios } from '../api/funcionarios';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import {Link} from 'react-router-dom';
import Seta from '../material/icons/seta.svg'

function Funcionario() {
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
            </section>

            <section className={styles.sectionInformations}>
                <div className={styles.sectionHeader}>
                    <h2>Funcionários</h2>
                    <Link to="/funcionario/cadastro"><button className={styles.button}>Cadastrar funcionário</button></Link>
                </div>
                <div className={styles.navInformations}>
                    <p>Todos</p>
                </div>
                
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Status</th>
                        <th> </th>
                    </tr>
                    
                    {funcionario.length > 0 && (
                    <>
                        {funcionario.map((func) => {
                        return <tr>
                        <td>{func.id}</td>
                        <td>{func.nome}</td>
                        <td>-</td>
                        <Link to={`/funcionario/detalhes/${func.id}`}>
                            <td className={styles.buttonUser}>
                              <img alt='icon-seta' src={Seta} className={styles.iconSeta}/>
                            </td>
                        </Link>
                    </tr>
                        })}
                    </>
            )}
                </table>

            </section>
        </div>
    );
}

export default Funcionario;