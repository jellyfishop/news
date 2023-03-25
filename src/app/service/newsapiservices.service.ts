import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private hc:HttpClient) { }

  //news api url

  //heading
  topHeading(){
    return this.hc.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5e2237fcd342bf86e1cc62c9d23654');
  }
// entertainment page 
  entertain(){
    return this.hc.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=1c5e2237fcd342bf86e1cc62c9d23654')

  }
  //healt news page

  health(){
    return this.hc.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=1c5e2237fcd342bf86e1cc62c9d23654')


  }
 
}
