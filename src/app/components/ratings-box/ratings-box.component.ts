import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ratings-box',
  templateUrl: './ratings-box.component.html',
  styleUrls: ['./ratings-box.component.css']
})
export class RatingsBoxComponent {
  @Input() ratings: {
    name: string;
    score: number;
  }[] = [];
  
}
