import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Customer } from './CustomerModuel'
//import "rxjs/Rx";

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  cust:Customer = new Customer();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
 Floors =[
   {id:1,Name:"1stFloor"},
   {id:2,Name:"2ndFloor"},
   {id:3,Name:"3rdFloor"},
   {id:4,Name:"4thFloor"}
 ]

 Add()
 {
    
     let apiheaders = new HttpHeaders();
     apiheaders.append('Content-Type', 'application/json');
     this.http.get("http://localhost:1588/api/Staff").subscribe(
         (res: any) => {
             
         },
         (err: HttpErrorResponse) => {
             if (err.error instanceof Error) {
                 alert("Client-side error occured.");
             } else {
                 alert("Server-side error occured.");
             }
         });
 }

}
