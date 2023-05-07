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
    Ponto }|--|| Turno : pertence
    Cargo ||--|{ Cargo-turno: possui
    Turno ||--|{ Cargo-turno: possui

    Funcionario {
        int cod
        string cpf
        string nome
        string sexo
        string email
        string senha
        date data_nasc
        int cod_gerente
        int cod_depto 
        int cod_cargo     
    }
    Departamento {
        int cod
        string sigla
        string nome
        date data_criacao
        int cod_gerente
    }
    Ponto {
        int codigo
        date data_marcacao
        string descricao
        int cod_func
        int cod_turno
    }
    Cargo {
        int cod
        string nome
        float salario
    }
    Turno {
        int cod
        string sigla
        string hora_inicio
        string hora_fim
    }
    Cargo_turno {
        int cod_cargo
        int cod_turno
    }
```

### Contagem Indicativa

| Função de Dado   | Entidades Relacionadas | Tamanho em PF |
| ---------------  | ---------------------- | :-----------: |
| ALI Funcionário  | Usuario e Grupo        | 35 PF         |
| ALI Departamento | Projeto                | 35 PF         |
| ALI Cargo        | Laboratorio            | 35 PF         |
| ALI Turno        | Endereço               | 35 PF         |
| AIE Cargo_turno  | Endereço               | 15 PF         |
| **Total**        | **Ci**                 | **155 PF**    |

### Contagem Detalhada (Cd)

|     Descrição      |   Tipo   |   RLR   |   DER   |   Complexidade   |   Tamanho em PF   |
| ------------------ | -------- | ------- | ------- | ---------------- | :---------------: |
|  ALI Funcionário(+ Departamento)   |   ALI    |    2    |    (10+5)15  |       Baixa      | 7 PF              |
|  ALI Departamento  |   ALI    |         |         |                  |  PF               |
|  ALI -             |   -      |         |         |                  |  PF               |
|  AIE -             |   -      |         |         |                  |  PF               |
|  **Descrição**     | **Tipo** | **ALR** | **DER** | **Complexidade** | **Tamanho em PF** |
|  Inserir Funcionário     |    EE    |    1    |    2    |      Baixa       | 3 PF              |



