# Documento de Visão

Documento construído a partido do **Modelo BSI - Doc 001 - Documento de Visão** que pode ser encontrado no
link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing

## Equipe e Definição de Papéis

Membro     |     Papel   |   E-mail   |
---------  | ----------- | ---------- |
Bruno Porfírio | Gerente, Desenvolvedor  | bruno.costa.079@.ufrn.edu.br
David Emanoel  | Desenvolvedor| david.emanoel.706@ufrn.edu.br
Marcelo Victor | Desenvolvedor, Analista | marcelo.victor.100@ufrn.edu.br
Renan Vale     | Analista, Testador | renan.vale.072@ufrn.edu.br

### Matriz de Competências

Membro     |     Competências   |
---------  | ----------- |
Bruno Porfírio | Desenvolvedor Web-Apps, sites, python, ReactJs | 
David Emanoel  | Desenvolvedor Back-end, API REST (django), ReactJs;| 
Marcelo Victor | Desenvolvedor Front-end, UX/UI | 
Renan Vale     | Product Manager, Dev. python, Dev.  C. |

## Perfis dos Usuários

O sistema poderá ser utilizado por diversos usuários. Temos os seguintes perfis/atores:

Perfil                                 | Descrição   |
---------                              | ----------- |
Administrador | Esse tipo de usuário terá acesso à funções gerenciais no sistema, podendo cadastrar e gerenciar outros usuários integrados ao seu negócio, acompanhar histórico de pontos dos seus integrantes e gerar relatórios.
Funcionários | Esse tipo de usuário terá apenas acesso ao sistema para a realização de tarefas básicas como: Alterar dados pessoais e de acesso, marcar ponto e acompanhar histórico de pontos. Será utilizado por trabalhadores/funcionários de uma determinada organização. Este usuário só poderá utilizar o sistema caso algum superior (usuário Adm) o tenha cadastrado previamente.


## Lista de Requisitos Funcionais

Requisito                                 | Descrição   | Ator |
---------                                 | ----------- | ---------- |
RF01 - Realizar Login | Usuários poderão realizar login na plataforma utilizando usuário e senha já cadastrados previamente. | Todos os usuários cadastrados. |
RF02 - Recuperar Acesso | Na tela de login haverá uma opção de recuperar dados, o usuário informa seu e-mail e recebe uma notificação com um link para inserir suas novas credenciais. | Todos os usuários cadastrados. |
RF03 - Cadastrar Usuários | Informar dados, fazer confirmação do e-mail e depois criar novo registro de usuário no banco de dados. | Administrador |
RF04 - Visualizar Usuários | Requisição ao banco de dados retornando todos os usuários ativos e listando-os. | Administrador |
RF05 - Inativar Usuários | Inativar usuário e descrever o motivo para tal. | Administrador |
RF06 - Alterar Dados | Por exemplo, mudança de e-mail, o novo e-mail é enviado ao sistema e a mudança é feita no banco de dados. | Funcionário |
RF07 - Marcar ponto | Usuários poderão contabilizar a jornada de trabalho. | Funcionário |
RF08 - Justificar marcação de ponto | Usuários poderão solicitar, durante a marcação do ponto, a justificativa de: Ausência total, Ausência parcial, Ausência por motivos naturais, informando uma breve descrição. O administrador poderá aprovar essa solicitação, a fim de melhor controle. | Funcionário |
RF09 -  Acompanhar Histórico | O usuário logado no sistema poderá solicitar o histórico dos seus pontos que serão listados e podem ser filtrados por data. | Funcionário |
RF10 -  Gerar Relatório | Um relatório completo com detalhes de cada ponto marcado ao longo do período definido. | Administrador |

### Modelo Conceitual

Abaixo apresentamos o modelo conceitual usando o **YUML**.

Falta adicionar!!!

#### Descrição das Entidades

## Lista de Requisitos Não-Funcionais

Requisito                                 | Descrição   |
---------                                 | ----------- |
RNF01 - Deve ser acessível via navegador | Deve abrir perfeitamento no Browser. |
RNF02 - Deve rodar em Windows, Linux e MacOS. | O sistema deve executar qualquer navegador destes sistemas operacionais |
RNF03 - Deve ser feito o log de ações dos usuários. | Deve manter um log de todos os acessos e das funções executadas pelo usuário |

## Riscos

Tabela com o mapeamento dos riscos do projeto, as possíveis soluções e os responsáveis.

Data | Risco | Prioridade | Responsável | Status | Providência/Solução |
------ | ------ | ------ | ------ | ------ | ------ |
01/12/2022 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo | Alta | Todos | Vigente | Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta |
01/12/2022 | Ausência por qualquer motivo do cliente | Média | Gerente | Vigente | Planejar o cronograma tendo em base a agenda do cliente |
01/12/2022 | Divisão de tarefas mal sucedida | Baixa | Gerente | Vigente | Acompanhar de perto o desenvolvimento de cada membro da equipe |
01/12/2022 | Probabilidade de queda do sistema | Média | Gerente | Resolvido | Reiniciar o sistema, contatar a equipe para verificar a origem do problema e corrigi-lo. |

### Referências
Características e definição
[Link](https://www.pontotel.com.br/sistema-de-ponto/)
