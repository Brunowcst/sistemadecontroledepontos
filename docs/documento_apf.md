# Contagem de Pontos de Função

A contagem em **Pontos de Função (PF)** permite a determinação do **Tamanho Funcional** do projeto de software.
A análise de ponto de função (APF) é um processo para a identificação e contagem das funcionalidades baseadas nos conceitos 
de **Funções de Dados** e **Funções de Transação**. 

Os conceitos relacionados com dados são os **Arquivos de Lógica Interna (ALI)** e os **Arquivos de Interface Externa (AIE)**, 
e os conceitos relacionados com operações externas a fronteira do sistema são: 
**Entrada Externa (EE)**, **Consulta Externa (CE)** e **Saída Externa (SE)**.

Existem várias práticas de contagem, cada uma com suas especificidades.

## Contagem Indicativa

Na contagem indicativa (Ci) só é necessário conhecer e analisar as **Funções de Dados**. Desta forma, 
os **ALI**s (Arquivos Lógicos Internos) com o valor de *35 PF* cada e os **AIE**s (Arquivos de Interface Externa) com o valor de *15 PF* cada.

### Modelo de Dados 

```mermaid
erDiagram
    Funcionario }|--|| Departamento : trabalha
    Funcionario }|--|| Cargo : possui
    Funcionario ||--|{ Ponto: marca
    Funcionario ||--|{ Funcionario_horario: tem
    Horario ||--|{ Funcionario_horario: tem
    Funcionario ||--|{ Funcionario_turno: tem
    Funcionario ||--|| Usuario: possui
    Turno ||--|| Horario: tem
    Turno ||--|{ Funcionario_turno: tem
    Ponto }|--|| Horario : pertence
    
    Funcionario {
        int cod
        string nome
        string cpf
        string sexo
        date data_nasc
        int cod_cargo     
        int cod_depto 
        int cod_func
        int cod_gerente
    }
    Departamento {
        int cod
        string nome
        string sigla
        date data_criacao
        int cod_gerente
    }
    Ponto {
        int codigo
        string descricao
        date data_marcacao
        int cod_func
        int cod_turno
    }
    Cargo {
        int cod
        string nome
        float salario
        int carga_horaria
    }
    Turno {
        int cod
        string sigla
        string hora_inicio
        string hora_fim
    }
    Funcionario_turno {
        int cod_funcionario
        int cod_turno
    }
    Horario{
        int cod
        string dia
        string hora_entrada
        string hora_saida
    }
    Funcionario_horario {
        int cod_funcionario
        int cod_horario
    }
    Usuario{
        int id
        string username
        string telefone
        bool is_staff
        bool is_active
    }
```

### Contagem Indicativa

| Função de Dado   | Entidades Relacionadas | Tamanho em PF |
| ---------------  | ---------------------- | :-----------: |
| ALI Funcionário  | Usuario e Grupo        | 35 PF         |
| ALI Departamento | Projeto                | 35 PF         |
| ALI Cargo        | Cargo                  | 35 PF         |
| ALI Turno        | Turno                  | 35 PF         |
| ALI Horário      | Horário                | 35 PF         |
| ALI Acesso       | Acesso                 | 35 PF         |
| **Total**        | **Ci**                 | **210 PF**    |

### Contagem Detalhada (Cd)

|     Descrição      |   Tipo   |   RLR   |   DER   |   Complexidade   |   Tamanho em PF   |
| ------------------ | -------- | ------- | ------- | ---------------- | :---------------: |
|  ALI Funcionário   |   ALI    |    1    |    9    |       Baixa      | 7 PF              |
|  ALI Departamento  |   ALI    |    1    |    5    |       Baixa      | 7 PF              |
|  ALI Acesso        |   ALI    |    1    |    5    |       Baixa      | 7 PF              |
|  **Descrição**     | **Tipo** | **ALR** | **DER** | **Complexidade** | **Tamanho em PF** |
|  Inserir Funcionário     |    EE    |    1    |    9    |      Baixa       | 3 PF              |
|  Editar Funcionário      |    EE    |    1    |    7    |      Baixa       | 3 PF              |
|  Visualizar Funcionário  |    CE    |    1    |    9    |      Baixa       | 3 PF              |
|  Excluir Funcionário     |    EE    |    1    |    2    |      Baixa       | 3 PF              |
|  Login                   |    EE    |    1    |    2    |      Baixa       | 3 PF              |



