### Ferramentas para desenvolvimentos

Algumas ferramentas são muito importantes para manter uma padronização do código, podendo também melhorar a produtividade nesse processo, vamos ver ferramentas que é geralmente utilizada em meus projetos.

**Eslint** - define regras e padrões no código, evitando erros e corrigindo em alguns casos.

**Prettier** - fomatador de código que pode ser usando em conjunto com o eslint.

**EditorConfig** - define algumas configurações referente aos arquivos, como indent, charset...

**Alguns que são utilizado internamente pelos templates**

**Webpack** - utilizado para lidar com arquivos ( transpile, processamentos, bundler).

**Babel** - tranpiler de códigos js/ts.

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
