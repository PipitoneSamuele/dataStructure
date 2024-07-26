import { Component } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css'
})
export class HomeCardsComponent {

  readonly cards = [
    {'name': 'TREE', 'path': '/tree'},
    {'name': 'LINKED LIST', 'path': '/linked-list'},
    {'name': 'ALTRO', 'path': '/tree'}
  ];

}
