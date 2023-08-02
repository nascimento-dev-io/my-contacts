**Toast** são componentes de feedback visual que são exibidas em tela em resposta a determinada ação que pode ser do usuário,tais como um cadastro criado, deletado ou mesmo erros na aplicação. Nesse artigo vou mostrar o processo de criação baseado nas aulas do curso curso JStack do Matheus Silva, que usa o mínimo possível de lib externa para um aprendizado melhor do que acontece por 'debaixo dos panos'.

A ideia é criar toast que serão exibidos com estilização de acordo com o tipo de mensagem e contendo ícone de acordo com o tipo de mensagem escolhida, em caso de sucesso na cor verde, erros na cor vermelha e na cor azul como o default,abaixo os exemplos de como será o componente.

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

import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

const ToastMessage = ({ text, type }) => {
  return (
    <Container type={type}>
      {type === 'success' && <img src={checkCircleIcon} alt="check" />}
      {type === 'danger' && <img src={xCircleIcon} alt="x" />}
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

Dessa forma os componentes necessários para gerar a renderização dos toasts e suas variações foram finalizados, agora vamos para as funcionalidades de exibir o toast de forma dinâmica e com funcionalidades adicionais.

### Event Manager

A escolha nesse caso especificamente foi de criar um gerenciador de eventos genérico para que assim seja registrado um tipo de evento ( aqui 'addtoast' ) e que esse seja 'disparado' sempre que necessário exibir um **toast** em tela, porém é uma possibilidade usar a própria API do DOM [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) ou a [Context API](https://dev.to/nascimento_/react-o-que-e-contexto-5f6j) para essa finalidade.

**_Vamos ao código:_**

```js
// src/lib/EventManager.js

export default class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event, payload) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event).forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListener = listeners.filter(
      (listener) => listener !== listenerToRemove,
    );

    this.listeners.set(event, filteredListener);
  }
}
```

De forma resumida o **EventManager** é uma classe que manipula um **Map** onde nesse é adicionado os **events** e **listeners** e também remove um **listerner** específico caso necessário.

- O método **on** define o nome do evento como uma **key** do Map e popula um array com funções **listeners** passadas como **value** dessa key.

- O método **emit** é utilizado para disparar a função atrelada ao evento definido passando nesse caso um **payload** que aqui iremos usar o tipo de mensagem e a mensagem em si. O **emit** busca chave com o nome do evento passado e executa todos os **listeners** atrelado a essa chave, passando o **payload** como argumento de cada **listener**.

- O método **removeListener** é utilizado para remover um **listener** atrelado a um determinado evento, primeiro localizamos a chave pelo evento passado e após isso é realizado um filtro removendo a função informada do array de **listeners**.

---

> <sub> _Este post tem como objetivo ajudar quem esta começando no aprendizado das tecnologias web, além de servir como incentivo no meus estudos e a criar outros posts pra fixação do aprendizado._ </sub>

<p align="center"> Me paga um café ? :) | pix: <em>nascimento.dev.io@gmail.com</em> </p>

<h4> <em> Me Sigam :) </em> </h4>

[Linkedin](https://www.linkedin.com/in/nascimento-dev-io/) | [Github](https://github.com/nascimento-dev-io)
