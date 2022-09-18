import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateAppointmentDTO, AppoitmentDuration } from '../entity/CreateAppointmentDTO';
import { AppointmentDTO } from '../entity/AppointmentDTO';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  httpOptions = {
    headers : new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<any> {
    return this.http.get("http://localhost:8080/api/dentist/all");
  }

  createAppointment(appointment: CreateAppointmentDTO): Observable<any>{
    console.log(appointment)
    return this.http.post<CreateAppointmentDTO>("http://localhost:8080/api/appointment/create", appointment);
  }

  getAppointment(id: number): Observable<AppointmentDTO> {
    return this.http.get<AppointmentDTO>("http://localhost:8080/api/appointment/get/" + id);
  }
}
