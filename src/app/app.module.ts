import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingsComponent } from './headings/headings.component';
import{HttpClientModule} from '@angular/common/http';
import{NewsapiservicesService} from './service/newsapiservices.service';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component'
@NgModule({
  declarations: [
    AppComponent,
    HeadingsComponent,
    EntertainmentComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
