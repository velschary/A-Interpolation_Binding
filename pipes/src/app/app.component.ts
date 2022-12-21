import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name = 'rajeNDRA'
  salary = 12345.45678
  today = '21/12/2022'
  students = [
    {
      name:"raj",
      age:25
    },
    {
      name:"akshay",
      age:27
    },
    {
      name:"rajendra",
      age:25
    },
    {
      name:"srikanth",
      age:26
    },
    {
      name:"aravind",
      age:20
    },
    {
      name:'abhi',
      age:12
    }
  ]
  pipestudents = [
    {
      name:"raj",
      age:25
    },
    {
      name:"akshay",
      age:27
    },
    {
      name:"rajendra",
      age:25
    },
    {
      name:"srikanth",
      age:26
    },
    {
      name:"aravind",
      age:20
    },
    {
      name:'abhi',
      age:12
    }
  ]
  
  sortName(){
    this.students.sort(
      (a:any,b:any)=>a.name>b.name?1:-1
    )
  }
  sortAge(){
    this.students.sort(
      (a:any,b:any)=>a.age>b.age?1:-1
    )
  }
  key=''
}
