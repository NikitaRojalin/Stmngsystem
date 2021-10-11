import { Component, OnInit } from '@angular/core';
//import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StudentcrudService } from '../studentcrud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    userList: any=[];
     view: any[] = [700, 300];
     legend: boolean = true;
       showLabels: boolean = true;
       animations: boolean = true;
       xAxis: boolean = true;
       yAxis: boolean = true;
       showYAxisLabel: boolean = true;
       showXAxisLabel: boolean = true;
       xAxisLabel: string = 'Year';
       yAxisLabel: string = 'Population';
       timeline: boolean = true;
       colorScheme = {
           domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
         };

  constructor(private router: Router,private userService:StudentcrudService) { //Object.assign(this, { userList });

}



  ngOnInit(): void {
      this.userService.getattendance()
      .subscribe( data => {
        this.userList = data;
      });
  }

}
