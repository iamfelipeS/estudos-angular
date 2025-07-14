# 🛒 Desafio 05 - Tela de Carrinho de Compras

## 🎯 Objetivo

Criar uma tela de carrinho de compras funcional, onde o usuário possa visualizar os produtos adicionados, alterar quantidades, remover itens e ver o total atualizado. Esse desafio simula uma etapa real de um e-commerce e é uma continuação direta da listagem de produtos criada no Desafio 04.

---

## 📦 O que você deve fazer

- Criar o modelo `CartItem` com os campos necessários (ex: produto, quantidade, subtotal).
- Criar um serviço `CartService` que gerencie o estado do carrinho (adicionar, remover, atualizar).
- Criar um mock inicial com alguns produtos já no carrinho (simulando um retorno do backend).
- Criar o componente `CartComponent` para exibir os itens do carrinho.
- Permitir:
  - Alterar a quantidade de um item
  - Remover item do carrinho
  - Mostrar subtotal por item e total geral
  - Mostrar mensagem caso o carrinho esteja vazio

---

## 🗂️ Estrutura recomendada

```
src/
├── app/
│   ├── data/
│   │   └── cart/
│   │       └── cart.mock.ts             ✅ Mock de itens no carrinho
│   ├── models/
│   │   └── cart-item.model.ts           ✅ Interface dos itens do carrinho
│   ├── services/
│   │   └── cart.service.ts              ✅ Serviço com métodos de manipulação
│   └── components/
│       └── cart/
│           ├── cart.component.ts
│           ├── cart.component.html
│           └── cart.component.css
```

---

## 🧠 Dicas

- Use `reduce()` para calcular o total geral do carrinho.
- Use `map()` e `filter()` para atualizar ou remover itens.
- Deixe o serviço responsável por toda a lógica (o componente apenas exibe).
- Crie métodos como `getCartItems()`, `addToCart()`, `updateQuantity()`, `removeItem()`.

---

## 💪 Desafios extras

- **5.1** Exibir quantidade total de itens (soma das quantidades).
- **5.2** Adicionar botão "Esvaziar carrinho".
- **5.3** Salvar o carrinho no localStorage.
- **5.4** Integrar com os produtos do Desafio 04 (clicar em “Adicionar ao carrinho” deve funcionar).
- **5.5** Exibir mensagem de confirmação ao remover item.

---

**Agora é com você! Estruture bem seu carrinho e prepare o caminho para checkout e finalização de pedidos. 🧾🚀**