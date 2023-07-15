## Ferramentas para desenvolvimento React/Node

Algumas ferramentas são muito importantes para manter uma padronização do código, podendo também melhorar a produtividade nesse processo, vamos ver ferramentas que é geralmente utilizada em meus projetos.

**Eslint** - define regras e padrões no código, evitando erros e corrigindo em alguns casos.

**Prettier** - fomatador de código que pode ser usando em conjunto com o eslint.

**EditorConfig** - define algumas configurações referente aos arquivos, como indent, charset...

**Alguns que são utilizado internamente pelos geradores de templates**

**Webpack** - utilizado para lidar com build, através de loaders tratar variados tipos de arquivos.

**Babel** - transpiler de códigos js ( lidar com transpile de sintaxe novo para antigo e gerar maior compatibilidade, lida com a sintaxe JSX ...).

**Exemplos de arquivos de configurações**

```json
// Eslint
{
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": ["react", "react-hooks", "prettier"],
  "rules": {},
};
```

```js
// Prettier
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  allowParens: 'avoid',
};
```

```
# EditorConfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### Pontos importantes no processo de desenvolvimento em React

- Definição de CSS globais.
- Ser fiel ao layout / responsividade / manutenabilidade.
- Definição estruturada no CSS ( spacing, colors ) - UI
- Definir bem os componentes para reutilização ( flexível de acordo com o projeto)
- Manter semântica no HTML gerado.
- Rotas bem definidas/organizadas.
- Portals ( entender sua importância ).
- Estrutura de pastas organizadas e padronizadas.

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
