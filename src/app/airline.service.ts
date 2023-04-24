import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Airline } from './airline';


@Injectable({
  providedIn: 'root'
})

//all the business logics wriiten in this class
export class AirlineService {

  private baseURL = "http://localhost:8080/ARS/flightDetails";
  
  constructor(private httpClient: HttpClient) { }
  //it  create get mapping url to get all details
  getAirlinesList(): Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}`);
  }

  //it  create post mapping url to add  details
  createAirline(airline: Airline): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, airline);
  }
 //it  create get mapping url with id to get particular id details
  getAirlineById(flight_id: number): Observable<Airline>{
    return this.httpClient.get<Airline>(`${this.baseURL}/${flight_id}`);
  }
  
  //it  create put mapping url to update details
  updateAirline(flight_id: number, airline: Airline): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${flight_id}`, airline);
  }
   //it  create put mapping url to delete details
   //localhost:4200/delete/5
   deleteAirline(flight_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${flight_id}`);
   }

   //it  create get mapping url to delete details
  findByName(name : any): Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}?name=${name}`);
  }

  //it  create put mapping url with id to delete details
  updateBookingAirlineDetails(flight_id: number,airline:Airline): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${flight_id}`,airline);
   }

   deleteAll(): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
   }
   
   findByInterNationalFlight():Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}/InternationalType`);
   }
   findByDomesticFlight():Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}/DomesticType`);
   }
   
   
}