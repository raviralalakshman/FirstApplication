import { Component, OnInit } from '@angular/core';
import{StaffClass} from './StaffModuel';
import{Injectable} from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import{MyServiceService} from '../Mysevice/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  ngOnInit(  ) {
   
    this.productsObservable;
  
    //console.log(this.staff.StaffId);
    // this.service.GetStaff();
  }
    //Creating Object for SatffModel
 staff:StaffClass = new StaffClass();
 staffList:Array<StaffClass> = new Array<StaffClass>();

  private productsObservable : Observable<any[]> ; 

  constructor(private service:MyServiceService,private http:HttpClient,private _route:ActivatedRoute) {

    
  }


 //adding Data in to the dataBase
 AddStaff(){
  
  let apiheaders = new HttpHeaders();
  apiheaders.append('Content-Type', 'application/json');
  this.http.post("http://localhost:1588/api/Staff",this.staff,{headers:apiheaders}).subscribe(
    (res: any) => {
        alert("Student Added Successfully");
        
        console.log(res);
        this.staff = new StaffClass();
       // this.staff = new this.staff;
        //this.LoadData();
    },
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            alert("Client-side error occured.");
        } else {
            alert("Server-side error occured.");
        }
    });
 }
 Gender:number;
 //Getting Data For DropDown
 Genders=[
   {Id:0,Gender:"SelectGender"},
   {Id:1,Gender:"Male"},
   {Id:2,Gender:"Female"},
   {Id:3,Gender:"UniSex"}
 ]
 SelectGender(){
   alert(this.staff.Gender)
   this.staff.Gender == this.staff.Gender;
 }



}
