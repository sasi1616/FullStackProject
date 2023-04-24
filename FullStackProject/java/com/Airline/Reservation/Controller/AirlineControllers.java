package com.Airline.Reservation.Controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Airline.Reservation.ExceptionHandling.ResourceNotFoundException;
import com.Airline.Reservation.Repository.AirlineRepository;
import com.Airline.Reservation.model.AirlineReservation;
@CrossOrigin(origins = "http://localhost:4200")
/*RestController annotation is used to create RESTful web services
 *RestController contains @Controller and @ResponseBody
 *@RestController is used to create controllers for REST APIs which can return JSON
 * @ResponseBody annotation tells a controller that the object returned is automatically serialized into JSON 
 * and passed back into the HttpResponse object*/
@RestController
@RequestMapping("/ARS/")//it used to map the web request on to class and create base URL
public class AirlineControllers {

	@Autowired
	//@Autowired annotation is used for automatic dependency injection
	private AirlineRepository airlineRepository;

	/*In getAllAirlineDetails method i created list all the details are stored
	 * in this list.and it search the searched string present or not if it present it return these list
	 * or it return all the details otherwise it return internal server error   */
	
	    @GetMapping("/flightDetails")	
		

		public ResponseEntity<List<AirlineReservation>> getAllAirlineDetails(@RequestParam(required = false) String name){

		try {

		List<AirlineReservation> airlineList = new ArrayList<AirlineReservation>();

		if(name != null) {

			airlineRepository.findByFlightNameContaining(name).forEach(airlineList::add);

		return new ResponseEntity<>(airlineList, HttpStatus.OK);

		}

		else {

			airlineList = airlineRepository.findAll();

		return new ResponseEntity<>(airlineList, HttpStatus.OK);

		}

		}

		catch(Exception excep) {

		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

		}

		}

		

		// create flight rest api
		@PostMapping("/flightDetails")
		//@RequestBody used to convert httprequest into java object
		public AirlineReservation createAirlineReservation(@RequestBody AirlineReservation airline) {
			return airlineRepository.save(airline);//it saves all details in airline
		}

		
		
		// get flight details by id rest api
		@GetMapping("/flightDetails/{id}")
		//@PathVariable annotation is used to extract the value from the URI
		public ResponseEntity<AirlineReservation> getAirlineById(@PathVariable Long id) {
			AirlineReservation airline = airlineRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("flight not exist with id :" + id));
			return ResponseEntity.ok(airline);
		}
		
		
		//update flight details by id
		@PutMapping("/flightDetails/{id}")
		//@PathVariable annotation is used to extract the id from the URl
		public ResponseEntity<AirlineReservation> updateAirline(@PathVariable Long id, @RequestBody AirlineReservation flightDetails){
			/*extract the id from the URl by using @PathVariable
			 * if the given id exist it update details  otherwise it print flight not exist with id
			 * and it save the changes*/
			AirlineReservation airline_update = airlineRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("flight not exist with id :" + id));

			airline_update.setSource(flightDetails.getSource());
			airline_update.setDestination(flightDetails.getDestination());
			airline_update.setCost(flightDetails.getCost());
			airline_update.setNoOfseats(flightDetails.getNoOfseats());
			

			AirlineReservation updatedAirline = airlineRepository.save(airline_update);
			return ResponseEntity.ok(updatedAirline);
		}


		// delete employee rest api
		@DeleteMapping("/flightDetails/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteAirline(@PathVariable Long id){
			/*extract the id from the URl by using @PathVariable
			 * if the given id exist it delete details and return true it print flight not exist with id*/
			AirlineReservation airline = airlineRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("flight not exist with id :" + id));

			airlineRepository.delete(airline);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

      //it delete all details from list
       @DeleteMapping("/flightDetails")
		public ResponseEntity<HttpStatus> deleteAllAirlines(){
				try {
				airlineRepository.deleteAll();
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}catch(Exception e) {
					return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
				}
			}
       
       //it display international type flight details
		@GetMapping("/flightDetails/InternationalType")
		public ResponseEntity<List<AirlineReservation>>findByInternationFlight(){
			try {
				List<AirlineReservation> internationalList=airlineRepository.findByisInternationalFlight(true);
				if(internationalList.isEmpty()) {
					return new ResponseEntity<>(internationalList,HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(internationalList,HttpStatus.OK);
			}catch(Exception e){
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		
		//it display domestic type flight details
		@GetMapping("/flightDetails/DomesticType")
		public ResponseEntity<List<AirlineReservation>>findByDomesticFlight(){
			try {
				List<AirlineReservation> internationalList=airlineRepository.findByisInternationalFlight(false);
				if(internationalList.isEmpty()) {
					return new ResponseEntity<>(internationalList,HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(internationalList,HttpStatus.OK);
			}catch(Exception e){
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		/*public ResponseEntity<AirlineReservation> updateBookingAirlineDetails(@PathVariable Long id, @RequestBody AirlineReservation flightDetails){
			/*extract the id from the URl by using @PathVariable
			 * if the given id exist it update details  otherwise it print flight not exist with id
			 * and it save the changes
			AirlineReservation airline_update = airlineRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("flight not exist with id :" + id));
			airline_update.setNoOfseats(flightDetails.getNoOfseats());		
			airline_update.setNumberOfSeats(flightDetails.getNumberOfSeats());
			airline_update.setCalculatedPrice(flightDetails.getCalculatedPrice());
			

			AirlineReservation updatedAirline = airlineRepository.save(airline_update);
			return ResponseEntity.ok(updatedAirline);
		}*/


		
		

}
		
	

