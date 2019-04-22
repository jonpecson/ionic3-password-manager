import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ForgeProvider } from '../../providers/forge/forge';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  public passwordItem: any;

    constructor(private navCtrl: NavController, private navParams: NavParams, private database: DatabaseProvider, private forge: ForgeProvider) {
        this.passwordItem = {};
    }

    public ionViewDidEnter() {
        this.database.getPasswordById(this.navParams.get("id")).then((results: any) => {
            this.passwordItem.title = results.title;
            this.passwordItem.username = this.forge.decrypt(results.username, this.navParams.get("password"), results.salt, results.iv);
            this.passwordItem.password = this.forge.decrypt(results.password, this.navParams.get("password"), results.salt, results.iv);
        }, (error) => {
            console.log("ERROR: ", error);
        });
    }

}
