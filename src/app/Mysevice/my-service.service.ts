import { Injectable } from '@angular/core';
import{StaffClass} from '../staff/StaffModuel';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

GetStaff(){
  return this.http.get("http://localhost:1588/api/Staff");
}
deleteStaff(StaffId: number) {  
  //alert(StaffId);
  return this.http.delete<StaffClass[]>("http://localhost:1588/api/Staff"+'/' + StaffId);  
} 
}
