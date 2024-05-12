import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { CharacterI } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DBZService) {}


  get characters(): CharacterI[] {
    return [...this.dbzService.characterList];
  }

  addCharacter(character: CharacterI): void {
    this.dbzService.addCharacter(character);
  }

  deleteCharacter(id: string) {
    this.dbzService.deleteCharacterById(id);
  }

}
