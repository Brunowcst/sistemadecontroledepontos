import styles from './styles/FormFuncionario.module.css';
import Input from './Input';
import SubmitButtom from './SubmitButton';
import {useState, useContext, useEffect} from 'react';
import { base } from '../api/base';
import AuthContext from '../context/AuthContext';
import {useNavigate} from 'react-router-dom'

function FormFuncionario({btnText}) {
    const navigate = useNavigate()
    const {bearer} = useContext(AuthContext);
    const [personalData, setPersonalData] = useState({
        nome: '',
        cod_cargo: 1,
        cod_horario: [],
        cod_turno: [],
        cpf: '',
        cod_depto:  1,
        cod_gerente: 2,
        sexo: 'M',
        data_nasc:  "",  
        cod_func: 1,
    });

    const [acessData, setAcessData] = useState({
        email: '',
        password: ''
    });

    const postFuncionario = async () => {
        try {
            let response = await fetch(`${base}/funcionario/`, {
              method: 'POST',
              headers: {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${bearer}`
              },
              body: JSON.stringify(personalData)
            });
            const data = await response.json();
            console.log( data);
            if(response.status === 201) {
                navigate('/funcionario')
                console.log("Funcionário cadastrado")
            } else {
                throw new Error('Error: requisição de dados.')
            }
        } catch (error) {
            console.log(error)
            throw error;
        }
    }   

    console.log(personalData);
    // console.log(acessData);

    function handleChange(e) {
        const { name, value } = e.target;
    
        if (['cod_horario', 'cod_turno'].includes(name)) {
            setPersonalData((prevData) => ({
                ...prevData,
                [name]: [parseInt(value, 10)],
            }));
        } else {
            setPersonalData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
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
                personalDatas : personalData,
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
                    name="cod_cargo"
                    placeholder="Informe o cargo:"
                    handleOnChange={handleChange}
                    value={personalData.cod_cargo}/>

                    <Input
                    customClass='inputCadastro'
                    type="text"
                    text="Escala"
                    name="cod_horario"
                    placeholder="Informe a escala:"
                    handleOnChange={handleChange}
                    value={personalData.cod_horario}/>

                    <Input
                    customClass='inputCadastro'
                    type="text"
                    text="Turno:"
                    name="cod_turno"
                    placeholder="Informe o turno:"
                    handleOnChange={handleChange}
                    value={personalData.cod_turno}/>
                </div>
            </div>
            <div>
                <Input customClass="inputCadastro"
                type="text"
                text="CPF:"
                name="cpf"
                placeholder="Digite o cpf do funcionário:"
                handleOnChange={handleChange}
                value={personalData.cpf}/>

                <Input customClass="inputCadastro"
                type="text"
                text="Código do Depto:"
                name="cod_depto"
                placeholder="Digite o depto do funcionário:"
                handleOnChange={handleChange}
                value={personalData.cod_depto}/>

                <Input customClass="inputCadastro"
                type="text"
                text="Data de nascimento:"
                name="data_nasc"
                placeholder="Data de nascimento(YYYY-MM-DD):"
                handleOnChange={handleChange}
                value={personalData.data_nasc}/>
            </div>
            <div onClick={postFuncionario} className={styles.buttom}>
                <SubmitButtom text={btnText}/>
            </div>
        </form>
    );
}

export default FormFuncionario;