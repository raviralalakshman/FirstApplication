import { Component, OnInit } from '@angular/core';
import {LoginPage} from '../login-page/Login_Model';
//import{userinfo} from '../user-info-details/UserInfo-model';
import{HttpClient,HttpHeaders,HttpErrorResponse,HttpParams} from '@angular/common/http';

// import{Mainrouting} from '../MainRouting/Routing';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

 Crediantials:LoginPage = new LoginPage();
 urlSearchParams :string
 Message:string;

  constructor( private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  CheckLogin(username:string,password:string){
  let headers = new HttpHeaders();
  debugger
  headers.append('Content-Type', 'application/json');

  let params = new HttpParams().set("username",username).set("password", password);
  this.http.get("http://localhost:1588/api/Staff/LogintoApplication", {headers: headers, params: params}).subscribe(
    (res:any)=>{
      
      if(res == true){
        this.router.navigate(['/Customers'])
      }
      else{
        alert("The Credeintails is incorrect");
      }
    }

  );
}
  AddAccount(){
    this.router.navigate(['/UserInfo']); 
    
  }

  //It will show and hide the div element
  show:boolean = false;
  FB(){
    this.show = true;
  }
  //Submitting Password
  SubmitPassword(OP:string,NP:any){
debugger
    let headers = new HttpHeaders();
   
    headers.append('Content-Type', 'application/json');
  
   let Passwords = new HttpParams().set("Old",OP).set("New", NP);
   this.http.get("http://localhost:1588/LogIn/CreateNewPassword/"+OP + "/" + NP).subscribe(
  (res:any)=>{
    this.Crediantials = new LoginPage();
   this.Message ="Your Password succesfully Chnaged"
  }
  );
   }
   // Logic for ShowPassword Button
   myFunction() {
     debugger
    var x= (document.getElementById("Pass") as HTMLInputElement).type;
    
   if(x == "text"){
    (document.getElementById("Pass") as HTMLInputElement).type="password";
   }
   else
   {
    (document.getElementById("Pass") as HTMLInputElement).type="text";
   }
    
  }
}

