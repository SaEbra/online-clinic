import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { AuthServiceService } from './../../logins/auth-service.service';
 
@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {
 
  appointments: any;
 
  constructor(private appointmentService: AppointmentService,private authServiceService: AuthServiceService,private router: Router) { }
 
  ngOnInit() {
    this.getAppointmentsList();
  }
 
  getAppointmentsList() {
    this.appointmentService.getAppointmentsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(appointments => {
      this.appointments = appointments;
    });
  }
 
  deleteAppointments() {
    this.appointmentService.deleteAll().catch(err => console.log(err));
  }
 
}