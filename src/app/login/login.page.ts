import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private menu: MenuController
    ) { }


  ngOnInit() {

  }
  
  login(){
    this.navCtrl.navigateForward("/categorias");
}
 ionViewWillEnter(){
   this.menu.swipeGesture(false);
 }
 ionViewDidEnable(){
  this.menu.swipeGesture(true);
}

}
