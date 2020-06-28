import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  mostrarAlerta(){
    alert ('Deu tudo Certo');
  }
}
