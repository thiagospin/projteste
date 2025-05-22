import { Component } from '@angular/core';
import filmesswDB from '../../assets/starwarsFilmes.json'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filmessw',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filmessw.component.html',
  styleUrl: './filmessw.component.scss'
})
export class FilmesswComponent {

  filmes = filmesswDB.results;

  array = [false, false, false, false, false, false];

}
