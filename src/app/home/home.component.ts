import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card, cards } from '../cards';
import { CardComponent } from '../components/card/card.component';
import { AppService } from '../app.service';
import { GradientComponent } from '../components/gradient/gradient.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, GradientComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  cards: Card[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getProjects().subscribe((cards) => {
      this.cards = cards;
    });
  }
}
