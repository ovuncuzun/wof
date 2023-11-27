import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { getSingleCard } from '../cards';
import { ActivatedRoute } from '@angular/router';
import { GradientComponent } from '../components/gradient/gradient.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, GradientComponent],
  templateUrl: './app-detail.component.html',
})
export class AppDetailComponent {
  app: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.app = getSingleCard(id);
      }
    });
  }
}
