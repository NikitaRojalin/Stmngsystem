import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentlistComponent} from './studentlist/studentlist.component';
import {AddstudentComponent} from './addstudent/addstudent.component';
import {EditstudentComponent} from './editstudent/editstudent.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {AtndlistComponent} from './atndlist/atndlist.component';
import {SrchatndComponent} from './srchatnd/srchatnd.component';
import {DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [
    {
        path:"student-list",
        component:StudentlistComponent
    },
    {
        path:"addstudent",
        component:AddstudentComponent
    },
    {
        path:"editstudent/:id",
        component:EditstudentComponent
    },
    {
        path:"attendance",
        component:AttendanceComponent
    },
    {
        path:"atnd",
        component:AtndlistComponent
    },
    {
        path:"showatnd/:id",
        component:SrchatndComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
