import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentDTO } from 'src/app/entity/AppointmentDTO';
import { AppointmentService } from 'src/app/service/appointment.service';
import { DentistService } from 'src/app/service/dentist.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {

  appointment!: AppointmentDTO;
  forPatient = false;
  canCancel = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) private appointmentId: number,
    private appointmentService: AppointmentService,
    private dentistService: DentistService,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.forPatient = localStorage.getItem('role') == "PATIENT";
    this.appointmentService.getAppointment(this.appointmentId).subscribe( (appointment) => this.appointment = appointment )
  }

  cancelAppointment(){
    if(this.forPatient)
      this.patientService.cancelAppointment(this.appointment.id).subscribe( (canCancel) => this.canCancel = canCancel )
    this.dentistService.cancelAppointment(this.appointment.id).subscribe();
  }
}
