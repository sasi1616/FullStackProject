import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-airline',
  templateUrl: './create-airline.component.html',
  styleUrls: ['./create-airline.component.css']
})
export class CreateAirlineComponent implements OnInit {

  airline: Airline = new Airline();
  constructor(private airlineService: AirlineService,
    private router: Router) { }

  ngOnInit(): void {
   
  }
/** it save all the created details */
  saveAirline(){
    this.airlineService.createAirline(this.airline).subscribe( data =>{
      console.log(data);
      this.goToAirlineList();
    },
    error => console.log(error));
  }

  goToAirlineList(){
    this.router.navigate(['/airlines']);
  }
/**if click submit it check all fields are filled and save all deatails
 * not filled it display popup like It is mandatory to fill all the fields
 */
  onSubmit(){
    if((this.airline.flightName === '') || (this.airline.source==='') || (this.airline.destination=== '')  || (this.airline.noOfseats<1) || (this.airline.cost<1) ){
      var status = confirm("It is mandatory to fill all the fields");
      
    }else{
      var status = confirm("Do you want to insert details?");
      if(status==true){
      console.log(this.airline);
      this.saveAirline();
      this.router.navigate(['airlines']);//it goes to display all page
      }
    }
   
  }
 
}



















