## Anotações sobre a criação da API

Utilizei esse espaço para lembrar e reforçar depois alguns conceitos utilizados no desenvolvimento da API do **My Contacts**.

### Life Cycle da requisição

> Request -> Controller -> Repository -> Controller -> Response

**Middlewares** são funções que estão entre o **request** e o **controller**, e eles servem para realizar manipulação nos objetos ( request/response ) e pode controlar o life cycle interrompendo uma request por exemplo ou respondendo uma request antes de chegar em um controller.

> Middleware tem acesso ao request, response e um terceiro parâmetro que é o next, essa é a função chamada para o fluxo de middleware seguir sendo executado.

### Estrutura/Padrão

O conceito aqui é separação de responsabilidades, torna o sistema mais desacoplado e com camadas mais definidas, melhorando assim a escalabilidade e manutenções futuras.

- **Controller** : Camada responsável pela lógica.
- - Padrão de nomeação dos métodos :
- - - **index** - listar todos os registros.
- - - **show** - obter **um** registro.
- - - **store** - criar um registro.
- - - **update** - editar um registro.
- - - **delete** - remover um registro.
- **Repositories** : Layer ( camada ) e abstração de acesso ao **Data Source**.

> Um **repository** e um **controller** por entidade | Controller <-> Repository <-> Data Source

- **Singleton** : Utilizar apenas uma instância do objeto dentro da aplicação.

---

### Docker

[Docker](https://www.docker.com/) é utilizado para gerar container ( virtualização ) utilizando o kernel do host, gerenciandos 'imagens' de forma isoladas, essas imagens podem ser baixadas pelo **DockerHub**

Utilizamos o docker para o **postgres**, banco de dados relacional que irá armazenar os contatos da aplicação.

### Database

Conceitos utilizados na criação do banco de dados, no nosso caso utilizamos o **postgres**.

- [**SQL**](w3schools.com/sql/) linguagem padrão para armazenar, manipular e recuperar dados em bancos de dados.
- [Postgres](https://www.postgresql.org/) banco de dados relacional utilizado na API.
- [**uuid**](https://pt.wikipedia.org/wiki/Identificador_%C3%BAnico_universal) --> Universal Unique ID ( uma hash utilizado para gerar os id do banco ).
