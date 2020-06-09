import { Component, OnInit, Input } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../../appointment';
 
@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
 
  @Input() appointment: Appointment;
 
  constructor(private appointmentService: AppointmentService) { }
 
  ngOnInit() {
  }
 
  updateConfirm(isConfirm: boolean) {
    this.appointmentService.updateAppointment(this.appointment.key, { confirm: isConfirm }).catch(err => console.log(err));
  }
 
  deleteAppointment() {
    this.appointmentService.deleteAppointment(this.appointment.key).catch(err => console.log(err));
  }
 
}