import { useContext } from 'react';
import styles from './styles/Home.module.css'
import AuthContext from '../context/AuthContext';

function Home() {
    let {name} = useContext(AuthContext)
    
    return (
        <div className={styles.grid}>
            olá, {name}
        </div>
    );
}

export default Home;