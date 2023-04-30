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
| 29/04/2023 | 0.0.3   | Detalhamento do User Story US01    | Bruno Costa |
| 29/04/2023 | 0.0.4   | Detalhamento do User Story US02    | Bruno Costa |
| 30/04/2023 | 0.0.5   | Detalhamento do User Story US04    | Bruno Costa |


### User Story US00 - Realizar Login

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve validar os dados, previamente cadastrados, informados no campo de login para liberar o acesso do usuário. Se autorizado após a validação, deve liberar o usuário para realizar o acesso no sistema. Ele poderá recuperar o acesso na tela de login caso tenha esquecido algum dado. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Realizar Login |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 10 h                                 | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     | 8 PF                                | 
| **Analista**              | Bruno Costa (responsável por especificar/detalhar o US). | 
| **Desenvolvedor**         | David (responsável por implementar e realizar testes de unidade e testes de integração).                                  | 
| **Revisor**               | -                               | 
| **Testador**              | Bruno Costa (responsável por realizar testes de aceitação e fazer relatórios). | 


| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA00.01** | O usuário informa, na tela de Login, todos os dados para acessar o sistema corretamente, ao clicar em 'Entrar' ele é redirecionado para a Home da page. |
| **TA00.02** | O usuário informa, na tela de Login, todos ou algum dos dados para acessar o sistema incorretamente, ao clicar em 'Entrar' ele receberá uma mensagem informando dados incorretos.  Mensagem: Credenciais(Usuário/senha) inválidas.
| **TA00.03** | O usuário informa, na tela de Login, todos dados para acessar o sistema corretamente, ao clicar em 'Entrar' ele receberá uma mensagem informando dados que não foi encontrado nenhum usuário.  Mensagem: Usuário não encontrado. |


### User Story US01 - Recuperar acesso

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve possibilitar o usuário solicitar o resgate dos seus dados de acesso perdidos. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Realizar Login |
| RF02          | Recuperar acesso |
| RF06          | Alterar dados |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 48 h                                 | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     | 8 PF                                | 
| **Analista**              | Bruno Costa (responsável por especificar/detalhar o US). | 
| **Desenvolvedor**         | -                                  | 
| **Revisor**               | -                               | 
| **Testador**              | -                                | 


| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.01** | O usuário informa, na tela de Login, todos os dados para acessar o sistema, ao clicar em 'Entrar' ele é informado de dados errados. Deve aparecer uma mensagem de recuperar acesso, se ele clicar na mensagem deve ser redirecionado para uma tela de recuperar dados. Mensagem: Deseja recuperar o acesso?. |
| **TA01.02** | O usuário informa, na tela de recuperar acesso, o email de recuperação para redefinir sua senha. A operação é bem sucedida e será exibida a seguinte mensagem: Dados alterados com sucesso. |
| **TA01.03** | O usuário informa, na tela de redefinir dados, a nova senha para ser redefinida. A operação é bem sucedida se as senhas inseridas nos campos 'Nova senha' e 'Confirmar senha' sejam iguais, será exibida a seguinte mensagem: Dados alterados com sucesso. |

### User Story US02 - Manter usuário

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve realizar CRUD - Cadastro, atualização, visualização e exclusão de usuários. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF03          | Cadastrar Usuários  |
| RF04          | Visualizar Usuários |
| RF05          | Inativar usuários   | 
| RF06          | Alterar Dados do usuário |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 24 h                                 | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     | 8 PF                                | 
| **Analista**              | Bruno Costa (responsável por especificar/detalhar o US). | 
| **Desenvolvedor**         | -                                 | 
| **Revisor**               | -                               | 
| **Testador**              | -                               | 


| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA02.01** | O usuário informa, na tela de Cadastro, os seguintes dados: nome, cpf, data de nascimento, sexo, cargo, código do departamento, turno, e-mail e senha. Se todos os dados forem informados corretamente, será exibida a seguinte mensagem: Usuário cadastrado com sucesso.|
| **TA02.02** | O usuário informa, na tela de Cadastro, os seguintes dados: nome, cpf, data de nascimento, sexo, cargo, código do departamento, turno, e-mail e senha. Se algum dado for informado incorretamente, será exibida a seguinte mensagem: Dados informados incorretos.|
| **TA02.03** | O usuário solicita, na tela de Visualizar usuários, a exibição de usuários ativos. Se houver algum usuário cadastrado eles serão exibidos.|
| **TA02.04** | O usuário solicita, na tela de Visualizar usuários, a exibição de usuários ativos. Se não houver nenhum usuário será exibida a seguinte mensagem: Nenhum usuário cadastrado.|
| **TA02.05** | O superior informa, na tela de inativar usuário, o cpf do usuário que ele deseja inativar e suas próprias credencias para confirmar a operação. Se existir esse cpf e as credenciais do supervisor tiverem corretas a operação será bem sucedida e será exibida a seguinte mensagem: Usuário inativado.|
| **TA02.06** | O superior informa, na tela de inativar usuário, o cpf do usuário que ele deseja inativar e suas próprias credencias para confirmar a operação. Se não existir esse cpf cadastrado será exibida a seguinte mensagem: Não foi possivel encontrar este usuário.|
| **TA02.07** | O superior informa, na tela de inativar usuário, o cpf do usuário que ele deseja inativar e suas próprias credencias para confirmar a operação. Se existir esse cpf e as credenciais do supervisor tiverem incorretas a operação será mal sucedida e será exibida a seguinte mensagem: Corrija suas credenciais para confirmar a operação.|
| **TA02.08** | O usuário solicita, na tela de Alterar dados, quais dados ele quer que sejam modificados -nome, e-mail, sexo- e será enviada uma notificação com esta solicitação para seu supervisor.|

### User Story US04 - Marcar ponto

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve possibilitar o usuário marcar seu ponto de entrada na jornada de trabalho e na saída. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Realizar Login |
| RF15          | Marcar ponto |
| RF16          | Emitir comprovante |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 12 h                                 | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional**     | 8 PF                                | 
| **Analista**              | Bruno Costa (responsável por especificar/detalhar o US). | 
| **Desenvolvedor**         | -                                  | 
| **Revisor**               | -                               | 
| **Testador**              | -                                | 


| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.01** | O usuário na tela de Marcar ponto, após está logado, deverá marcar seu ponto no inicio de sua jornada de trabalho e no fim da mesma. Será exibida a seguinte mensagem após cada marcação: ponto registrado.|
| **TA01.02** | O usuário na tela de Marcar ponto, após está logado, deverá marcar seu ponto no inicio de sua jornada de trabalho. Se ele marcou antes do horário fixo de entrada, será exibida a seguinte mensagem: ponto registrado com antecedência. |
| **TA01.03** | O usuário na tela de Marcar ponto, após está logado, deverá marcar seu ponto no inicio de sua jornada de trabalho se ele marcou após o horário fixo de entrada, será exibida a seguinte mensagem: ponto registrado com atraso. |
| **TA01.04** | O usuário na tela de Marcar ponto, após está logado, deverá marcar seu ponto no final de sua jornada de trabalho se ele marcou após o horário fixo de saída, será exibida a seguinte mensagem: Ponto marcado após o horário de saída. |
| **TA01.05** | O usuário na tela de Marcar ponto, após está logado, deverá marcar seu ponto no final de sua jornada de trabalho. Se ele marcou antes do horário fixo de saída, será exibida a seguinte mensagem: Ponto marcado antes do horário de saída. |


