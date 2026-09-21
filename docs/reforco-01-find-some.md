# 🔎 Reforço 01 - find e some

## 🎯 Objetivo

Praticar a consulta de uma lista de produtos, escolhendo a operação adequada conforme o tipo de resultado esperado em cada situação.

## 👀 Antes de começar

A lista de produtos já é carregada pelo `ProductService`. Visualize esses produtos antes de realizar as buscas para conhecer os IDs, as marcas e os valores de estoque disponíveis.

## 📦 O que você deve fazer

- Complete `buscarProdutoPorId(id: number)` para armazenar o produto que possui o ID informado em `produtoEncontrado`.
- Complete `possuiProdutoSemEstoque()` para armazenar em `existeProdutoSemEstoque` se existe pelo menos um produto com estoque igual a zero.
- Complete `possuiProdutoDaMarca(marca: string)` para armazenar em `existeProdutoDaMarca` se existe pelo menos um produto da marca recebida.
- Use a lista `produtos`, que já é carregada pelo `ProductService`.
- Teste as três ações pela interface do reforço.

## 🛠️ Dicas

- Antes de implementar, observe se cada exercício espera receber um objeto ou uma resposta booleana.
- Consulte a documentação de `find` e `some` e compare os tipos de retorno.
- Use o parâmetro recebido pelo método em vez de fixar IDs ou marcas no código.
- Evite alterar o array original de produtos.

## 💪 Desafios extras

### Extra 1 - Normalização da marca

Faça a verificação da marca funcionar sem diferenciar letras maiúsculas e minúsculas e desconsidere espaços extras no início e no fim do texto informado.

### Extra 2 - Modal de produtos

- Crie um botão **"Ver produtos"**.
- Ao clicar no botão, abra um modal com a lista de produtos.
- Passe a lista de produtos do componente pai para o modal.
- Permita que o usuário feche o modal.
- Exiba pelo menos o nome, a marca, o preço e o estoque de cada produto.
- Organize os produtos em duas colunas em telas maiores e em uma coluna em telas menores.
- Opcionalmente, aproveite o desafio para praticar a comunicação entre componentes.
- Compare uma abordagem tradicional com `@Input` e `@Output` com a API de Signals usando `model()`, sem a necessidade de implementar as duas abordagens.

---

**Agora é com você! Escolha a abordagem adequada para cada resultado esperado. 🚀**
