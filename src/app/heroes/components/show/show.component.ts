import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

  name: string = 'Iron man';
  age: number = 40;

  get capitalizedName() {
    return this.name.toUpperCase();
  }

  getDescription() {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(value: number): void {
    this.age = value;
  }


}
