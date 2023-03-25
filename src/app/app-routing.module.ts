import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HeadingsComponent } from './headings/headings.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  //home
  {path:'',component:HeadingsComponent}, //home page
  {path:'entertainment',component:EntertainmentComponent},//entertainmnt
  {path:'health',component:HealthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
