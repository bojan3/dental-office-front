import { Component, OnInit } from '@angular/core';
import { AppointmentDTO, AppoitmentType } from 'src/app/entity/AppointmentDTO';
import { AppoitmentDuration } from 'src/app/entity/CreateAppointmentDTO';
import { AppointmentService } from 'src/app/service/appointment.service';
import { DentistService } from 'src/app/service/dentist.service';

@Component({
  selector: 'app-dentist-page',
  templateUrl: './dentist-page.component.html',
  styleUrls: ['./dentist-page.component.css']
})
export class DentistPageComponent implements OnInit {

  events: any;

  constructor(
    private dentistService: DentistService
    ) { }

  ngOnInit(): void {
    this.dentistService.getAppointments().subscribe( (appointments) => {
      console.log(appointments);
      this.toEvents(appointments)
    })
  }

    toEvents(appointments: AppointmentDTO[]){
    this.events = [];
    for(var appointment of appointments){
      if(appointment.duration.toString() === 'SHORT') {
       this.events.push(
          { title: appointment.patient.firstName, date: appointment.startDateTime, color: '#fc0303', publicId: appointment.id }
        )
      } else {
        this.events.push(
          { title: appointment.patient.firstName, date: appointment.startDateTime, color: '##03b1fc', publicId: appointment.id }
        )
      }
    } 
  }

}
