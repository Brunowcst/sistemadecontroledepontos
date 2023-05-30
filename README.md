# REPy (Registro Eletrônico de Pontos y)

O REPy é um Sistema de Registro Eletrônico de Pontos, baseado nos sistemas REP existentes. Nesse projeto, a principal motivação é a construção de uma aplicação para contabilizar a jornada de trabalho dos funcionários de uma organização, além de oferecer funcionalidades administrativas para a organização.

## Tecnologias

* Front-end: ReactJs;
    [ReactJs](https://legacy.reactjs.org/) é uma biblioteca de código aberto para construir interfaces de usuário (UI) em aplicações web. O React permite a criação de componentes reutilizáveis que podem ser renderizados de forma eficiente, além de fornecer um modelo de programação declarativo para o desenvolvimento de interfaces de usuário.

    [Link para tutorial](https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO)

* Back-end: Django Rest;
    [Django REST](https://www.django-rest-framework.org/) é um Framework utilizado para a construção de [APIs](https://aws.amazon.com/pt/what-is/api/) e para manipulação do banco de dados;

    [Link para tutorial](https://www.youtube.com/playlist?list=PLsTx8TSx2fHY01FnuxBdwiBiOdZdPGik7)

    ```console
    docker run --rm -e SONAR_HOST_URL="http://labens.dct.ufrn.br/sonarqube" -e SONAR_LOGIN="TOKEN" -v "DIR_PROJETO/sistemadecontroledepontos/src/back_end_REPy:/usr/src" sonarsource/sonar-scanner-cli
    ```

## Remover diretório client

```console
git filter-branch --force --index-filter 'git rm -r --cached --ignore-unmatch src/back_end_REPy/client' --prune-empty --tag-name-filter cat -- --all
```

```console
git push origin --force --all
```

Também apaguei o ditetório via github.

Apaguei das branchs: **main**, **feat/sonar** e **back_crud**.