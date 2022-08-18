import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { VacationService } from "../vacation.service"; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  price: number = 0; 
  temperature: string = "cold"; 
  constructor(private router: Router, private vacationService: VacationService) { }

  ngOnInit(): void {
  }

  onClick(){
    // localStorage.setItem("price", this.price.toString()); 
    // localStorage.setItem("temperature", this.temperature); 

    this.vacationService.setInputs(this.price, this.temperature); 

    // better routing in angular
    this.router.navigate(["vacations"]);

  }
}
