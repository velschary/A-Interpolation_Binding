import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  constructor(){}
  @Input() x:any='' //receving props from parent component
  @Input() num:number=0
  ngOnInit(){}
}
