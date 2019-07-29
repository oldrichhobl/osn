import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-dily',
  templateUrl: './modal-dily.page.html',
  styleUrls: ['./modal-dily.page.scss'],
})

export class ModalDilyPage implements OnInit { 

modalPar:any;      // parametr
items:any;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }
 
  ngOnInit() {
    console.table(this.navParams);
    this.modalPar = this.navParams.data;
    this.items = this.navParams.data.pages;
  }
 
  async closeModal(text) {
    const onClosedData: string = text;
    await this.modalController.dismiss(onClosedData);
  }

}
