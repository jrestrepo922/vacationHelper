import { Component, OnInit } from '@angular/core';
import { Vacation } from '../vacation';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-vacations-page',
  templateUrl: './vacations-page.component.html',
  styleUrls: ['./vacations-page.component.css']
})
export class VacationsPageComponent implements OnInit {

  vacations: Vacation[] = []; 
  selectedVacation?: Vacation; 

  constructor(private vacationService: VacationService) { }

  ngOnInit(): void {
    this.getVacations(); 
  }

  getVacations(): void {
    this.vacationService.getVacations()
      .subscribe(vacations => this.vacations = vacations)
      this.filterVacations(); 
  }

  filterVacations(): void {
    let stringPrice: string | null = localStorage.getItem("price"); 
    let temperature = localStorage.getItem("temperature")
    // this.vacations = this.vacations.filter( vacation => vacation.weather ===  )
  }

  onSelect(vacation: Vacation):  void {
    this.selectedVacation = vacation; 
  }

}
