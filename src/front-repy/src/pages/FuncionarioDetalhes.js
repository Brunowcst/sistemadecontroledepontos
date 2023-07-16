import React from 'react';
import styles from './styles/FuncionarioDetalhes.module.css'
import iconPerfil from '../material/icons/perfil.svg'

function FuncionarioDetalhes(props) {
    return (
        <div className={styles.grid}>
            <section className={styles.section}>
                <div className={styles.userHeader}>
                    <img src={iconPerfil} alt='Imagem default perfil' height={100}/>
                    <p>Nome</p>
                </div>

                <div className={styles.userDatas}>
                    <div className={styles.column}>
                        <div>
                            <label>Telefone</label>
                            <p>99 99999 9999</p>
                        </div>

                        <div>
                            <label>Email</label>
                            <p>teste@gmail.com</p>
                        </div>

                        <div>
                            <label>CPF</label>
                            <p>123456789-00</p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div>
                            <label>Cargo</label>
                            <p>Desenvolvedor Full-stack</p>
                        </div>

                        <div>
                            <label>Escala</label>
                            <p>Escala: M/T- 8:00 -18:00h</p>
                        </div>

                        <div>
                            <label>Turno</label>
                            <p>Geral</p>
                        </div>
                    </div>
                </div>

                <div className={styles.containerButtons}>
                    <button className={`${styles.button} ${styles.buttonConfirmar}`}>Confirmar</button>
                    <button className={`${styles.button} ${styles.buttonRelatorio}`}>Gerar Relatório</button>
                    <button className={`${styles.button} ${styles.buttonInativar}`}>Inativar</button>
                </div>
            </section>
        </div>
    );
}

export default FuncionarioDetalhes;