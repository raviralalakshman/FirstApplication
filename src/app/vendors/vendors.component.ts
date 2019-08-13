import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  Imageurl:string ="/assets/Images/Copy.JPG";

  fileToUpload:File=null;
  constructor() { }

  ngOnInit() {
  }
  handleInput(file:FileList){
  
    this.fileToUpload = file.item(0);

    //show Image Preview

    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.Imageurl = event.target.result;

    }
    reader.readAsDataURL(this.fileToUpload);
  }
}
