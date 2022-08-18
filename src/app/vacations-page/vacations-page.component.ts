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
  status: boolean = false; 

  constructor(private vacationService: VacationService) { }

  ngOnInit(): void {
    this.getVacations(); 
  }

  getVacations(): void {
    this.vacationService.getVacations()
      .subscribe(vacations => {
        this.status = true; 
        this.vacations = vacations
      })

  }

  onSelect(vacation: Vacation):  void {
    this.selectedVacation = vacation; 
  }

}
