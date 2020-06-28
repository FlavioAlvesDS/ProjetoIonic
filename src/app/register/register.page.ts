import { NavController } from '@ionic/angular';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email = '';
  password = '';
  users: any;

  constructor(private userService: UserService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  MethodCreate() {

    let dados = {
      email: this.email,
      password: this.password,
    };
    // recebe dados provenientes da conexão de service

    // tslint:disable-next-line: align
    this.userService.register(dados)
      .then(response => {
        // response.data recebe uma string Json e devemos converter em objeto
        this.users = JSON.parse(response.data, (key, value) => {
          return value;
        });
        this.users = this.users.data; // obtem apenas o array data
        this.navCtrl.navigateForward('/login');
        alert('Dados cadastrados com sucesso');

      },
        error => {
          console.log(error);
          alert("Dados Invalidos ")

        });
  }
}
