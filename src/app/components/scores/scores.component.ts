import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent {

  @Input() filteredResults = [] 
  productName = 'BBQ'
  reviews =[
    {grade:5, percent: 0.84, amount: 4135},
    {grade:4, percent: 0.10, amount: 636},
    {grade:3, percent: 0.04, amount: 739},
    {grade:2, percent: 0.01, amount: 320},
    {grade:1, percent: 0.01, amount: 281}
  ]
  ratings = [
    {name: 'Quality', score: 0.9},
    {name: 'Design', score: 0.93},
    {name: 'Cleaning', score: 0.61},
    {name: 'Safety', score: 0.72},
    {name: 'Service', score: 0.64},
    {name: 'Food Taste', score: 0.87},
  ]

  calculateAverageRating=() => {
      let totalReviews= this.reviews.reduce((accumulator,currentValue) => accumulator + (currentValue.amount), 0)
      let averageStarRating= this.reviews.reduce((accumulator,currentValue) => accumulator + (currentValue.grade * currentValue.amount), 0)/totalReviews
        return {averageStar:averageStarRating.toFixed(1), total: totalReviews}
      
  }
}
