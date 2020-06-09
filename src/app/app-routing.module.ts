import { CreateAppointmentComponent } from './appointments/create-appointment/create-appointment.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { LoginComponent } from './logins/login/login.component';
import { AuthServiceService } from './logins/auth-service.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

 

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
export const routes: Routes = [
  
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'appointments', component: AppointmentsListComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'add', component: CreateAppointmentComponent },
  { path: 'login', component: LoginComponent }
];



// const routes: Routes = [
//   { path: '', redirectTo: 'add', pathMatch: 'full' },
//   { path: 'appointments', component: AppointmentsListComponent, canActivate:[AuthServiceService] },
//   { path: 'add', component: CreateAppointmentComponent },
//   { path: 'login', component: LoginComponent }
// ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }