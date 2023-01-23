import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {ScoresComponent } from './components/scores/scores.component';
import {BenchmarkComponent } from './components/benchmark/benchmark.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { StarRatingModule } from 'angular-star-rating';
import { ReviewsViewComponent } from './components/reviews-view/reviews-view.component';
import { RatingsBoxComponent } from './components/ratings-box/ratings-box.component';
import { NgChartsModule } from 'ng2-charts';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ScoresComponent,
    BenchmarkComponent,
    ReviewsViewComponent,
    RatingsBoxComponent,
    RadarChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatSliderModule,
    MatProgressBarModule,
    StarRatingModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
