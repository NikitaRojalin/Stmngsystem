import { Component, OnInit } from '@angular/core';
import { User } from '../modal';
import { StudentcrudService } from '../studentcrud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
 userList:Array<User> = [];
 config: any;
 // collection = { count:this.userList.length, data: [] };
  constructor(private router: Router,private userService:StudentcrudService) {
      // this.config = {
      //       itemsPerPage: 5,
      //       currentPage: 1,
      //       totalItems: this.userList.length
      //     };

  }

  ngOnInit(): void {
      this.userService.getUsers()
      .subscribe( data => {
        this.userList = data;
      });
  }
  deleteUser(user: User): void {
      this.userService.deleteUser(user.id)
        .subscribe( data => {
          this.userList = this.userList.filter(u => u !== user);
        })
    };

    editUser(user: User): void {

      this.router.navigate(['edit-user']);
    };

    addUser(): void {
      this.router.navigate(['add-user']);
    };
//     pageChanged(event:any){
// this.config.currentPage = event;
}
