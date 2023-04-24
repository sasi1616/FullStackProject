import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { ActivatedRoute } from '@angular/router';
import { AirlineService } from '../airline.service';


@Component({
  selector: 'app-airline-details',
  templateUrl: './airline-details.component.html',
  styleUrls: ['./airline-details.component.css']
})
export class AirlineDetailsComponent implements OnInit {
  flight_id: number = 0;
  airline: any = [];
  constructor(private route: ActivatedRoute, private airlineService: AirlineService) { }

  /*first it goes to ngOnit method*/
  ngOnInit(): void {
    console.log("view by id");
    this.flight_id = this.route.snapshot.params['flight_id'];

    this.airline = new Airline();//create airline object it goes service class getAirlinById method
    this.airlineService.getAirlineById(this.flight_id).subscribe( data => {
      this.airline = data;
    });

  }
   
}
