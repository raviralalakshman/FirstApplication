import{AddMobileDetailsComponent} from '../add-mobile-details/add-mobile-details.component';
import{CustomersComponent} from '../customers/customers.component';
import{StaffComponent} from '../staff/staff.component';
import{VendorsComponent} from '../vendors/vendors.component';
import{StaffListComponent} from '../staff-list/staff-list.component';
import {UserInfoDetailsComponent} from '../RegistrationForm/user-info-details.component';
import { mobiles } from '../add-mobile-details/Mobiles';
import{LoginPageComponent} from '../login-page/login-page.component';
import { MobileComponent } from '../mobile/mobile.component';


export const Mainrouting =[
    {path:'mobiles',component:AddMobileDetailsComponent},
    {path:'Customers',component:CustomersComponent},
    {path:'Vendors',component:VendorsComponent},
    {path:'edit/:id',component:StaffComponent},
    {path:'StaffList',component:StaffListComponent},
    {path:'UserInfo',component: UserInfoDetailsComponent},
    {path:'Loginpage',component:LoginPageComponent},
    {path:'MobilePage',component:MobileComponent},

    
    {path:'',component:LoginPageComponent},

    
]
