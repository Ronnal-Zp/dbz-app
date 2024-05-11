import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Iron man', 'Thor', 'Hulk'];
  heroeDelete?: string = '';

  removeLastHero() {
    this.heroeDelete = this.heroes.pop();
  }

}
