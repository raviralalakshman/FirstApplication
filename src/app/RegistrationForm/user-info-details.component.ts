import { Component, OnInit } from '@angular/core';
import{userinfo} from './UserInfo-model'
import{HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import{Router} from '@angular/router';
import{FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-user-info-details',
  templateUrl: './user-info-details.component.html',
  styleUrls: ['./user-info-details.component.css']
})
export class UserInfoDetailsComponent implements OnInit {
 // usergroup:FormGroup;

  userdetails:userinfo = new userinfo();
  constructor(private http:HttpClient,private _router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.usergroup = this.formBuilder.group({
    //   Name:['',(Validators.required)],
    //   pass: ['',Validators.required], 
    //   conform:['',Validators.required],
    //   mail: ['',Validators.required],
    //   mobile: ['',Validators.required],
    //   Address:['',Validators.required],
    // })
  }
  submitUserForm(){
    let apiheaders = new HttpHeaders();
    apiheaders.append('Content-Type', 'application/json');
    this.http.post("http://localhost:1588/api/Staff/AddUserDetails",this.userdetails,{headers:apiheaders}).subscribe(
      (res: any) => {
        alert("User Added Successfully");
        
        console.log(res);
        this.userdetails = new userinfo();
        this._router.navigate(['/Loginpage']);
       // this.staff = new this.staff;
        //this.LoadData();
    },
    );

  }
  Closeform(){
    this._router.navigate(['./Loginpage']);
  }

  usergroup = new FormGroup({
    Name:new FormControl('',Validators.required),
    pass:new FormControl('',Validators.required),
    conform:new FormControl('',Validators.required),
    mail:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    Address:new FormControl('',Validators.required)

  })
  
  show:boolean = false;
 

  Event(){
    this.show=true;
  }
 
}
