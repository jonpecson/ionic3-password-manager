import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ForgeProvider } from '../../providers/forge/forge';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  public title: string;
  public username: string;
  public password: string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private database: DatabaseProvider, private forg: ForgeProvider) {
      this.title = "";
      this.username = "";
      this.password = "";
  }

  public save() {
      if(this.title != "" && this.username != "" && this.password != "") {
          console.log("TRYING TO SAVE");
          let salt = this.forg.generateSalt();
          let iv = this.forg.generateIv();
          this.database.createPassword({
              "title": this.title,
              "username": this.forg.encrypt(this.username, this.navParams.get("password"), salt, iv),
              "password": this.forg.encrypt(this.password, this.navParams.get("password"), salt, iv),
              "salt": salt,
              "iv": iv
          }).then((result) => {
              console.log("TRYING TO GO BACK");
              this.navCtrl.pop();
          }, (error) => {
              console.log("ERROR: ", error);
          });
      }
  }

}
