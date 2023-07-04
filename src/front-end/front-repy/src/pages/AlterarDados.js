import FormFuncionario from '../form/FormFuncionario';
import styles from './styles/AlterarDados.module.css'


function AlterarDados() {
    return (
        <div className={styles.grid}>
            <section className={styles.section}>
                <h1>Alterar dados</h1>
                <FormFuncionario
                    btnText='Salvar'
                />
            </section>
        </div>
    );
}

export default AlterarDados;