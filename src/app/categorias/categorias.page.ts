import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  itens: any;


  constructor(private UserService: UserService) { }

  ngOnInit() {

    // recebe dados provenientes da conexão de service
    this.UserService.obterCategorias()
      .then(response => {
        // response.data recebe uma string Json e devemos converter em objeto
        this.itens = JSON.parse(response.data, (key, value) => {
          return value;
        });
        this.itens = this.itens.data; // obtem apenas o array data
      },
        error => {
          console.log(error);
        });
  }
}


