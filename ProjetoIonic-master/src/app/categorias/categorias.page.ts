import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertasService } from '../servicos/alertas.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  })
  export class CategoriasPage implements OnInit {

  itens:object;

  constructor(
    private navCtrl: NavController,
    private alerta: AlertasService,

    ) { }

  ngOnInit() {
    this.alerta.mostrarAlerta();
    this.itens = [
      {
        'id': 1,
        'nome':'Banco de Dados',
        'icon':'base',
        'path':'banco-de-dados'
      },    
      {
        'id':2,
        'nome':'camera',
        'icon':'camera',
        'path':'camera'
      }
      
    ]
  }

  openPage(page:string){
    this.navCtrl.navigateForward(`/${page}`)};
 
}
