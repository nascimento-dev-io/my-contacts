## Criando um componente Toast

Toast são Mensagens de feedback que são exibidas em tela em resposta a determinada ação que pode ser do usuário,tais como um cadastro criado, deletado ou mesmo erros na aplicação. Nesse artigo vou mostrar o processo de criação baseado nas aulas do curso curso JStack do Matheus Silva, que usa o mínimo possível de lib externa para um aprendizado melhor do que acontece por 'debaixo dos panos'.

A ideia é criar toast que serão exibidos com estilização de acordo com o tipo de mensagem e contendo ícone de acordo como tipo de mensagem escolhida, em caso de sucesso na cor verde, erros na cor vermelha e na cor azul como o default,abaixo os exemplos de como será o componente.

![image](https://firebasestorage.googleapis.com/v0/b/web-apps-4659f.appspot.com/o/toast.png?alt=media&token=927bc9c1-87b7-44b3-82bd-08a4390ec8b3)

### Toast Container

Primeiro vamos criar o componente toast container, esse servirá para nos ajudar a posicionar melhor as mensagens, que nesse caso ficarão de forma centralizada no rodapé da aplicação e de forma fixa, podendo também exibir várias mensagens ao mesmo tempo se necessário.

**_Vamos ao código:_**

```jsx
// src/components/ToastContainer/index.js

import { Container } from "./styles";

const ToastContainer = () => {
  return (
    <Container>
      <ToastMessage type:'danger' text: 'toast message' />
    </Container>
  );
};

export default ToastContainer;
```

- Para estilização estamos usando o [**styled components**](https://dev.to/nascimento_/styled-components-1gne), vamos ao código do Container.

```css
/* src/components/ToastContainer/styles.js */

import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 48px;
  z-index: 10;

  left: 50%;
  transform: translateX(-50%);
`;
```

### Toast Message

O segundo componente necessário é o toast message que lida com a lógica da mensagem em si, tais como estilização baseado no tipo de mensagem e ícones caso necessário.

**_Vamos ao código:_**

```jsx
// src/components/ToastMessage/index.js

import { Container } from "./styles";

import xCircleIcon from "../../../assets/images/icons/x-circle.svg";
import checkCircleIcon from "../../../assets/images/icons/check-circle.svg";

const ToastMessage = ({ text, type }) => {
  return (
    <Container type={type}>
      {type === "success" && <img src={checkCircleIcon} alt="check" />}
      {type === "danger" && <img src={xCircleIcon} alt="x" />}
      <strong>{text}</strong>
    </Container>
  );
};

export default ToastMessage;
```

No Toast Message recebemos via props o **text** ( texto da mensagem) e o **type** ( tipo de mensagem ), o tipo da mensagem pode ser: **_default_**, **_danger_**, **_success_** e baseado nessa props alteramos o ícone que será exibido no toast, utilizamos também o **type** passando para o Container para manipulação do background da mensagem via styled components, nesse caso usamos um objeto que mapeia as variantes do toast e alteramos seu background de acordo com cores pré definidas em um arquivo com estilos que foi passado para o <ThemeProvider> do **styled**.

```css
/* src/components/ToastMessage/styles.js */
import styled from "styled-components";

const containerVariants = {
  success: css`
    background-color: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger.main};
  `,
  default: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
  `,
};

export const Container = styled.div`
  padding: 16px 32px;
  ${({ type }) => containerVariants[type] || containerVariants.default}
  color: #fff;

  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
```

Dessa forma temos os componentes necessários para gerar a renderização dos toasts e suas variações foram finalizados, agora vamos para a funcionalidade de exibir o toast de forma dinâmica e com funcionalidades adicionais.
