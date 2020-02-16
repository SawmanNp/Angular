import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Observable } from "rxjs";
import { Appointment } from "../models/Appointment";
import { urls } from "../services/url.enum";
import { Schedule } from "../models/Schedule";

@Injectable({
  providedIn: "root"
})
export class AppointmentsService {
  constructor(private http: HttpService) {}
  getAdvisorSchedule(id: string) {
    return this.http.get(urls.schedule + "/" + id);
  }
  getAdvisorAppointmentsById(id: string) {
    return this.http.get(urls.advisorAppointments + "/" + id);
  }
  getAdvisorAppointments(): Observable<Appointment[]> {
    return this.http.get(urls.advisorAppointments);
  }
  getUserAppointments(): Observable<Appointment[]> {
    return this.http.get(urls.userAppointments);
  }
  setAppointment(id: string, start: Date, end: Date) {
    var data = {
      advisor_id: id,
      start_datetime: start,
      end_datetime: end
    };
    this.http.post(urls.appointments, data);
  }
}
