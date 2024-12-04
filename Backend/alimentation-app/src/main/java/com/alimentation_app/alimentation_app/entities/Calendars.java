package com.alimentation_app.alimentation_app.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class Calendars {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private Users user;
	
	private LocalDateTime start_date;
	private String calendar_type;
	
	public Calendars(Users user, LocalDateTime start_date, String calendar_type) {
		super();
		this.user = user;
		this.start_date = start_date;
		this.calendar_type = calendar_type;
	}

	public Calendars() {
		super();
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public LocalDateTime getStart_date() {
		return start_date;
	}

	public void setStart_date(LocalDateTime start_date) {
		this.start_date = start_date;
	}

	public String getCalendar_type() {
		return calendar_type;
	}

	public void setCalendar_type(String calendar_type) {
		this.calendar_type = calendar_type;
	}

	public Long getId() {
		return id;
	}
	
	
}
