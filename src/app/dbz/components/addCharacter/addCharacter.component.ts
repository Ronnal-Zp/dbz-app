import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterI } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<CharacterI> = new EventEmitter();

  character: CharacterI = {
    name: '',
    power: 0
  }


  emitCharacter(): void {
    if(this.character.name.length == 0) return;
    console.log(this.character)

    this.onNewCharacter.emit(this.character)
  }

}
