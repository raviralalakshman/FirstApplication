import { Component, OnInit } from '@angular/core';
import {mobiles} from './Mobiles';
import{Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './add-mobile-details.component.html',
  styleUrls: ['./add-mobile-details.component.css']
})
export class AddMobileDetailsComponent implements OnInit {

  constructor( private _router:Router,) { }

  ngOnInit() {
  }
  mobile = new mobiles(1, 'Angular', 2);
  submitted = false;

  onSubmit() { this.submitted = true; }

  returntologin(){
   this._router.navigate(['./Loginpage'])
  }
  ToUrl(){
   window.open("https://www.facebook.com/","_blank");
  }
}
