import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  price: number = 0; 
  temperature: string = "cold"; 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    localStorage.setItem("price", this.price.toString()); 
    localStorage.setItem("temperature", this.temperature); 

    window.location.href = "http://localhost:4200/vacations";
    
  }
}
