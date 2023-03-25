import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-headings',
  templateUrl: './headings.component.html',
  styleUrls: ['./headings.component.css']
})
export class HeadingsComponent {

  constructor(private na:NewsapiservicesService){}

  // to display data
  headingDisplay:any=[];

  ngOnInit(): void{
    this.na.topHeading().subscribe((result:any)=>{
      this.headingDisplay=result.articles;

console.log( this.headingDisplay);

      
    })

  }

}
