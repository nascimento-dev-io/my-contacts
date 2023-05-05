### Mapper Pattern

O Mapper Pattern é um padrão para controlar o mapeamento de dados entre **Domain** ( domínio) e **Persistence** (persistência), ou seja, os dados recebidos em um front de uma api e vice versa pode ser mapeada para que essa manipulação não seja feita de forma a deixar o código difícil de manter e muitas vezes repetitivos para deixar os dados em um padrão específico que foi definido em um determinado domínio.

Os principais métodos utilizados nesse padrão é o `toDomain()` que mapeia os dados para o padrão utilizado no domínio, e o `toPersistence()` que mapeia os dados para o padrão utilizado na persistence ( api, bd, local Storage...).

### Container/Presentational Pattern

Esse Pattern é utilizado para organizar os componentes separando a camada de lógica e UI ( layout ), evitando assim possíveis problemas como:

- Componentes muitos grandes.
- Mais chances de quebra o código.
- Manutenabilidade/escalabilidade prejudicada.
- Muita responsabilidade pro componente.

Na implementação o `Container` é responsável pela lógica, enquanto o `Presentational` pela UI ( JSX no caso do React).

> Atualmente utilizamos mais os hooks ( em react ) para resolver esse problema
