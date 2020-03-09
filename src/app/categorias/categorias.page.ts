import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  itens:object;

  constructor() { }

  ngOnInit() {
    this.itens = [
      {
        'id': 1,
        'nome':'Banco de Dados',
        'icon':'base'
      },    
      {
        'id':2,
        'nome':'camera',
        'icon':'camera'
      }
      
    ]
  }

}
