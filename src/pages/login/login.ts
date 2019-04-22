import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as BcryptJS from "bcryptjs";
import { DatabaseProvider } from '../../providers/database/database';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public password: string;

  public constructor(private navCtrl: NavController, private database: DatabaseProvider) { }

  public ionViewDidEnter() {
      this.password = "";
  }

  public validate() {
      if(this.password != "") {
          this.database.getMaster().then((result: any) => {
              if(BcryptJS.compareSync(this.password, result.password)) {
                  console.log("TCL: LoginPage -> publicvalidate -> this.password, result.password)", this.password, result.password);
                  this.navCtrl.setRoot(HomePage, {password: this.password});
              }
          }, (error) => {
              console.log("ERROR: " + error);
          });
      }
  }

  public reset() {
      this.navCtrl.push("ResetPage");
  }

}
