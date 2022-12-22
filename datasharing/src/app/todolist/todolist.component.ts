import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  constructor(public ser:ServiceService){}//service file need to import and declare in consrtuctor as public
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
firstVal=null
secondVal=null
resultValue:any=null

add(){
this.resultValue=this.ser.addition(this.firstVal,this.secondVal)
}
sub(){
  this.resultValue=this.ser.substraction(this.firstVal,this.secondVal)
}
mul(){
  this.resultValue=this.ser.multiplication(this.firstVal,this.secondVal)
}
}
