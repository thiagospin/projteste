import { Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'livros', component: LivrosComponent},
    {path: 'home', component: HomeComponent}
];


