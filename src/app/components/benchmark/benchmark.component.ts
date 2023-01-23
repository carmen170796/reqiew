import { Component } from '@angular/core';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})
export class BenchmarkComponent {
  reviews =[
    {grade:5, percent: 0.84, amount: 4135},
    {grade:4, percent: 0.10, amount: 636},
    {grade:3, percent: 0.04, amount: 739},
    {grade:2, percent: 0.01, amount: 320},
    {grade:1, percent: 0.01, amount: 281}
  ]
}
