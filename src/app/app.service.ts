import { Injectable } from '@angular/core';
import { cards } from './cards';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  getProjects() {
    return of(cards);
  }
}
