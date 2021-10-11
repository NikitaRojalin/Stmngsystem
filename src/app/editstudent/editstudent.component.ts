import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentcrudService } from '../studentcrud.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
    id: number = 0;
      userForm: FormGroup;
      //displayAnimation:boolean = false;
  constructor(private activeRoute: ActivatedRoute,private router:Router,private userService:StudentcrudService) {
      this.userForm = new FormGroup({
            'firstName': new FormControl('', Validators.required),
            'lastName': new FormControl('', Validators.required),
            'userEmail': new FormControl('', [Validators.required, Validators.email]),
            'regdno': new FormControl('', Validators.required),
            'phoneNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),


     })
  }

  ngOnInit(): void {
      this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      console.log(this.id)
      this.userService.getUserById(paramsData.id).subscribe((data) => {
        console.log(data);

        this.userForm.setValue({
            firstName:data.firstName,
            lastName:data.lastName,
            userEmail:data.userEmail,
            regdno:data.regdno,
            phoneNumber:data.phoneNumber
        });
      })
    })
  }
  submitdata() {
      console.log("submit meth");
      console.log(this.userForm.controls);
      console.log(Object.keys(this.userForm.controls)); // []
      console.log(this.userForm.get('firstName'));
      //console.log(this.userForm.get('id'));
      //console.log(this.userForm.value)

      Object.keys(this.userForm.controls).forEach(field => {
        const control = this.userForm.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        }
      });

      if(this.userForm.valid){
         console.log(this.userForm.value)
        this.userService.updateUser(this.id,this.userForm.value).subscribe((data) => {
          this.router.navigate(["/student-list"])
        })
      }

      // this.displayAnimation = true



    }

}
