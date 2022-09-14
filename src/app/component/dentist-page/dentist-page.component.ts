import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-dentist-page',
  templateUrl: './dentist-page.component.html',
  styleUrls: ['./dentist-page.component.css']
})
export class DentistPageComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {

  }

}
