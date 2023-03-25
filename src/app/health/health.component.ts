import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {

  constructor(private na:NewsapiservicesService){

  }
  healthNews:any =[];


  ngOnInit(): void{
    this.na.health().subscribe((result:any)=>{
      this.healthNews=result.articles

    })
  }



}
