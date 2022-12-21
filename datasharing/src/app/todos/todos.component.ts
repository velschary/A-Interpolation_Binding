import { I18nPluralPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
@Input() val:any;
@Input() index:any
@Output() deleteFun=new EventEmitter()
deleteMethod(){
  this.deleteFun.emit(this.index)
}
}
