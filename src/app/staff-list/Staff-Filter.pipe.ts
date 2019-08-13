import { PipeTransform, Pipe } from '@angular/core';
import {StaffClass} from '../staff/StaffModuel';
import { pipe } from 'rxjs';

//Impelementing filters
@Pipe({ name:'StaffFilter'})


export class StaffFilterPipe implements PipeTransform{
   
    transform(staffList:StaffClass[],Searchiteam:string){
        if(!staffList || !Searchiteam){
          return staffList
        }
        return staffList.filter(staffList=>
            staffList.StaffName.toLowerCase().indexOf(Searchiteam.toLowerCase()) !==-1)

    }
}