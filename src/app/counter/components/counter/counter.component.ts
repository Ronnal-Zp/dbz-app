import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  num: number = 0;

  increase(value: number): void {
    this.num += value;
  }

  decrease(value: number): void {
    this.num -= value;
  }

  restart() {
    this.num = 0;
  }

}
