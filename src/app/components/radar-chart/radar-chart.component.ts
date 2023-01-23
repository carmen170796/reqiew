import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {
  radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false,
  };
   radarChartLabels = ['Quality','Design','Cleaning','Safety', 'Service', 'Food Taste']

  radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' , borderColor: '#000018', backgroundColor: '#000018'}
  ];
}
