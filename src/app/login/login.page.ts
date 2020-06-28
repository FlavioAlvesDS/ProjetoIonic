import { NavController } from '@ionic/angular';




import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email = '';
  password = '';

  itens: any;
  constructor(

    private UserService: UserService,
    private router: Router,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  MethodLogin() {
    let dados = {
      email: this.email,
      password: this.password,
    };

    // recebe dados provenientes da conexão de service

    // tslint:disable-next-line: align
    this.UserService.obterLogin(dados)
      .then(response => {
        // response.data recebe uma string Json e devemos converter em objeto
        this.itens = JSON.parse(response.data, (key, value) => {
          return value;
        });
        this.itens = this.itens.data; // obtem apenas o array data
        this.navCtrl.navigateForward('/home')
        alert('Logado com sucesso');

      },
        error => {
          alert("Usuario ou senha Invalidos ")
          console.log(error);

        });

  }
  register() {
    this.navCtrl.navigateForward('/register');
  }
}

