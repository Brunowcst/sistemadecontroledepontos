import { useContext, useState } from 'react';
import styles from './styles/Home.module.css'
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom'

function Home() {
    let {user} = useContext(AuthContext)
    const [itemSelecionado, setItemSelecionado] = useState("todos")
    
    return (
        <div className={styles.grid}>
            <h1>Inicio</h1>
            <section className={styles.sectionUser}>
                <div className={styles.sectionContainers}>
                    <p>Nome: {user ? user.username.charAt(0).toUpperCase() + user.username.slice(1) : 'Sem nome'}</p>
                    <p>Cargo: Desenvolvedor</p>
                </div>

                <div className={styles.sectionContainers}>
                    <p>Cadastro: {user.user_id}</p>
                </div>

                <div className={styles.sectionContainers}>
                    <p>Escala: 7-11</p>
                    <p>Turno: M</p>
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
            <div to='/marcar-ponto' className={styles.containerButton}>
                <p>Qui, 14 - 8:00-13:00</p>
                <Link to='/marcar-ponto'><button className={styles.button}>Registrar ponto</button></Link>
            </div>
        </div>
    );
}

export default Home;