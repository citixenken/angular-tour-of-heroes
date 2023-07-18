import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // service-in-service scenario
  constructor(private messageService: MessageService) {}

  // return mock heroes
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    // send message when heroes are fetched
    this.messageService.add('HeroService: fetched heroes');

    return heroes;
  }
}
