import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { StudentcrudService } from '../studentcrud.service';
import { User } from '../modal';
import {Attendance} from '../modal';
import { FormArray, FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
//userform: FormGroup;
userList:Array<User>=[];
datei:any;
attendance:Array<any>=[];
myobj!: Attendance;
  constructor(private router: Router,private userService:StudentcrudService) {

      this.userService.getUsers()
      .subscribe( data => {
        this.userList = data;

      });

   }

  ngOnInit(): void {

  }

submitattendance(u:User,ind:number){
this.myobj={
    id:u.id,
    aregdno:u.regdno,
    attendance:this.attendance[ind],
    date:this.datei
}
//this.userService.createAttendee(this.myobj);
this.userService.createAttendee(this.myobj).subscribe(() => {
  console.log("success");
},() => {
  alert("Something Went Wrong")
})
console.log("aded");
}
}
