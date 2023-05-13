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
| 30/04/2023 | 0.0.6   | Detalhamento do User Story: US03   | David Emanoel |
| 30/04/2023 | 0.0.7   | Detalhamento do User Story: US05   | David Emanoel |
| 30/04/2023 | 0.0.8   | Detalhamento do User Story: US06   | David Emanoel |

### User Story US00 - Manter Funcionário

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve realizar CRUD - Cadastro, atualização, visualização e exclusão de Funcionários. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF03          | Cadastrar Funcionários  |
| RF04          | Visualizar Funcionários |
| RF05          | Inativar Funcionários   | 
| RF06          | Alterar Dados do Funcionário |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 24 h                                | 
| **Tempo Gasto (real):**   | --                                  | 
| **Tamanho Funcional**     | 7 PF                                | 
| **Analista**              | Bruno Costa                         | 
| **Desenvolvedor**         | David Emanoel                       | 
| **Revisor**               | Renan Dantas                        | 
| **Testador**              | Marcelo Victor                      | 


| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA02.01** | O Funcionário informa, na tela de Cadastro, os seguintes dados: nome, cpf, data de nascimento, sexo, cargo, código do departamento, turno, e-mail e senha. Se todos os dados forem informados corretamente, será exibida a seguinte mensagem: Funcionário cadastrado com sucesso.|
| **TA02.02** | O Funcionário informa, na tela de Cadastro, os seguintes dados: nome, cpf, data de nascimento, sexo, cargo, código do departamento, turno, e-mail e senha. Se algum dado for informado incorretamente, será exibida a seguinte mensagem: Dados informados incorretos.|
| **TA02.03** | O Funcionário solicita, na tela de Visualizar Funcionários, a exibição de Funcionários ativos. Se houver algum Funcionário cadastrado eles serão exibidos.|
| **TA02.04** | O Funcionário solicita, na tela de Visualizar Funcionários, a exibição de Funcionários ativos. Se não houver nenhum Funcionário será exibida a seguinte mensagem: Nenhum Funcionário cadastrado.|
| **TA02.05** | O superior informa, na tela de inativar Funcionário, o cpf do Funcionário que ele deseja inativar e suas próprias credencias para confirmar a operação. Se existir esse cpf e as credenciais do supervisor tiverem corretas a operação será bem sucedida e será exibida a seguinte mensagem: Funcionário inativado.|
| **TA02.06** | O superior informa, na tela de inativar Funcionário, o cpf do Funcionário que ele deseja inativar e suas próprias credencias para confirmar a operação. Se não existir esse cpf cadastrado será exibida a seguinte mensagem: Não foi possivel encontrar este Funcionário.|
| **TA02.07** | O superior informa, na tela de inativar Funcionário, o cpf do Funcionário que ele deseja inativar e suas próprias credencias para confirmar a operação. Se existir esse cpf e as credenciais do supervisor tiverem incorretas a operação será mal sucedida e será exibida a seguinte mensagem: Corrija suas credenciais para confirmar a operação.|
| **TA02.08** | O Funcionário solicita, na tela de Alterar dados, quais dados ele quer que sejam modificados -nome, e-mail, sexo- e será enviada uma notificação com esta solicitação para seu supervisor.|


### User Story US01 - Realizar Login

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve validar os dados, previamente cadastrados, informados no campo de login para liberar o acesso do Funcionário. Se autorizado após a validação, deve liberar o Funcionário para realizar o acesso no sistema. Ele poderá recuperar o acesso na tela de login caso tenha esquecido algum dado. |


| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF06          | Realizar Login  |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 24 h                                | 
| **Tempo Gasto (real):**   | --                                  | 
| **Tamanho Funcional**     | 7 PF                                | 
| **Analista**              | David Emanoel                       | 
| **Desenvolvedor**         | Bruno Costa                         | 
| **Revisor**               | Marcelo Victor                      | 
| **Testador**              | Renan Dantas                        | 


| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA00.01** | O Funcionário informa, na tela de Login, todos os dados para acessar o sistema corretamente, ao clicar em 'Entrar' ele é redirecionado para a Home da page. |
| **TA00.02** | O Funcionário informa, na tela de Login, todos ou algum dos dados para acessar o sistema incorretamente, ao clicar em 'Entrar' ele receberá uma mensagem informando dados incorretos.  Mensagem: Credenciais(Funcionário/senha) inválidas. |
| **TA00.03** | O Funcionário informa, na tela de Login, todos dados para acessar o sistema corretamente, ao clicar em 'Entrar' ele receberá uma mensagem informando dados que não foi encontrado nenhum Funcionário.  Mensagem: Funcionário não encontrado. |


### User Story US02 - Recuperar acesso

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve possibilitar o Funcionário solicitar o resgate dos seus dados de acesso perdidos. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Realizar Login |

