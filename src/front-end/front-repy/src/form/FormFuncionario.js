import styles from './styles/FormFuncionario.module.css';
import Input from '../form/Input';
import SubmitButtom from '../form/SubmitButton';
import {useState} from 'react';

function FormFuncionario({btnText}) {
    const [personalData, setPersonalData] = useState({
        nome: '',
        cargo: '',
        escala: '',
        turno: ''
    });

    const [acessData, setAcessData] = useState({
        email: '',
        password: ''
    });

    console.log(personalData);
    console.log(acessData);

    function handleChange(e) {
        const {name, value} = e.target;
        setPersonalData({...personalData, [name]: value})
    }

    function handleAcessChange(e) {
        const {name, value} = e.target;
        setAcessData({...acessData, [name]: value})
    }

    const submit = (e) => {
        e.preventDefault();
        fetch("api/cadastro", {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                dadosPessoais : personalData,
                dadosAcesso : acessData
            })
        }).then((response) => response.json())
            .then(data => {
                if(data.sucess) {
                    window.alert("Usuario cadastrado")
                }
            })
            .catch(err => console.log(err))
    }

    
    return (
        <form className={styles.formCadastro} onSubmit={submit}>
            <div className={styles.dadosPessoais}>
                <p className={styles.userImage}></p>
                <div className={styles.inputsDadosPessoais}>

                    <Input
                    customClass='inputCadastro'
                    type="text"
                    text="Nome:"
                    name="nome"
                    placeholder="Nome do funcionário:"
                    handleOnChange={handleChange}
                    value={personalData.nome}
                    />

                    <Input
                    customClass='inputCadastro'
                    type="text"
                    text="Cargo:"
                    name="cargo"
                    placeholder="Informe o cargo:"
                    handleOnChange={handleChange}
                    value={personalData.cargo}/>

                    <Input
                    customClass='inputCadastro'
                    type="text"
                    text="Escala"
                    name="escala"
                    placeholder="Informe a escala:"
                    handleOnChange={handleChange}
                    value={personalData.escala}/>

                    <Input
                    customClass='inputCadastro'
                    type="text"
                    text="Turno:"
                    name="turno"
                    placeholder="Informe o turno:"
                    handleOnChange={handleChange}
                    value={personalData.turno}/>
                </div>
            </div>
            <div>
                <Input customClass="inputCadastro"
                type="text"
                text="Email:"
                name="email"
                placeholder="Digite o email do funcionário:"
                handleOnChange={handleAcessChange}
                value={acessData.email}/>

                <Input customClass="inputCadastro"
                type="password"
                text="Senha:"
                name="password"
                placeholder="Digite a senha do funcionário:"
                handleOnChange={handleAcessChange}
                value={acessData.password}/>
            </div>
            <div className={styles.buttom}>
                <SubmitButtom text={btnText}/>
            </div>
        </form>
    );
}

export default FormFuncionario;