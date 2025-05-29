# 🚀 Desafio 03 - Filtrar produtos com múltiplos filtros

## 🎯 Objetivo
Filtrar um array de produtos e exibir apenas os produtos que atendam aos critérios definidos pelo usuário (valor mínimo, categoria, marca, nome e preço máximo).

## 📦 O que você deve fazer
- Crie uma lista de produtos (pode usar o array fixo com todas as propriedades: nome, preço, categoria, marca, estoque, avaliação, cor e memória).
- Mostre a lista de produtos em uma tabela no HTML:
  - Cada linha deve mostrar: ID, nome, preço, categoria, marca, estoque, avaliação, cor e memória.
  - (Pode copiar o HTML e CSS pronto do repositório).
- Crie campos para o usuário filtrar:
  - Buscar produto (por nome).
  - Categoria (select com opções dinâmicas).
  - Marca (select com opções dinâmicas).
  - Preço máximo.
- Crie um botão ou evento que aplique a filtragem com base nos critérios selecionados.
- Mostre apenas os produtos que atendam a todos os critérios.
- (Opcional) Adicione formatação para o preço em reais (`R$ 99,99`).

## 🛠️ Dicas
- Use `[(ngModel)]` para capturar os filtros de entrada.
- Crie um método `aplicarFiltros()` que combine todos os filtros.
- Use o método `filter` do Javascript para filtrar o array original.
- Mantenha sempre o array original (`produtos`) intacto e exiba o array filtrado.

💪 **Desafio extra:**  
- Permita que a tabela atualize automaticamente em tempo real quando o usuário mudar os filtros (usando `ngModelChange` ou lógica de filtragem reativa).

---

**Agora é com você! Bora treinar! 🚀😉**
