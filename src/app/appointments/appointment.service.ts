import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Appointment } from './../appointment';
 
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 
  private dbPath = '/appointments';
 
  appointmentsRef: AngularFireList<Appointment> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.appointmentsRef = db.list(this.dbPath);
  }
 
  createAppointment(appointment: Appointment): void {
    console.log(appointment);
    this.appointmentsRef.push(appointment);
  }
 
  updateAppointment(key: string, value: any): Promise<void> {
    return this.appointmentsRef.update(key, value);
  }
 
  deleteAppointment(key: string): Promise<void> {
    return this.appointmentsRef.remove(key);
  }
 
  getAppointmentsList(): AngularFireList<Appointment> {
    return this.appointmentsRef;
  }
 
  deleteAll(): Promise<void> {
    return this.appointmentsRef.remove();
  }
}