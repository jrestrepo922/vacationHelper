import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VACATIONS } from './mock-vacations';
import { Vacation } from './vacation';


@Injectable({
  providedIn: 'root'
})
export class VacationService {

  constructor() { }

  getVacations(): Observable<Vacation[]> {
    const vacations = of(VACATIONS);
    return vacations;
  }
}
