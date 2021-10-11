import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentcrudService } from '../studentcrud.service';
import {Attendance} from '../modal';
@Component({
  selector: 'app-atndlist',
  templateUrl:'./atndlist.component.html',
  styleUrls: ['./atndlist.component.css']
})
export class AtndlistComponent implements OnInit {
id:any;
userList:Array<Attendance>=[];

  constructor(private activeRoute: ActivatedRoute,private router:Router,private userService:StudentcrudService) {


}

  ngOnInit(): void {




}
submit(){
    console.log(this.id);
    this.router.navigate(['/showatnd',this.id])
}
}
