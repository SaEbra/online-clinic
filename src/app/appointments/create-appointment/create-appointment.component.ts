import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { Appointment } from '../../appointment';
import { AppointmentService } from '../appointment.service';
 
@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  bookModel = new Appointment();

  genders = ['male','female'];
  genderHasError=true;
  validateGender(value){
    if(value === 'defult'){
      this.genderHasError=true;
    }else{
      this.genderHasError=false;
    }
  }
 
  appointment: Appointment = new Appointment();
  submitted = false;
 
  constructor(private appointmentService: AppointmentService) { }
 
  
  async ngOnInit(){
    
  }

 
  newAppointment(): void {
    this.submitted = false;
    this.appointment = new Appointment();
  }
 
  save() {
    this.appointmentService.createAppointment(this.appointment);
    this.appointment = new Appointment();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  onModalClose(){
    this.submitted = false;
  }
 
}