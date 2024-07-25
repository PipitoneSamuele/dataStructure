import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { TreeComponent } from './data-structure/tree/tree.component';
import { LinkedListComponent } from './data-structure/linked-list/linked-list.component';
import { HomeCardsComponent } from './tabs/home-cards/home-cards.component';
import { HomeCardComponent } from './tabs/home-card/home-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TreeComponent,
    LinkedListComponent,
    HomeCardsComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
