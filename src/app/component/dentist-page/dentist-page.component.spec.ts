import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistPageComponent } from './dentist-page.component';

describe('DentistPageComponent', () => {
  let component: DentistPageComponent;
  let fixture: ComponentFixture<DentistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentistPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
