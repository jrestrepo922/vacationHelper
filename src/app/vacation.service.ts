import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VACATIONS } from './mock-vacations';
import { Vacation } from './vacation';


@Injectable({
  providedIn: 'root'
})
export class VacationService {
  vacations: Vacation[] = [];

  constructor() { }

  getVacations(): Observable<Vacation[]> {
    const vacations = of(this.vacations);
    return vacations;
  }

  setInputs(price: number, temperature: string){
    let filterVacations: Vacation[] = VACATIONS.filter(vacation => vacation.weather === temperature && vacation.cost <= price); 
    this.vacations = filterVacations; 
  }
}
