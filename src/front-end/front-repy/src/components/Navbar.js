import styles from './Navbar.module.css';
import iconHome from '../material/icons/Home.svg';
import iconCadastro from '../material/icons/Cadastro.svg';
import iconHistorico from '../material/icons/Historico.svg';
import iconLogout from '../material/icons/Logout.svg';
import {useState} from 'react';


function Navbar() {
    const [selectedItem, setSelectedItem] = useState('home');

    const isSelected = (item) => {
      return selectedItem === item;
    };
    return (
        <nav className={styles.navBar}>
            <div className={styles.profile}>
                <div>
                    <p className={styles.imageProfile}></p>
                </div>
                <p className={styles.nameUser}>Robertinho delas</p>
            </div>
            <div className={styles.navItens}>
                <div className={`${styles.navItem} ${isSelected('home') ? styles.selected : ''}`} onClick={() => setSelectedItem('home')}>
                    <img className={styles.icon} src={iconHome} alt="Logo Home"/>
                    <p>Home</p>
                </div>
                <div className={`${styles.navItem} ${isSelected('historico') ? styles.selected : ''}`} onClick={() => setSelectedItem('historico')}>
                    <img className={styles.icon} src={iconHistorico} alt="Logo Home"/>
                    <p>Histórico de marcações</p>
                </div>
                <div className={`${styles.navItem} ${isSelected('cadastro') ? styles.selected : ''}`} onClick={() => setSelectedItem('cadastro')}>
                    <img className={styles.icon} src={iconCadastro} alt="Logo Home"/>
                    <p>Cadastrar usuário</p>
                </div>
                <div className={styles.logout}>
                    <img className={styles.icon} src={iconLogout} alt="Logo Home"/>
                    <p>Logout</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;