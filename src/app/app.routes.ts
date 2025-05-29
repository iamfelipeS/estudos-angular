import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'manipulacao-dados/desafio-01', pathMatch: 'full' },
  {
    path: 'manipulacao-dados/desafio-01',
    loadComponent: () =>
      import('./views/manipulacao-dados/desafio-01/desafio-01.component').then((m) => m.Desafio01Component),
  },
  {
    path: 'manipulacao-dados/desafio-02',
    loadComponent: () =>
      import('./views/manipulacao-dados/desafio-02/desafio-02.component').then((m) => m.Desafio02Component),
  },
  {
    path: 'manipulacao-dados/desafio-03',
    loadComponent: () =>
      import('./views/manipulacao-dados/desafio-03/desafio-03.component').then((m) => m.Desafio03Component),
  },
];
