import { Component } from '@angular/core';
import { strict } from 'node:assert';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  aluno = "Pablo Humberto";
  urlImagem = "https://s.clipartkey.com/mpngs/s/84-840314_thumb-image-ben-10-png.png";
  cont = 0;

  conteudo = "";

  clicar() {
    this.aluno = "João Jean"
  }
  
  incrementar() {
    this.cont++;
  }
}
