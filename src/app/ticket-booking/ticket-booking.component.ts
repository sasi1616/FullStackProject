import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit{
  
    flight_id: number = 1;
    airline: Airline = new Airline();
    constructor(private airlineService: AirlineService,
      private route: ActivatedRoute,
      private router: Router) { }
     /*i click calculate button my function called 
     in this method subtract seats from the seting capacity
     and it calculate total cost  */
      myFunction(){
        this.airline.noOfseats-=this.airline.numberOfSeats;
        this.airline.calculatedPrice=this.airline.numberOfSeats*(this.airline.cost);
        
      }
    //it display popup and go display page
      proceedPayment(){
        var status=confirm("Thank you for booking");
        if(status==true){
        this.airlineService.updateAirline(this.flight_id, this.airline).subscribe( data =>{
         this. goToAirlineList();
            
        }
        , error => console.log(error));
       
       }else{
        this.router.navigate(['/ticket-booking']);
       }
      }
      //it gets details of particular id 
    ngOnInit(): void {
      this.flight_id = this.route.snapshot.params['flight_id'];
  
      this.airlineService.getAirlineById(this.flight_id).subscribe(data => {
        this.airline = data;
      }, error => console.log(error));

      
    }

   
  
    goToAirlineList(){
      this.router.navigate(['/airlines']);
    }
  
  }
  


