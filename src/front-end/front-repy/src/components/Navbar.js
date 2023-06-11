import styles from './Navbar.module.css';
import iconHome from '../material/icons/Home.svg';
import iconCadastro from '../material/icons/Cadastro.svg';
import iconHistorico from '../material/icons/Historico.svg';
import iconLogout from '../material/icons/Logout.svg';
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../context/AuthContext';


function Navbar() {
    const [selectedItem, setSelectedItem] = useState('home');
    let {name} = useContext(AuthContext)

    const isSelected = (item) => {
      return selectedItem === item;
    };
    return (
        <nav className={styles.navBar}>
            <div className={styles.profile}>
                <div>
                    <p className={styles.imageProfile}></p>
                </div>
                <p className={styles.nameUser}>{name}</p>
            </div>

            <div className={styles.navItens}>
                <Link to="/home" className={`${styles.navItem} ${isSelected('home') ? styles.selected : ''}`} onClick={() => setSelectedItem('home')}>
                    <img className={styles.icon} src={iconHome} alt="Logo Home"/>
                    <p>Home</p>
                </Link>

                <Link className={`${styles.navItem} ${isSelected('historico') ? styles.selected : ''}`} onClick={() => setSelectedItem('historico')}>
                    <img className={styles.icon} src={iconHistorico} alt="Logo Home"/>
                    <p>Histórico de marcações</p>
                </Link>

                <Link to="/cadastro" className={`${styles.navItem} ${isSelected('cadastro') ? styles.selected : ''}`} onClick={() => setSelectedItem('cadastro')}>
                    <img className={styles.icon} src={iconCadastro} alt="Logo Home"/>
                    <p>Cadastrar usuário</p>
                </Link>

                <div className={styles.logout}>
                    <img className={styles.icon} src={iconLogout} alt="Logout Home"/>
                    <p>Logout</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;