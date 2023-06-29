import { Injectable } from '@angular/core';
import { v4 as ident } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: ident(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: ident(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: ident(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: ident(), ...character };

    this.characters.push(newCharacter);
  }
  deleteCharaterById(id: string): void {
    debugger;
    this.characters = this.characters.filter((e) => e.id !== id);
    console.log(this.characters);
  }
}
