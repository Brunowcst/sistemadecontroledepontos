import { useContext, useState } from 'react';
import styles from './styles/Home.module.css'
import AuthContext from '../context/AuthContext';

function Home() {
    let {name} = useContext(AuthContext)
    const [itemSelecionado, setItemSelecionado] = useState(null)
    
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
                <p
                    className={itemSelecionado === 'todos' ? styles.itemSelecionado : ''}
                    onClick={() => setItemSelecionado('todos')}
                >
                    Todos(-)
                </p>
                <p
                    className={itemSelecionado === 'pendentes' ? styles.itemSelecionado : ''}
                    onClick={() => setItemSelecionado('pendentes')}
                >
                    Pendentes
                </p>
                <p
                    className={itemSelecionado === 'bancoHoras' ? styles.itemSelecionado : ''}
                    onClick={() => setItemSelecionado('bancoHoras')}
                >
                    Banco de horas
                </p>
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
            <div className={styles.containerButton}>
                <p>Qui, 14 - 8:00-13:00</p>
                <button className={styles.button}>Registrar ponto</button>
            </div>
        </div>
    );
}

export default Home;