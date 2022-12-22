import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  addition(a:any,b:any){
    //return Number(a)+Number(b)
    return a+b
  }
  substraction(a:any,b:any){
    //return Number(a)+Number(b)
    return a-b
  }
  multiplication(a:any,b:any){
    //return Number(a)+Number(b)
    return a*b
  }
}