|                           |                                      |
| ------------------------- | -------------------------------------| 
| **Prioridade**            | Essencial                            | 
| **Estimativa**            | 10 h                                 | 
| **Tempo Gasto (real):**   | --                                   | 
| **Tamanho Funcional**     | 15 PF                                | 
| **Analista**              | David Emanoel                        | 
| **Desenvolvedor**         | Bruno Costa                          | 
| **Revisor**               | Renan Dantas                         | 
| **Testador**              | Marcelo Victor                       | 


| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.01** | O Funcionário informa, na tela de Login, todos os dados para acessar o sistema, ao clicar em 'Entrar' ele é informado de dados errados. Deve aparecer uma mensagem de recuperar acesso, se ele clicar na mensagem deve ser redirecionado para uma tela de recuperar dados. Mensagem: Deseja recuperar o acesso?. |
| **TA01.02** | O Funcionário informa, na tela de recuperar acesso, o email de recuperação para redefinir sua senha. A operação é bem sucedida e será exibida a seguinte mensagem: Dados alterados com sucesso. |
| **TA01.03** | O Funcionário informa, na tela de redefinir dados, a nova senha para ser redefinida. A operação é bem sucedida se as senhas inseridas nos campos 'Nova senha' e 'Confirmar senha' sejam iguais, será exibida a seguinte mensagem: Dados alterados com sucesso. |


### User Story US03 - Manter Departamento.

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema possibilatá o cadastro de departamento e a vinculação de funcionários a ele. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF07          | Cadastrar Departamento                               |
| RF08          | Listar Departamento                                  |
| RF09          | Inativar Departamento                                |
| RF10          | Alterar dados do Departamento                        |



|                         |                                       |
| ------------------------|---------------------------------------| 
| **Prioridade**          | Essencial                             | 
| **Estimativa**          | 12 h                                  | 
| **Tempo Gasto (real):** | --                                    | 
| **Tamanho Funcional**   | x PF                                  | 
| **Analista**            | David Emanoel                         | 
| **Desenvolvedor**       | Bruno Costa                           | 
| **Revisor**             | Marcelo Victor                        | 
| **Testador**            | Renan Dantas                          | 


| Testes de Aceitação (TA) |                                        |
|--------------------------|----------------------------------------|
| **Código**               | **Descrição**                          |
| **TA04.01**              | O gestor irá cadastrar um departamento informando os seguintes dados: nome(Departamento.nome), data de criação(Departamento.data_criacao) e poderá vincular esse departamento a um gerente, informando apenas o código do gerente (Departamento.fk_cod_gerente). Caso todos os dados estejam corretos e não exista outro com o mesmo nome, o cadastro será realizado e será exibida a seguinte mensagem: "Departamento cadastrado com sucesso!".|
| **TA04.02**              | Durante o ato do cadastro, o departamento não será cadastrado se: nome(Departamento.nome) já existir um departamento com esse nome. |
| **TA04.03**              | O gestor poderá solicitar a listagem de todos os departamentos. Nessa listagem, poderá ser exibido todos os Funcionários vinculados ao departamento clicando no ícone de expandir (ver mais).|
| **TA04.04**              | O gestor poderá clicar no ícone 'editar', durante a listagem de departamentos. Após aberta a sessão de edição, os seguintes dados poderão ser editados: nome(Departamento.nome), data de criação(Departamento.data_criacao), código do gerente responsável (Departamento.fk_cod_gerente). Além disso, o departamento poderá ser desativado.|
| **TA04.05**              | Durante o ato de edição, os dados não serão alterados se: o atributo nome(Departamento.nome) já existir em outro departamento; código do gerente responsável (Departamento.fk_cod_depto) for nulo 'NULL'. |
| **TA04.06**              | O gestor poderá desativar um departamento, na sessão de editar departamento. Ao clicar no ícone de desativação, será exibido um modal de confirmação, solicitando a credencial de acesso (senha) do gestor. Em caso da senha ser passada com sucesso, o departamento será excluído e todos os Funcionários com o atributo (Funcionario.fk_cod_depto) terão esse atributo alterado para 'NULL'. Após a exclusão, será exibido a seguinte mensagem: "Departamento inativado com sucesso".|
| **TA04.07**              | Durante a inativação de um departamento, a ação falhará se: a credencial(senha) informada pelo gestor for incorreta e a seguinte mensagem será exibida: "A senha informada está incorreta".|


