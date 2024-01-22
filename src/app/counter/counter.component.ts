import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor(){}

  ngOnInit(){

  }

  title = "Counter in Angular";
  count = 0;
  counter(type:string){
    type === 'minus'?this.count--:this.count++;
    this.count;
  }
}
