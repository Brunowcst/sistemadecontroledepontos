import styles from './Navbar.module.css';
import iconHome from '../material/icons/Home.svg';
import iconCadastro from '../material/icons/Cadastro.svg';
import iconHistorico from '../material/icons/Historico.svg';
import iconLogout from '../material/icons/Logout.svg';
import iconFunc from '../material/icons/funcIcon.svg';
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../context/AuthContext';


function Navbar() {
    const [selectedItem, setSelectedItem] = useState('home');
    let {user, logoutUser} = useContext(AuthContext)

    const isSelected = (item) => {
      return selectedItem === item;
    };
    return (
        <nav className={styles.navBar}>
            <div className={styles.profile}>
                <div>
                    <p className={styles.imageProfile}></p>
                </div>
                <p className={styles.nameUser}>{user ? user.username.charAt(0).toUpperCase() + user.username.slice(1) : 'Sem nome'}</p>
            </div>

            <div className={styles.navItens}>
                <Link to="/home" className={`${styles.navItem} ${isSelected('home') ? styles.selected : ''}`} onClick={() => setSelectedItem('home')}>
                    <img className={styles.icon} src={iconHome} alt="Logo Home"/>
                    <p>Home</p>
                </Link>

                <Link to="/historico-marcacoes" className={`${styles.navItem} ${isSelected('historico') ? styles.selected : ''}`} onClick={() => setSelectedItem('historico')}>
                    <img className={styles.icon} src={iconHistorico} alt="Logo Home"/>
                    <p>Histórico de marcações</p>
                </Link>

                <Link to="/alterar-dados" className={`${styles.navItem} ${isSelected('alterar') ? styles.selected : ''}`} onClick={() => setSelectedItem('alterar')}>
                    <img className={styles.icon} src={iconCadastro} alt="Logo Home"/>
                    <p>Alterar dados</p>
                </Link>

                <Link to="/funcionario" className={`${styles.navItem} ${isSelected('funcionario') ? styles.selected : ''}`} onClick={() => setSelectedItem('funcionario')}>
                    <img className={styles.icon} src={iconFunc} alt="Logo Home"/>
                    <p>Funcionários</p>
                </Link>

                
                <div className={styles.logout}>
                    <img className={styles.icon} src={iconLogout} alt="Logout Home"/>
                    <p onClick={logoutUser}>Logout</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;