import { Component } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css'
})
export class HomeCardsComponent {

  readonly cards = [
    {'name': 'tree'},
    {'name': 'linked list'},
    {'name': 'altro'},
    {'name': 'altro'},
    {'name': 'altro'},
    {'name': 'altro'},
    {'name': 'altro'},
    {'name': 'altro'},
    {'name': 'altro'},
    {'name': 'altro'},
  ];

}
