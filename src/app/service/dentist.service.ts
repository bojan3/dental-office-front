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
    return this.http.get<AppointmentDTO[]>("http://localhost:8080/api/dentist/all");
  }

  cancelAppointment(id: number): Observable<Boolean>{
    return this.http.delete<Boolean>("http://localhost:8080/api/dentist/appointment/cancel/" + id);
  }
}
