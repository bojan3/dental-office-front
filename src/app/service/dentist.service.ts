import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDTO } from '../entity/AppointmentDTO';

@Injectable({
  providedIn: 'root'
})
export class DentistService {

  httpOptions = {
    headers : new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<AppointmentDTO[]> {
    return this.http.get<AppointmentDTO[]>("http://localhost:8080/api/dentist/appointments");
  }

  cancelAppointment(id: number): Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:8080/api/dentist/appointment/cancel/" + id);
  }
}
