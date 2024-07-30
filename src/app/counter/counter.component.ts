import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter;

  constructor() {
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
    if(this.counter < 0){
      alert("Counter is going negative");
      this.counter = 0;
    }
  };
}



