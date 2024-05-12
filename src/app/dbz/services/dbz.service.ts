import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { CharacterI } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  characterList: CharacterI[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 950
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];


  addCharacter(character: CharacterI): void {
    this.characterList.push(character);
  }

  deleteCharacterById(id: string): void {
    this.characterList = this.characterList.filter((character) => character.id != id);
  }

}
