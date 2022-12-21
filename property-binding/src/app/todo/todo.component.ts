import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todovalues:any=[
    {
      name:'rajendra',
      gender:'male',
      status:false
    },
    {
      name:'chary',
      gender:'male',
      status:true
    },
    {
      name:'swa',
      gender:'female',
      status:false
    },
    {
      name:'swapna',
      gender:'female',
      status:true
    },
    {
      name:'rajendra',
      gender:'male',
      status:false
    },
    {
      name:'akshay',
      gender:'male',
      status:true
    },
    {
      name:'ssss',
      gender:'female',
      status:false
    }
  ]
}
