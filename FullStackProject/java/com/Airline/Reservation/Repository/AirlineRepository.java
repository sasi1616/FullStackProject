package com.Airline.Reservation.Repository;




import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import com.Airline.Reservation.model.AirlineReservation;


public interface AirlineRepository extends JpaRepository<AirlineReservation,Long>{

	List<AirlineReservation> findByisInternationalFlight(boolean isInternationalFlight);

	List<AirlineReservation> findByFlightNameContaining(String name);

	



	
	

}
