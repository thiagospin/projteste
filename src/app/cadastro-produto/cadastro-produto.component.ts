import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [FormsModule, CommonModule],
templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent {

  constructor( private apiProdutos: ServicesService ) { }

  novoProduto = {
    "name": "",
    "data": {
      "capacidade": "",
      "cor": "",
      "preco": ""
    }
  }

  resposta: any = "";

  cadastrar(produto: any) {
    console.log(produto);
    this.resposta = this.apiProdutos.postProduto(produto).subscribe((p) => {
      console.log(p);
      this.resposta = p;

    });
    
  }

}
