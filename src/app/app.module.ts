import { NgModule } from '@angular/core';

import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [ContadorModule,HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
