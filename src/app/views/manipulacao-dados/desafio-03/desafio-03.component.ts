import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { FormsModule } from '@angular/forms';

interface Produto {
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
@Component({
  selector: 'app-desafio-03',
  imports: [CommonModule, FormsModule, PipesModule],
  templateUrl: './desafio-03.component.html',
  styleUrl: './desafio-03.component.scss'
})


export class Desafio03Component implements OnInit {
  produtos = [
    {
      id: 1,
      nome: "iPhone 15 Pro",
      preco: 8999.99,
      categoria: "Smartphone",
      marca: "Apple",
      estoque: 15,
      avaliacao: 4.8,
      cor: "Titânio Natural",
      memoria: "256GB"
    },
    {
      id: 2,
      nome: "Samsung Galaxy S24 Ultra",
      preco: 7499.99,
      categoria: "Smartphone",
      marca: "Samsung",
      estoque: 23,
      avaliacao: 4.7,
      cor: "Preto",
      memoria: "512GB"
    },
    {
      id: 3,
      nome: "MacBook Pro M3",
      preco: 12999.99,
      categoria: "Notebook",
      marca: "Apple",
      estoque: 8,
      avaliacao: 4.9,
      cor: "Cinza Espacial",
      memoria: "16GB RAM"
    },
    {
      id: 4,
      nome: "Dell XPS 13",
      preco: 6899.99,
      categoria: "Notebook",
      marca: "Dell",
      estoque: 12,
      avaliacao: 4.5,
      cor: "Prata",
      memoria: "16GB RAM"
    },
    {
      id: 5,
      nome: "Sony WH-1000XM5",
      preco: 1899.99,
      categoria: "Audio",
      marca: "Sony",
      estoque: 35,
      avaliacao: 4.6,
      cor: "Preto",
      memoria: null
    },
    {
      id: 6,
      nome: "iPad Air M2",
      preco: 4299.99,
      categoria: "Tablet",
      marca: "Apple",
      estoque: 18,
      avaliacao: 4.7,
      cor: "Azul",
      memoria: "256GB"
    },
    {
      id: 7,
      nome: "Samsung TV 65'' QLED 4K",
      preco: 5999.99,
      categoria: "Tv",
      marca: "Samsung",
      estoque: 6,
      avaliacao: 4.4,
      cor: "Preto",
      memoria: null
    },
    {
      id: 8,
      nome: "PlayStation 5",
      preco: 3999.99,
      categoria: "Console",
      marca: "Sony",
      estoque: 10,
      avaliacao: 4.8,
      cor: "Branco",
      memoria: "825GB SSD"
    },
    {
      id: 9,
      nome: "Nintendo Switch OLED",
      preco: 2299.99,
      categoria: "Console",
      marca: "Nintendo",
      estoque: 25,
      avaliacao: 4.6,
      cor: "Branco",
      memoria: "64GB"
    },
    {
      id: 10,
      nome: "AirPods Pro 2ª geração",
      preco: 1699.99,
      categoria: "Audio",
      marca: "Apple",
      estoque: 42,
      avaliacao: 4.5,
      cor: "Branco",
      memoria: null
    }
  ];

  marcas: string[] = [];
  categorias: string[] = [];
  produtosFiltrados: Produto[] = [];

  filterOptions = {
    nome: '',
    categoria: '',
    marca: '',
    precoMaximo: null
  }

  ngOnInit(): void {
    this.produtosFiltrados = this.produtos;
    this.categorias = Array.from(new Set(this.produtos.map(produto => produto.categoria)));
    this.marcas = Array.from(new Set(this.produtos.map(produto => produto.marca)));
  }

  aplicarFiltros() {
    this.produtosFiltrados = this.produtos.filter(produto => {
      return (
        (!this.filterOptions.nome || produto.nome.toLocaleLowerCase().includes(this.filterOptions.nome.toLocaleLowerCase())) &&
        (!this.filterOptions.categoria || produto.categoria.toLocaleLowerCase().includes(this.filterOptions.categoria.toLocaleLowerCase())) &&
        (!this.filterOptions.marca || produto.marca.toLocaleLowerCase().includes(this.filterOptions.marca.toLocaleLowerCase())) &&
        (!this.filterOptions.precoMaximo || produto.preco <= this.filterOptions.precoMaximo)
      )
    })

  }

}
