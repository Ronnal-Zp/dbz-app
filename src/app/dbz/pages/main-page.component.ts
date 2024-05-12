import { Component } from '@angular/core';
import { CharacterI } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  characterList: CharacterI[] = [
    {
      name: 'Krillin',
      power: 950
    },
    {
      name: 'Goku',
      power: 9000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];


  onNewCharacter(character: CharacterI): void {
    this.characterList.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characterList.splice(index, 1);
  }

}
