import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDTO } from 'src/app/entity/AppointmentDTO';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {

  events: any;

  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.patientService.getAppointments(localStorage.getItem('phoneNumber')).subscribe( (appointments) => {
      console.log(appointments)
      this.toEvents(appointments)
    }
    
    )
  }

  toEvents(appointments: AppointmentDTO[]){
    this.events = [];
    for(var appointment of appointments){
      this.events.push(this.toEvent(appointment))
    } 
  }

  toEvent(appointment: AppointmentDTO){
    if (appointment.mine){
      
      if (appointment.duration.toString() === 'SHORT'){
        return  { title: appointment.patient.firstName, date: appointment.startDateTime, color: '#a8e1fa', publicId: appointment.id, mine: true }
      } else {
        return { title: appointment.patient.firstName, date: appointment.startDateTime, color: '#181cf7', publicId: appointment.id, mine: true }
      }

    } else {
      if (appointment.duration.toString() === 'SHORT'){
        return { title: appointment.patient.firstName, date: appointment.startDateTime, color: '#fbc0c2', publicId: appointment.id, mine: false }
      } else {
        return { title: appointment.patient.firstName, date: appointment.startDateTime, color: '#f9000b', publicId: appointment.id, mine: false }
      }
    }
  }
 

}
