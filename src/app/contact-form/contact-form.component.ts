import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  email='';
  phoneNumber='';
  name='';
  message='';

  constructor(private router: Router) { }
  contactUs(){
    if(this.name === '' || this.email=== '' || this.phoneNumber=== '' ||this.message=== '' ){
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
    var status = confirm("Registered Successfully");
    if(status==true){
      this.router.navigate(['airlines']);
    }
    else{
      this.router.navigate(['contact-form']);
    }
    }

  }

}
