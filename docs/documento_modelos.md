# Documento de Modelos
Neste documento temos o modelo Conceitual (UML) de dados e de Dados (Entidade-relacionamento). Temos também a descrição das entidades e o dicionário de dados.

Para a modelagem pode se usar a ferramenta Astah UML ou o BrModelo. Além dessas, a ferramenta **Mermaid** é usada para a geração de diagramas diretamente no arquivo MarkDown (.md) [ver mais.](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/).


## Modelos Conceitual

### Diagrama de Classes usando o Mermaid
Para criar esse diagrama, utilizamos a ferramenta [LucidChart](https://www.lucidchart.com/blog/pt) e importamos o projet oem formato de imagem PNG.

![Figura 1: Diagrama de Classe REPy](images/REPy_Class_Diagram_UML.png)

#### Tabela de Descrição

Essa tabela visa descrever de forma breve e objetiva cada entidade do sistema.

|Entidade       | Descrição                                            |
|---------------|------------------------------------------------------|
|Organização | Entidade que representa a organização/empresa. Apresenta dados relacionados à empresa bem como relacionado ao dono. Pode gerenciar outros funcionarios e departamentos.|
|Gestor | Entidade do tipo 'funcionário' com permissão administrativa, ou seja, pode gerenciar outros funcionários.|
|Funcionario | Entidade do tipo não-administrador, ou eja, não gerencia outros usuários. Essa categoria apenas realiza ações básicas.|
|Departamento | Entidade que representa os departamentos de uma organização. Usuários da categoria: Organização e Gestor controlam essa entidade.|
|Login | Entidade responsável pela realização e autenticação de informações relacionadas ao login na plataforma.|
|Ponto | entidade que realiza ações básicas de marcação de pontos.
|Gerenciar | Entidade Abstrata que intercala as funções gerais de gerenciamento (CRUD) dos usuários do sistema.|

### Diagrama de Dados (Entidade-Relacionamento)

Para criar esse modelo, usamos a ferramenta [Mermaid](https://mermaid.js.org/) seguindo o tutorial [deste site](https://mermaid.js.org/syntax/entityRelationshipDiagram.html)

```mermaid
erDiagram
    Organizacao ||--|{ Gestor_RH : gerecia
    Gestor_RH ||--|{ Departamento : gerencia
    Gestor_RH ||--|{ Funcionario : gerencia
    Departamento ||--|{ Funcionario : trabalha
    Funcionario ||--|{ Ponto: marca

    Organizacao {
        string nome
        String cnpj
        string cpf_dono
        string proprietario
        data data_criacao
    }
    Funcionario {
        string nome
        string cpf
        String sexo
        date data_nasc
        int codigo
        bool isAdmin
        string turno
        float salario
        int codigo_depto
        int codigo_ponto 
        int codigo_login      
    }
    Departamento {
        int codigo
        string nome
        date data_criacao
    }
    Ponto {
        int codigo
        bool status
        date data_marcacao
    }
```

### Dicionário de Dados

#### Organização
|Tabela     | Organização                                               |
|-----------|-----------------------------------------------------------|                        
|Descrição  | Armazena as informações referentes à organização.         |

| nome      | Descrição     | Tipo de dado  | Tamanho | Restrições de domínio |
|-----------|---------------|---------------|---------|---------------|
|  nome     | Nome da org.  | VARCHAR       |  50 | Not Null   |
|  cnpj     | CNPJ da org.  | VARCHAR       |  14 |     PK     |
|  cpf_dono | CPF do dono   | VARCHAR       |  11 |   Not Null |
|proprietario| Nome do proprietario| VARCHAR| 100 | Not Null   |
| data_criacao| Data de criacao| DATE       | --- | ---        |

#### Funcionario

|Tabela     | Funcionario                                               |
|-----------|-----------------------------------------------------------|
|Descrição  | Armazena informações de usuários da categoria Funcionario/Gestor.|

| nome      | Descrição     | Tipo de dado  | Tamanho | Restrições de domínio |
|-----------|---------------|---------------|---------|---------------|
| nome      |Nome do usuario| VARCHAR       | 50      | Not Null      |
| cpf       | cpf do usuario| VARCHAR       | 11      | PK            |
| sexo      | Sexo do usuario | VARCHAR     | 1       | ---           |
| data_Nasc | Data de nascimento| DATE      | ---     | Not Null      |
| codigo    | Gerado pelo SGBD| SERIA       | ---     | UNIQUE NOT Null|
| isAdmin   | Condição Adm. | Boolean       | ---     | ---           |
|codigo_depto| Identific. Depto| int        | ---     | FK            |
| codigo_ponto| Ident. ponto    |    int    | ---     | FK            |
| codigo_login| Ident. login    |    int    | ---     | FK            |
| turno      | Turno de Trabalho| VARCHAR   | ---     | Not Null      |
| salario    | Salario do usuario| float    | ---     | Not Null      |

#### Departamento

|Tabela     |  Departamento                                            |
|-----------|----------------------------------------------------------|
|Descrição  | Armazena informações de departamentos.                   |

| nome      | Descrição     | Tipo de dado  | Tamanho | Restrições de domínio |
|-----------|---------------|---------------|---------|---------------|
| nome      |Nome do Departamento| VARCHAR  | 50      | Not Null      |
| codigo    | Gerado pelo SGBD |SERIAL    | ---     | PK            |
| data_criacao| Data criação | DATE     |---     | Not Null           |


#### Login

|Tabela     |  Login                                                  |
|-----------|---------------------------------------------------------|
|Descrição  | Armazena informações de Autenticação dos usuários.      |

| nome      | Descrição     | Tipo de dado  | Tamanho | Restrições de domínio |
|-----------|---------------|---------------|---------|---------------|
| email     |email do usuario PK| VARCHAR  | 50    | Not Null     |
| senha     | senha do usuario |VARCHAR  | 20    | Not Null     |
| codigo    |Codigo PK gerado pelo SGBD|   SERIAL  | -- | Not Null UNIQUE|


#### Ponto

|Tabela     |  Ponto                                                  |
|-----------|---------------------------------------------------------|
|Descrição  | Armazena informações relacionadas aos pontos marcados pelso usuários.|

| nome      | Descrição     | Tipo de dado  | Tamanho | Restrições de domínio |
|-----------|---------------|---------------|---------|---------------|
| data_Marcacao | data registrada| DATE     | ---     | Not Null      |
| status    |  status de marcacao|Boolean   |---      | Not Null      |
| codigo    | Gerado pelo SGBD | SERIAL     | ---     | PK            |
