import { Component } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent {
  title="Angular Practice"

  array = ['chary','ajay','srikanth','akshay']

  object = [{name: 'raj', age : 25},{name: 'chary', age : 26},{name: 'ajay', age : 27}]

  firstName=""
  lastName=""
  gender=""
  area=""

  todoVar=""
  todoList:any=[]
  addTodo(){
    this.todoList.push(this.todoVar)
  }
  deleteFun(i:any){
    this.todoList.splice(i,1)
  }

  BtnArray=[1,2,3,4,5]

  btnfun(val:any){
    alert(val)
  }

  indexfun(i:any){
    alert(i)
  }
}
