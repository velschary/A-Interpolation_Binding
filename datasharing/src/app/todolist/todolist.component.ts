import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
@Output() childevent= new EventEmitter()
callingMethod(){
  this.childevent.emit()
}
value = ''
values = ['srikanth','rajendra','akshay']
addtodo(){
  this.values.push(this.value)
}
deletetodo(i:any){
  this.values.splice(i,1)
}
}
