import styles from './Cadastro.module.css';
import NavBar from '../components/Navbar'
import FormFuncionario from '../form/FormFuncionario';

function Cadastro() {
    return (
        <div className={styles.grid}>
            <section className={styles.section}>
                <h1>Cadastrar usuário</h1>
                <FormFuncionario btnText="Cadastrar funcionário"/>
            </section>
        </div>
    );
}

export default Cadastro;