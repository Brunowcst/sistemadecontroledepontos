import styles from './styles/Cadastro.module.css'
import FormFuncionario from '../form/FormFuncionario'

function Cadastro() {
    return (
        <div className={styles.grid}>
            <section className={styles.section}>
                <h1>Cadastrar funcionário</h1>
                <FormFuncionario btnText="Cadastrar"/>
            </section>
        </div>
    );
}

export default Cadastro;