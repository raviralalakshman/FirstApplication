import { Component, OnInit } from '@angular/core';
import{StaffClass} from '../staff/StaffModuel';
import{Injectable} from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import{MyServiceService} from '../Mysevice/my-service.service';
import{Mainrouting} from '../MainRouting/Routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  //private productsObservable : Observable<any[]> ; 
  staff:StaffClass = new StaffClass();
  staffList:Array<StaffClass> = new Array<StaffClass>();
  Searchiteam:string;

  constructor(private service:MyServiceService,private http:HttpClient,private _router :Router) { }

  ngOnInit() {
    //this.productsObservable;
    this.GetStaff();
  }
  GetStaff(){
    this.service.GetStaff().subscribe((res:any)=>{
      this.staffList = res;
    })
  }
  //--->> Delete Opertation

DeleteStaff(str:StaffClass):void{
  this.service.deleteStaff(str.StaffId).subscribe(
    (res: any) => {
        alert(res);
        this.GetStaff();
    },
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            alert("Client-side error occured.");
        } else {
            alert("Server-side error occured.");
        }
    });
  }
  //Edit operation

EditStaff(str:StaffClass){
  alert(str.AdharNo)
  this._router.navigate(['/edit',str.StaffId,]);
  
  this.staff.AdharNo === str.AdharNo;

 }
 GetArrayLength(length){
 return new Array(length);
 }

}




