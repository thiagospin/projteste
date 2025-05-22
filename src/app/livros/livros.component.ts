import { Component } from '@angular/core';
import livrosDB from '../../assets/booklist.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent {

  listaLivros = livrosDB.livros;

  mostrar = true;

}
