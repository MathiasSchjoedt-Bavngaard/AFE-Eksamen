import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Card {
  name: string;
  imageUrl: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>('https://api.magicthegathering.io/v1/cards').pipe(
      map((data: any) => data.cards.map((card: any) => ({
        name: card.name,
        imageUrl: card.imageUrl,
        id: card.id
        })))
        );
  }

  getCard(id: number): Observable<Card> {
    return this.http.get<Card>(`https://api.magicthegathering.io/v1/cards/${id}`).pipe(
      map((data: any) => ({
        name: data.card.name,
        imageUrl: data.card.imageUrl,
        id: data.card.id
      }))
    );
  }
}
