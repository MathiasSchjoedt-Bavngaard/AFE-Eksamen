import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card, CardService } from './card.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mtgCards$: Observable<Card[]> | null = null;
  mtgCard$: Observable<Card> | null = null;
  cardService: CardService;

  constructor(cardService: CardService) { 
    this.cardService = cardService;
  }

  ngOnInit(): void {
    this.getMtgCards();
  }

  getMtgCards(): void {
    this.mtgCards$ = this.cardService.getCards();
    this.mtgCards$.subscribe(mtgcards => console.log(mtgcards));
  }
}
