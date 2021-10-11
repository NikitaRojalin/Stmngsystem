import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentcrudService } from '../studentcrud.service';
import {Attendance} from '../modal';
@Component({
  selector: 'app-srchatnd',
  templateUrl: './srchatnd.component.html',
  styleUrls: ['./srchatnd.component.css']
})
export class SrchatndComponent implements OnInit {
id:any;
userList:Array<Attendance>=[];
  constructor(private activeRoute: ActivatedRoute,private router:Router,private userService:StudentcrudService) { }

  ngOnInit(): void {
      this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id
  });
  this.userService.getattendance()
       .subscribe( data => {
         this.userList = data;
         console.log(this.userList);
         this.userList= this.userService.getAttendanceForregd(this.id,this.userList);
 console.log(this.userList);
       });
 
      console.log(this.userList);
}
}
