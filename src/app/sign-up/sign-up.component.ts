import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  password='';
  username='';

  constructor(private router: Router) { }


  onSubmit(){
  
}
Register() {

  if(this.username === '' || this.password=== ''  ){
    var status = confirm("It is mandatory to fill all the fields");
  }
  else{
  var status = confirm("Registered Successfully");
  if(status==true){
    this.router.navigate(['login-page']);
  }
  else{
    this.router.navigate(['sign-up']);
  }
  }
  } 

}

