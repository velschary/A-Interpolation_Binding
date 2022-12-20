import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{
@Input() val:any
@Input() add:any
count:any
  ngOnInit(): void {
    this.count=this.val
  }

inc(){
  this.count=Number(this.count)+Number(this.add)
}
dec(){
  this.count=Number(this.count)-Number(this.add)
}
}
