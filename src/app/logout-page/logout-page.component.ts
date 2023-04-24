import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {
  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }
  ngOnInit(): void {
    var status=confirm("Are You sure you want to logout");
    if(status==true){
      this.authentocationService.logOut();
      this.router.navigate(['login-page']);
    
    }
    else{
      this.router.navigate(['airlines']);
    }
  }
}
