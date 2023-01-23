import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @Input () data = []

  filterOptions = {
    device:'',
    brand:'',
    model:'',
    startDate:'',
    endDate:'',
    startPrice: undefined,
    endPrice: undefined
  }


  devices = [
  {value: 'cellphone', viewValue: 'Cellphone'},
  {value: 'tablet', viewValue: 'Tablet'},
  {value: 'laptop', viewValue: 'Laptop'},
  ];

  brands = [
  {value: 'samsung', viewValue: 'Samsung'},
  {value: 'apple', viewValue: 'Apple'},
  {value: 'huawei', viewValue: 'Huawei'},
  ]

  models = [
  {value: 'a', viewValue: 'Model A'},
  {value: 'b', viewValue: 'Model B'},
  {value: 'c', viewValue: 'Model C'},
  ]

}
