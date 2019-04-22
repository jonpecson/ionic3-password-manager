import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as BcryptJS from "bcryptjs";
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {

  public password: string;
    public confirmation: string;

    constructor(private navCtrl: NavController, private database: DatabaseProvider) {}


    /**
     * 
     * First we check to make sure that both the password and confirmation password are not blank. Then we check to make sure they match. 
     * 
     * Provided this is true we can chain two methods from the database provider to delete all the password items and delete the master password. 
     * 
     * We’re also chaining a third promise event for creating a new master password
     * 
     * @memberof ResetPage
     */
    public reset() {
		console.log("TCL: ResetPage -> publicreset -> reset")
        if(this.password != "" && this.confirmation != "") {
            if(this.password == this.confirmation) {
                this.database.deletePasswords().then((result) => {
                    return this.database.deleteMaster();
                }).then((result) => {
					console.log("TCL: ResetPage -> publicreset -> result", result)
                    this.database.createMaster({
                        "password": BcryptJS.hashSync(this.password, 8)
                    }).then((result) => {
						console.log("TCL: ResetPage -> publicreset -> result", result)
                        this.navCtrl.pop();
                    }, (error) => {
                        console.log("ERROR: ", error);
                    });
                }, (error) => {
                    console.log("ERROR: ", error);
                });
            }
        }
    }

}
