import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsDetailsPageComponent } from './vacations-details-page.component';

describe('VacationsDetailsPageComponent', () => {
  let component: VacationsDetailsPageComponent;
  let fixture: ComponentFixture<VacationsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationsDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
