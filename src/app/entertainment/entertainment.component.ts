import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {
  constructor(private na:NewsapiservicesService){}

  entertain:any =[];

  ngOnInit(): void{
    this.na.entertain().subscribe((result:any)=>{
      this.entertain=result.articles

    })
  }

}
