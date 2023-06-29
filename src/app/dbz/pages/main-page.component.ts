import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private bdzService: DbzService) { }

  get characters(): Character[]{
    return [...this.bdzService.characters];
  }

  onDeleteCharacter(id:string ): void{
    this.bdzService.deleteCharaterById(id);
  }

  onNewCharacter(character : Character ): void{
    this.bdzService.addCharacter(character);
  }
  
}
