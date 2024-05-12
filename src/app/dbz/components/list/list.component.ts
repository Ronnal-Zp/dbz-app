import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterI } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  characterList: CharacterI[] = [];

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();


  emitDeleteCharacter(id: string): void {
    this.onDeleteCharacter.emit(id);
  }

}
