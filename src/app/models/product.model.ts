export interface Produto {
    id: number,
    nome: string,
    preco: number,
    categoria: string,
    marca: string,
    estoque: number,
    avaliacao: number,
    cor: string,
    memoria: string | null
}