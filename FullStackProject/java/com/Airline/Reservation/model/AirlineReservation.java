package com.Airline.Reservation.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

@Entity  //it is class level annotation. it create table in database. name of the table is same as class name
@Table(name = "AirlineManagement_table")  //here i changing table name by use of @table
@DynamicUpdate  //it is class level annotation. it create table in database. name of the table is same as class name
public class AirlineReservation {
	@Id  //Used for declaring a primary key
	/*Hibernate automatically generate the values and we don’t need to set the values manually.
	 * generation type is identity(start by one and increment by one)*/
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long flight_id;

	private String flightName,source,destination;

	private Integer noOfseats,cost,NumberOfSeats,calculatedPrice;
	
	private boolean isInternationalFlight;
	
	
public AirlineReservation() {}
	
	public AirlineReservation(String flightName, String source,String destination,Integer noOfseats,Integer cost,Integer NumberOfSeats,Integer calculatedPrice,boolean isInternationalFlight) {
		this.flightName = flightName;
		this.source = source;
		this.destination = destination;
		this. noOfseats =  noOfseats;
		this.cost = cost;
		this.NumberOfSeats = NumberOfSeats;
		this.calculatedPrice = calculatedPrice;
		this.isInternationalFlight= isInternationalFlight;
	}

	public boolean getIsInternationalFlight() {
		return isInternationalFlight;
	}
	public void setIsInternationalFlight(boolean isInternationalFlight) {
		this.isInternationalFlight = isInternationalFlight;
	}
	public Integer getNumberOfSeats() {
		return NumberOfSeats;
	}
	public void setNumberOfSeats(Integer numberOfSeats) {
		NumberOfSeats = numberOfSeats;
	}
	public Integer getCalculatedPrice() {
		return calculatedPrice;
	}
	public void setCalculatedPrice(Integer calculatedPrice) {
		this.calculatedPrice = calculatedPrice;
	}
	//getters and setter fo private attribute
	public String getFlightName() {
		return flightName;
	}
	public void setFlight_name(String flightName) {
		this.flightName = flightName;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public Long getFlight_id() {
		return flight_id;
	}
	public void setFlight_id(Long flight_id) {
		this.flight_id = flight_id;
	}
	public int getNoOfseats() {
		return noOfseats;
	}
	public void setNoOfseats(int noOfseats) {
		this.noOfseats = noOfseats;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}



}