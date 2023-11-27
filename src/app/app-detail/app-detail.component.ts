import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { getSingleCard } from '../cards';
import { ActivatedRoute } from '@angular/router';
import { GradientComponent } from '../components/gradient/gradient.component';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, CardComponent, GradientComponent],
  templateUrl: './app-detail.component.html',
})
export class AppDetailComponent {
  appCard: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.appCard = getSingleCard(id);
      }
    });
  }
}
