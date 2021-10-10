import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  newContact() {
    this.router.navigate(['contact']);
    }

  register(){
    this.router.navigate(['home']);

    
    
}


}
