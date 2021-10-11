import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentcrudService } from '../studentcrud.service';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
    userForm:FormGroup;

  constructor(private userService:StudentcrudService,private router:Router) {
      this.userForm = new FormGroup({
            'firstName': new FormControl('', Validators.required),
            'lastName': new FormControl('', Validators.required),
            'userEmail': new FormControl('', [Validators.required, Validators.email]),
            'regdno': new FormControl('', Validators.required),
            'phoneNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),


  })}

  ngOnInit(): void {
  }
  submitUser(){
      Object.keys(this.userForm.controls).forEach(field => {
        const control = this.userForm.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        }
      });

      if(this.userForm.valid){
        console.log(this.userForm.value);
        this.userService.createUser(this.userForm.value).subscribe(() => {
          this.router.navigate(['/student-list']) 
        },() => {
          alert("Something Went Wrong")
        })
    }
}
}
