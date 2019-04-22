import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public passwordList: Array<Object>;

  public constructor(private navCtrl: NavController, private navParams: NavParams, private database: DatabaseProvider) {
      this.passwordList = [];
  }

  public ionViewDidEnter() {
      this.database.getPasswords().then((results) => {
          this.passwordList = <Array<Object>>results;
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }

  public viewDetails(item: any) {
      this.navCtrl.push("ViewPage", {password: this.navParams.get("password"), id: item.id});
  }

  public create() {
      this.navCtrl.push("CreatePage", {password: this.navParams.get("password")});
  }
}
