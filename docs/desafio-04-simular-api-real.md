# 🚀 Desafio 04 - Página de Produtos com API Fake

## 🎯 Objetivo

Simular o consumo de produtos de uma API fake, utilizando filtros, paginação e ordenação, e preparar o terreno para funcionalidades futuras como **adição ao carrinho**, **detalhes do produto** e **checkout**.

Esse desafio marca a transição da fase de manipulação básica de dados para um cenário mais completo e realista de e-commerce.

---

## 🗂️ Estrutura recomendada

```
src/
├── app/
│   ├── data/
│   │   └── products/
│   │       └── products.mock.ts         ✅ Mock dos produtos
│   ├── models/
│   │   ├── product.model.ts             ✅ Interface dos produtos
│   │   └── product-params.model.ts      ✅ Interface de filtros
│   ├── services/
│   │   └── product.service.ts           ✅ Serviço de produtos (com filtro e paginação)
│   └── components/
│       └── product-list/
│           ├── product-list.component.ts
│           ├── product-list.component.html
│           └── product-list.component.css
```

---

## ✅ O que você deve fazer

- Criar os modelos `Product` e `ProductParams` com tipagem correta.
- Simular um endpoint de listagem (`product.service.ts`) usando `of()` e `delay()`.
- Filtrar os produtos por nome, categoria e disponibilidade.
- Ordenar por nome ou preço.
- Paginar os resultados.
- Criar o componente `ProductListComponent` para exibir os produtos.
- Adicionar botão “Adicionar ao carrinho” (ação simulada, sem lógica real por enquanto).

---

## 🧠 Dicas

- Use `filter`, `sort`, `slice` e `map` para simular lógica de backend.
- Mantenha o array original intacto (nunca mutar o mock direto).
- Use o botão de “Adicionar ao carrinho” como base para o próximo desafio.

---

## 💪 Desafios extras

- **4.1** Adicionar paginação com botões "Próxima" e "Anterior".
- **4.2** Exibir um loader com `loading = true` durante simulação da requisição.
- **4.3** Exibir produtos em grid usando Tailwind ou CSS moderno.
- **4.4** Exibir mensagem amigável se não houver resultados.
- **4.5** Exibir quantidade de produtos encontrados.

---

**Agora é com você! Construa essa base sólida e prepare o caminho para o carrinho de compras no próximo desafio. 🛒**