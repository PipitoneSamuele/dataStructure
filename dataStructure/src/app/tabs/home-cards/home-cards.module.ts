import { NgModule } from '@angular/core';
import { HomeCardsComponent } from './home-cards.component';
import { HomeCardModule } from '../home-card/home-card.module';

@NgModule({
  declarations: [
    HomeCardsComponent
  ],
  imports: [
    HomeCardModule
  ],
  providers: [HomeCardsComponent],
  bootstrap: []
})
export class HomeCardsModule { }
