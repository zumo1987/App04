import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OnecomponentPage } from '../onecomponent/onecomponent.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private onepage: NavController) { }
  OnepageComponent() {
    this.onepage.navigateForward('/onecomponent')

  }
}