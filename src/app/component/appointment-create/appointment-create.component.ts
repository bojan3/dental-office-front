import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AppoitmentType } from 'src/app/entity/AppointmentDTO';
import { AppoitmentDuration, CreateAppointmentDTO } from 'src/app/entity/CreateAppointmentDTO';
import { AppointmentService } from 'src/app/service/appointment.service';


@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  appointmentForm!: UntypedFormGroup;
  hours = [ '9', '10', '11', '12', '13', '14', '15', '16', '17']
  minutes = [ { viewValue: '30', value: 30}, {viewValue: '00', value: 0} ];
  durations = [ { viewValue:'30', value: AppoitmentDuration.SHORT}, {viewValue: '60', value: AppoitmentDuration.LONG} ];
  types = Object.keys(AppoitmentType);

  constructor(
    private formBuilder: UntypedFormBuilder,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(15)])],
      date: [],
      hours: [],
      minutes: [],
      duration: [],
      type: []
    });
  }

  createAppointment(){
    var dateTime = this.appointmentForm.value.date
    dateTime.setHours(this.appointmentForm.value.hours)
    dateTime.setMinutes(this.appointmentForm.value.minutes)
    var appointment = new CreateAppointmentDTO(this.appointmentForm.value.phoneNumber, dateTime, this.appointmentForm.value.duration, Number(this.appointmentForm.value.type));
    this.appointmentService.createAppointment(appointment).subscribe()
  }
}
