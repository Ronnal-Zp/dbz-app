import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterI } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<CharacterI> = new EventEmitter();

  character: CharacterI = {
    id: '',
    name: '',
    power: 0
  }


  emitCharacter(): void {
    if(this.character.name.length == 0) return;

    this.character.id = uuid();
    this.onNewCharacter.emit({...this.character})
  }

}
