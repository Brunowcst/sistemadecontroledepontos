import { useContext } from 'react';
import styles from './styles/Home.module.css'
import AuthContext from '../context/AuthContext';

function Home() {
    let {name} = useContext(AuthContext)
    
    return (
        <div className={styles.grid}>
            <h1>Inicio</h1>
            <section className={styles.sectionUser}>
                <div className={styles.sectionContainers}>
                    <p>Nome: -</p>
                    <p>Cargo: -</p>
                </div>

                <div className={styles.sectionContainers}>
                    <p>Cadastro: -</p>
                </div>

                <div className={styles.sectionContainers}>
                    <p>Escala: -</p>
                    <p>Turno: -</p>
                </div>
            </section>

            <section className={styles.sectionInformations}>
                <h2>Dias apurados</h2>
                <div className={styles.navInformations}>
                    <p>Todos(-)</p>
                    <p>Pendentes</p>
                    <p>Banco de horas</p>
                </div>
                
                <table>
                    <tr>
                        <th>Data</th>
                        <th>Marcações</th>
                        <th>Situação</th>
                    </tr>
                    <tr>
                        <td>--/--/---</td>
                        <td>---------</td>
                        <td>Pendente</td>
                    </tr>
                </table>

            </section>
        </div>
    );
}

export default Home;