# Documento Lista de User Stories

Documento construído a partido do **Modelo BSI - Doc 004 - Lista de User Stories** que pode ser encontrado no
link: https://docs.google.com/document/d/1Ns2J9KTpLgNOpCZjXJXw_RSCSijTJhUx4zgFhYecEJg/edit?usp=sharing

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento 001 - Documento de Visão](doc-visao.md). Este documento também pode ser adaptado para descrever Casos de Uso. Modelo de documento baseado nas características do processo easYProcess (YP).

## Histórico de revisões

| Data       | Versão  | Descrição                          | Autor                          |
| :--------- | :-----: | :--------------------------------: | :----------------------------- |
| 28/04/2023 | 0.0.1   | Template e descrição do documento  | Bruno Costa |
| 28/04/2023 | 0.0.2   | Detalhamento do User Story US00    | Bruno Costa |


### User Story US00 - Realizar Login

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve validar os dados, previamente cadastrados, informados no campo de login para liberar o acesso do usuário. Se autorizado após a validação, deve liberar o usuário para realizar o acesso no sistema. Ele poderá recuperar o acesso na tela de login caso tenha esquecido algum dado. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Realizar Login |
| RF02          | Recuperar acesso |
| RF0X?          | X? |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 10 h                                 | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     | 8 PF                                | 
| **Analista**              | Bruno Costa (responsável por especificar/detalhar o US). | 
| **Desenvolvedor**         | David (responsável por implementar e realizar testes de unidade e testes de integração).                                  | 
| **Revisor**               | Maria                               | 
| **Testador**              | Bruno Costa (responsável por realizar testes de aceitação e fazer relatórios). | 


| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.01** | O usuário informa, na tela de Login, todos os dados para acessar o sistema corretamente, ao clicar em 'Entrar' ele é redirecionado para a Home da page. |
| **TA01.02** | O usuário informa, na tela de Login, todos ou algum dos dados para acessar o sistema incorretamente, ao clicar em 'Entrar' ele receberá uma mensagem informando dados incorretos.  Mensagem: Credenciais(Usuário/senha) inválidas.
|
| **TA01.03** | O usuário informa, na tela de Login, todos dados para acessar o sistema corretamente, ao clicar em 'Entrar' ele receberá uma mensagem informando dados que não foi encontrado nenhum usuário.  Mensagem: Usuário não encontrado. |


### User Story US01 - Recuperar acesso

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve possibilitar o usuário solicitar o resgate dos seus dados de acesso perdidos. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Realizar Login |
| RF02          | Recuperar acesso |
| RF0X?          | X? |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 10 h                                 | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     | 8 PF                                | 
| **Analista**              | Bruno Costa (responsável por especificar/detalhar o US). | 
| **Desenvolvedor**         | Zé                                  | 
| **Revisor**               | Maria                               | 
| **Testador**              | Xuxa                                | 


| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.01** | O usuário informa, na tela de Login, todos os dados para acessar o sistema, ao clicar em 'Entrar' ele é informado de dados errados. Deve aparecer uma mensagem de recuperar acesso. Mensagem: Deseja recuperar o acesso?. |
| **TA01.02** | O usuário informa, na tela de recuperar acesso, informa o email de recuperação para redefinir sua senha. A operação é bem sucedida e exibe uma mensagem.  Mensagem: Dados alterados com sucesso.
|