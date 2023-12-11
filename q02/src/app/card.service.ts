import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.http.get<Card[]>('https://api.magicthegathering.io/v1/cards');
  }

  getCard(id: string): Observable<Card> {
    return this.http.get<Card>(`https://api.magicthegathering.io/v1/cards/${id}`);
  }
}