### User Story US04 - Marcar ponto.

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve possibilitar o Funcionário marcar seu ponto de entrada na jornada de trabalho e na saída. |

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
| ----------------|---------------------------|
| **Código**      | **Descrição**             |
| **TA04.01**     | O Funcionário na tela de Marcar ponto, após está logado, deverá marcar seu ponto no inicio de sua jornada de trabalho e no fim da mesma. Será exibida a seguinte mensagem após cada marcação: ponto registrado.|
| **TA04.02**     | O Funcionário na tela de Marcar ponto, após está logado, deverá marcar seu ponto no inicio de sua jornada de trabalho. Se ele marcou antes do horário fixo de entrada, será exibida a seguinte mensagem: ponto registrado com antecedência. |
| **TA04.03**     | O Funcionário na tela de Marcar ponto, após está logado, deverá marcar seu ponto no inicio de sua jornada de trabalho se ele marcou após o horário fixo de entrada, será exibida a seguinte mensagem: ponto registrado com atraso. |
| **TA04.04**     | O Funcionário na tela de Marcar ponto, após está logado, deverá marcar seu ponto no final de sua jornada de trabalho se ele marcou após o horário fixo de saída, será exibida a seguinte mensagem: Ponto marcado após o horário de saída. |
| **TA04.05**     | O Funcionário na tela de Marcar ponto, após está logado, deverá marcar seu ponto no final de sua jornada de trabalho. Se ele marcou antes do horário fixo de saída, será exibida a seguinte mensagem: Ponto marcado antes do horário de saída. |


### User Story US05 - Gerenciar Ponto.

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema possibilatá o cadastro de departamento e a vinculação de funcionários a ele. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF14          | Correção de ponto                                    |
| RF16          | Emitir comprovante                                   |
| RF17          | Justificar ausência                                  |
| RF18          | Listagem de pontos                                   |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**          | Essencial                             | 
| **Estimativa**          | 72 h                                  | 
| **Tempo Gasto (real):** | --                                    | 
| **Tamanho Funcional**   | x PF                                  | 
| **Analista**            | David Emanoel                         | 
| **Desenvolvedor**       | Bruno Costa                           | 
| **Revisor**             | Marcelo Victor                        | 
| **Testador**            | Renan Dantas                          | 


| Testes de Aceitação (TA) |                                        |
|--------------------------|----------------------------------------|
| **Código**               | **Descrição**                          |
| **TA05.01**              | O gerente poderá listar todos os pontos marcados por um funcionário, nessa listagem, terá a opção de **corrigir a marcação** de ponto desse funcionário. A correção será a edição dos campos presentes no ponto: data(Ponto.horario), nesse cenário, poderá ser editado a hora da marcação do ponto; (Ponto.descricao) poderá ser editado a descricao da marcação de ponto. Após a edição, será exibida a seguinte mensagem: "Ponto de <(Funcionario.nome)> editado com sucesso!" |
| **TA05.02**              | Durante o ato de correção de ponto, não poderá ser informada uma data futura ou uma data inválidada (por exemplo: 30/30/ano_corrente). Podendo ser exibida a seguinte mensagem de erro: "Data informada não é válida".|
| **TA05.03**              | O Funcionário (gerente/funcionário) poderá emitir o comprovante de marcação de ponto de um ponto cadastrado.|
| **TA05.04**              | O Funcionário (gerente/funcionário) poderá justificar sua ausência editando alguns atributos do ponto não-marcado: (Ponto.descricao) Poderá ser editado como forma de comprovação da ausência. (Adicionar arquivo comprobatório).|
| **TA05.05**              | O Funcionário (gerente/funcionário) poderá listar os pontos marcados no sistema. Para isso, o Funcionário poderá ou não informar um período para busca.|
| **TA05.06**              | Durante a consulta dos pontos marcados, a consulta retornará erro se a data(Ponto.data) informada: é inválida (por exemplo: 31/02/0000) ou é superior à data de cadastro da conta do Funcionário. |


### User Story US06 - Acompanhar histórico.

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema possibilatá a listagem de todos os pontos de um funcionário. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF15          | Marcar Ponto                                    |
| RF18          | Listagem de pontos                              |


|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**          | Essencial                             | 
| **Estimativa**          | 4h                                    | 
| **Tempo Gasto (real):** | --                                    | 
| **Tamanho Funcional**   | x PF                                  | 
| **Analista**            | David Emanoel                         | 
| **Desenvolvedor**       | David Emanoel                         | 
| **Revisor**             | Bruno Costa                           | 
| **Testador**            | Renan Dantas e Marcelo Victor         | 


| Testes de Aceitação (TA) |                                        |
|--------------------------|----------------------------------------|
| **Código**               | **Descrição**                          |
| **TA06.01**              | O gerente poderá listar todos os pontos marcados por um funcionário. Para fazer a listagem, poderá ser informado obrigatoriamente um cpf de um Funcionário; e opcionalmente um período.|
| **TA06.02**              | Na listagem para acompanhar o histórico, será retornado erro se: o cpf informado não existe no banco de dados; O período informado é inválido; o período informado é superior à data de cadastro do Funcionário no sistema. |

