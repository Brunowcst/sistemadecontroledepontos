import styles from './Cadastro.module.css';
import NavBar from '../components/Navbar'
import Input from '../form/Input';
import SubmitButtom from '../form/SubmitButton';

function Cadastro(props) {
    return (
        <div className={styles.grid}>
            <NavBar/>
            <section className={styles.section}>
                <h1>Cadastrar usuário</h1>
                <form className={styles.formCadastro}>
                    <div className={styles.dadosPessoais}>
                        <p className={styles.userImage}></p>
                        <div className={styles.inputsDadosPessoais}>
                            <Input
                            customClass='inputCadastro'
                            type="text"
                            name="nome"
                            placeholder="Nome do funcionário:"
                            // onChange={handleOnChange}
                            // value={value}
                            />
                            <Input
                            customClass='inputCadastro'
                            type="text"
                            name="cargo"
                            placeholder="Informe o cargo:"/>
                            <Input
                            customClass='inputCadastro'
                            type="text"
                            name="escala"
                            placeholder="Informe a escala:"/>
                            <Input
                            customClass='inputCadastro'
                            type="text"
                            name="turno"
                            placeholder="Informe o turno:"/>
                        </div>
                    </div>
                    <div>
                        <Input customClass="inputCadastro"
                        type="text"
                        name="email"
                        placeholder="Digite o email do funcionário:"/>
                        <Input customClass="inputCadastro"
                        name="email"
                        placeholder="Digite a senha do funcionário:"/>
                    </div>
                    <div className={styles.buttom}>
                        <SubmitButtom text="Cadastrar Funcionário"/>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Cadastro;