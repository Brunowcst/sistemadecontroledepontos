# Documento de Modelos
Neste documento temos o modelo Conceitual (UML) de dados e de Dados (Entidade-relacionamento). Temos também a descrição das entidades e o dicionário de dados.

Para a modelagem pode se usar a ferramenta Astah UML ou o BrModelo. Além dessas, a ferramenta **Mermaid** é usada para a geração de diagramas diretamente no arquivo MarkDown (.md) [ver mais.](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/).


## Modelos Conceitual

### Diagrama de Classes usando o Mermaid
```mermaid
    classDiagram
        Usuario <|-- Funcionario
        Usuario <|-- GestorRH
        Usuario <|-- Organizacao
    
        
        Usuario : +String nome
        Usuario : +String email


        Usuario : +getNome()
        Usuario : +setNome()
        Usuario : +getEmail()
        Usuario : setEmail()

        class Organizacao{
            +String CNPJ
            +ArrayList GestorRH
            +swim()
            +quack()
        }

        class GestorRH{
            +bool is_wild
            +run()
        }

        class Funcionario{
            -int sizeInFeet
            -canEat()
        }
```

### Diagrama de Dados (Entidade-Relacionamento)

Para criar esse modelo, usamos a ferramenta [Mermaid](https://mermaid.js.org/) seguindo o tutorial [deste site](https://mermaid.js.org/syntax/entityRelationshipDiagram.html)


    ---
        title: Modelo ER
    ---

    erDiagram
        Organizacao ||--o{ Gestor_RH : places
        Gestor_RH ||--o{ Usuario : contains
        Usuario ||--o{ Ponto : contains
        Usuario ||--o{ BancoHoras : contains

    ---
    title: Order example
    ---
    erDiagram
        CUSTOMER ||--o{ ORDER : places
        ORDER ||--|{ LINE-ITEM : contains
        CUSTOMER }|..|{ DELIVERY-ADDRESS : uses


