import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';
import { Airline } from '../airline';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-airline',
  templateUrl: './update-airline.component.html',
  styleUrls: ['./update-airline.component.css']
})
export class UpdateAirlineComponent implements OnInit{
  flight_id: number = 1;
  airline: Airline = new Airline();
  constructor(private airlineService: AirlineService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.flight_id = this.route.snapshot.params['flight_id'];

    this.airlineService.getAirlineById(this.flight_id).subscribe(data => {
      this.airline = data;
    }, error => console.log(error));
  }

  onSubmit(){
    
    this.airlineService.updateAirline(this.flight_id, this.airline).subscribe( data =>{
    
      this.goToAirlineList();
      
    }
    , error => console.log(error));
   
   
   
  }

  goToAirlineList(){
    this.router.navigate(['/airlines']);
  }

}
