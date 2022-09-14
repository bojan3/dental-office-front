import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateAppointmentDTO, AppoitmentDuration } from '../entity/CreateAppointmentDTO';

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

  createAppointment(): Observable<any>{
    const createAppointmentDTO = new CreateAppointmentDTO("+381 60 342 12 12", new Date(), AppoitmentDuration.SHORT);
    return this.http.post<CreateAppointmentDTO>("http://localhost:8080/api/appointment/create", createAppointmentDTO);
  }
}
