import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reviews-view',
  templateUrl: './reviews-view.component.html',
  styleUrls: ['./reviews-view.component.css']
})
export class ReviewsViewComponent {
  @Input() reviews: {
    grade: number;
    amount: number;
    percent: number;
  }[] = [];

  color = 'black'
  

}
