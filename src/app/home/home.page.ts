import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ErrorPage } from '../error/error.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  ngOnInit() {
    
  }

  constructor(private modalController: ModalController) { }

  a11: number;
  a12: number;
  a13: number;
  a21: number;
  a22: number;
  a23: number;
  a31: number;
  a32: number;
  a33: number;
  r1: number;
  r2: number;
  r3: number;
  aux1: number;
  aux2: number;
  aux3: number;

  Montante() {
    if (this.a11 == 0) {
      if (this.a21 != 0) {
        this.aux1 = this.a11;
        this.aux2 = this.a12;
        this.aux3 = this.a13;
        this.a11 = this.a21;
        this.a12 = this.a22;
        this.a13 = this.a23;
        this.a21 = this.aux1;
        this.a22 = this.aux2;
        this.a23 = this.aux3;
      } else {
        if (this.a31 != 0) {
          this.aux1 = this.a11;
          this.aux2 = this.a12;
          this.aux3 = this.a13;
          this.a11 = this.a21;
          this.a12 = this.a22;
          this.a13 = this.a23;
          this.a21 = this.aux1;
          this.a22 = this.aux2;
          this.a23 = this.aux3;
        }else{

        }
      }

    }
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ErrorPage
    });

    modal.onDidDismiss().then((data) => {
    });
    return await modal.present();
  }

}
