import { Component } from '@angular/core';
import { AuthServiceService } from './logins/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-clinic';
  constructor(private authServiceService: AuthServiceService) { }

  isAuth=true;
  async ngOnInit(){
    var isUserLoggedin = await this.authServiceService.isLoggedin();
    if(isUserLoggedin){
      this.isAuth=true;
    }else{
      this.isAuth=false;
    }
  }
  onLogout(){
    this.isAuth=false;
    this.authServiceService.logout();
  }
}

