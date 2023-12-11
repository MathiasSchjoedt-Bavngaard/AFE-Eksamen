import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Card, CardService } from './card.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mtgCards$: Observable<Card[]> | null = null;
  mtgCard$: Observable<Card> | null = null;
  cardService: CardService;
  cardId: number = 1;

  constructor(cardService: CardService) {
    this.cardService = cardService;
  }

  getMtgCards(): void {
    this.mtgCards$ = this.cardService.getCards();
  }

  getMtgCard(id: number): void {
    console.log(id);
    this.mtgCard$ = this.cardService.getCard(id);
  }
}
