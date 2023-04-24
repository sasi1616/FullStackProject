import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline'
import { AirlineService } from '../airline.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit{

  airlines: Airline[] = [];
  flightName: any;
 // flightName :string=" ";
 // airlineFoundBySearch :Airline[]=[];

  constructor(private airlineService: AirlineService,
    private router: Router) { }

 /* event binding is perfomed
 when i click search button it comes to this method and it goes to sevice class  mathod
 after that it goes to backend get details from back end related to serached content */

    searchByName(){
      this.airlineService.findByName(this.flightName).subscribe(data=>{
        this.airlines=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      
      });
    }
  
 //first it perfom ngoninit method it call the getAirliness() method it display all  the details

  ngOnInit(): void {
    this.getAirlines();
  }
   //get get all details from the backend
   getAirlines(){
    this.airlineService.getAirlinesList().subscribe(data => {
      this.airlines = data;
    });
  }
  /*when i click view button it comes to the airlineDetails and goes to serviceclass
  method and display details of parcticular id*/

  airlineDetails(flight_id: number){
    this.router.navigate(['airline-details', flight_id]);
    console.log("i came");
  }

  /*when i click update button it comes to the updateAirline method and goes to serviceclass
  method and display updated details of parcticular id*/

  updateAirline(flight_id: number){
    this.router.navigate(['update-airline', flight_id]);
  }
  
  deleteAirline(flight_id: number){
    this.airlineService.deleteAirline(flight_id).subscribe( data => {
      console.log(data);
      this.getAirlines();
    })
  }
  //popup for delete
  confrimDelete(airline: Airline){
    var status=confirm("You want to delete this record?");
    if(status==true){
        this.deleteAirline(airline.flight_id);
    }
    else{
        this.getAirlines();
    }
}



fetchInternationalFlight(){
   this.airlineService.findByInterNationalFlight().subscribe(
    data => {
      this.airlines = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchDomesticFlight(){
  this.airlineService.findByDomesticFlight().subscribe(
   data => {
     this.airlines = data;
       console.log(data);
     },
     error => {
       console.log(error);
     });
}
/**if i click remove all button below method called status came if i click okay
 * it goes to deleteAll method and went to back end and it delete all the records
 * or i click cancel it display all details 
 */
removeAllAirlines():void{
  var status=confirm("You want to delete this record?");
    if(status==true){
  this.airlineService.deleteAll().subscribe(data=>{
    console.log(data);
    this.getAirlines();
  },
  error=>{
    console.log(error);
  
  });
}else{
  this.getAirlines();
}
 }

 //i click book a ticket button it navigate to ticket booking component
 ticketBooking(flight_id:number){
  
  this.router.navigate(['ticket-booking',flight_id])
 }

}
