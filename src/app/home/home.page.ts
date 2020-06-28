import { UserService } from './../service/user.service';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itens: any;
  botoes: object;

  constructor(private UserService: UserService, private navCtrl: NavController) { }

  ngOnInit() {
    this.botoes = [
      {
        acao: ' Alterar Senha',
      },
      {
        acao: ' Excluir Usuario',
      }
    ];
    // recebe dados provenientes da conexão de service
    this.UserService.listarUsuarios()
      .then(response => {
        // response.data recebe uma string Json e devemos converter em objeto
        this.itens = JSON.parse(response.data, (key, value) => {
          return value;
        });
        this.itens = this.itens.data; // obtem apenas o array data
      },
        error => {
          alert("Ops Ocorreu um Erro ")
          console.log(error);
        });
  }
  // tslint:disable-next-line: align
  voltar () {
    this.navCtrl.navigateForward('/login');
  }
  categorias () {
    this.navCtrl.navigateForward('/categorias');
  }
}





