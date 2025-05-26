import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  private urlBaseApi = 'https://api.restful-api.dev';

  getTodosProdutos() {
    var urlTodosProdutos = `${this.urlBaseApi}/objects`
    return this.http.get(urlTodosProdutos);
  }

  getProdutoPeloID(id: number) {
    // Aqui, o id é o númedo que identifica o objeto 
    // que será retornado
    var urlProdutoPeloID = `${this.urlBaseApi}/objects/${id}`
    return this.http.get(urlProdutoPeloID);
  }

  postProduto(produto: any) {
    // aqui, produto é a variável que irá receber o objeto 
    // json referente ao novo produto criado
    var urlPostProduto = `${this.urlBaseApi}/objects`
    return this.http.post(urlPostProduto, produto);
  }

}

