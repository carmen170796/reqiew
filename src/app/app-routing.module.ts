import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenchmarkComponent } from './components/benchmark/benchmark.component';
import { ScoresComponent } from './components/scores/scores.component';

const routes: Routes = [
    { path: '', component: ScoresComponent },
    { path: 'scores', component: ScoresComponent },
    { path: 'benchmark', component: BenchmarkComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
