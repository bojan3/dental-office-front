import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentDTO } from 'src/app/entity/AppointmentDTO';
import { AppointmentService } from 'src/app/service/appointment.service';
import { DentistService } from 'src/app/service/dentist.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {

  appointment!: AppointmentDTO;

  constructor(
    @Inject(MAT_DIALOG_DATA) private appointmentId: number,
    private appointmentService: AppointmentService,
    private dentistService: DentistService
  ) { }

  ngOnInit(): void {
    this.appointmentService.getAppointment(this.appointmentId).subscribe( (appointment) => this.appointment = appointment )
  }

  cancelAppointment(){
    this.dentistService.cancelAppointment(this.appointment.id).subscribe();
  }
}
