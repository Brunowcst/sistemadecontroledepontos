import styles from './styles/Cadastro.module.css';
import FormFuncionario from '../form/FormFuncionario';

function Funcionario() {
    return (
        <div className={styles.grid}>
            <section className={styles.section}>
                <h1>Funcionários</h1>
                {/* <FormFuncionario btnText="Cadastrar funcionário"/> */}
            </section>
        </div>
    );
}

export default Funcionario;