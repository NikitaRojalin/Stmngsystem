import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modal';
import {Attendance} from './modal';
@Injectable({
  providedIn: 'root'
})
export class StudentcrudService {

  constructor(private http:HttpClient) { }
  url: string = `https://615da18a12571a001720776a.mockapi.io/users`;


  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.url + '/' + id);
  }

  createUser(user: User) {


    return this.http.post(this.url, user);
  }
createAttendee(obj:Attendance){

    //console.log(1);
    console.log(obj);
    //console.log(1);
    return this.http.post(`https://615da18a12571a001720776a.mockapi.io/student_attendance`,obj);
}
  updateUser(id:any,user: User) {

    return this.http.put(this.url + '/' +id, user);
  }
updateAttendee(id:any,obj:Attendance)
{
    console.log(obj);
    return this.http.put(`https://615da18a12571a001720776a.mockapi.io/student_attendance/`+id,obj);
}
  deleteUser(id:any) {
      this.deleteAttendee(id);
    return this.http.delete(this.url + '/' + id);
  }
  deleteAttendee(id:any)
  {
      return this.http.delete(`https://615da18a12571a001720776a.mockapi.io/student_attendance` + '/' + id);
  }
  getattendance(){
     return this.http.get<Attendance[]>(`https://615da18a12571a001720776a.mockapi.io/student_attendance`);
  }
  getAttendanceForregd(id:any,u:any){
      console.log(u);
  u= u.filter(function(x:any) { console.log(x);
      return (x.aregdno == id) && (x.attendance=='present')
   });
  console.log(id);
  console.log(u);
  return u;
  }
// getatndbydate(u:any)
// {
//     u=u.filter()
// }
}
