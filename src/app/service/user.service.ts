
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HTTP, ) { }


  obterCategorias(): any {

    let path = 'https://reqres.in/api/unknown';

    return this.http.get(path, {}, {});
  }
  listarUsuarios(): any {

    let path = 'https://reqres.in/api/users?page=2';

    return this.http.get(path, {}, {});
  }
  obterLogin(dados): any {

    let path = 'https://reqres.in/api/login';

    return this.http.post(path, dados, {});
  }
  register(dados): any {

    let path = 'https://reqres.in/api/register';

    return this.http.post(path, dados, {});
  }



}
