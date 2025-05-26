import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  constructor( private apiProdutos: ServicesService ) { }
  
  exibirTabela= false;
  exibirCard = false;
  produtosExibidos: any = [];
  produtoSimples: any = "";
  id: any = "";

  listarProdutos() {
    
    this.exibirTabela = true;
    this.exibirCard = false;

    this.apiProdutos.getTodosProdutos().subscribe((lp) => {
      this.produtosExibidos = lp;
    });

  }

  listarProdutoPeloID(id: number) {

    this.exibirCard = true;
    this.exibirTabela = false;

    this.apiProdutos.getProdutoPeloID(id).subscribe((produto) => {
      this.produtoSimples = produto;
    });
  }

  cadastrarProduto(produto: any): any {
    var resposta = this.cadastrarProduto(produto);
    return resposta;
  }

  limparForm() {
    this.exibirCard = false;
    this.exibirTabela = false;
    this.id = "";
  }
}
