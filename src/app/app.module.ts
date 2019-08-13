import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import{HttpClientModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AddMobileDetailsComponent } from './add-mobile-details/add-mobile-details.component';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { StaffComponent } from './staff/staff.component';
import{Mainrouting} from './MainRouting/Routing';
import{ReactiveFormsModule} from '@angular/forms';
import{MyServiceService} from './Mysevice/my-service.service';
import { StaffListComponent } from './staff-list/staff-list.component';
import{StaffFilterPipe} from './staff-list/Staff-Filter.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserInfoDetailsComponent } from './RegistrationForm/user-info-details.component';
import { MobileComponent } from './mobile/mobile.component';
import { UploadImageComponent } from './upload-image/upload-image.component';




@NgModule({
  declarations: [
    AppComponent,StaffFilterPipe,
    
    AddMobileDetailsComponent,
    
    CustomersComponent,
    VendorsComponent,
    StaffComponent,
    StaffListComponent,
    LoginPageComponent,
    CreateAccountComponent,
    UserInfoDetailsComponent,
    MobileComponent,
    UploadImageComponent
  ],
  imports: [
    RouterModule.forRoot(Mainrouting),BrowserModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
