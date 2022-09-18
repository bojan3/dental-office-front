import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DentistService } from 'src/app/service/dentist.service';
import { AppointmentDTO } from 'src/app/entity/AppointmentDTO';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';

defineFullCalendarElement();

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  appointments: AppointmentDTO[] = [];
  
  @Input()
  events = [];

  @Input()
  forPatient = false;

  calendarOptions!: CalendarOptions;

  constructor(
    private dentistService: DentistService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    setTimeout( () => {
      console.log(this.events);
      this.calendarOptions = {
            plugins: [dayGridPlugin],
            initialView: 'dayGridWeek',
            events: this.events,
            eventClick: this.showDetails.bind(this),
            headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridWeek,dayGridDay'
      },  businessHours: {
            daysOfWeek: [ 1, 2, 3, 4, 5 ],
            startTime: '09:00',
            endTime: '17:00',
      }
    }; }, 2200);
    
  }

  showDetails(args: any){
    console.log(args.event);
    // this.dialog.open(@Inject(MAT_DIALOG_DATA) public data: args.event._def.extendedProps.publicId)
    
    if(args.event._def.extendedProps.mine){
      this.dialog.open(AppointmentDialogComponent, {
        data: args.event._def.extendedProps.publicId
      });
    }
  }

}
