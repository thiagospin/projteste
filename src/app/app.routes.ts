import { Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { HomeComponent } from './home/home.component';
import { FilmesswComponent } from './filmessw/filmessw.component';
import { ProdutosComponent } from './produtos/produtos.component';

export const routes: Routes = [
    {path: 'livros', component: LivrosComponent},
    {path: 'home', component: HomeComponent},
    {path: 'filmessw', component: FilmesswComponent},
    {path: 'produtos', component: ProdutosComponent}
];


