package com.alimentation_app.alimentation_app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Statistics {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	private Users user;
	
	private int total_calories;
	private int total_days_completed;
	
	public Statistics(Users user, int total_calories, int total_days_completed) {
		super();
		this.user = user;
		this.total_calories = total_calories;
		this.total_days_completed = total_days_completed;
	}

	public Statistics() {
		super();
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public int getTotal_calories() {
		return total_calories;
	}

	public void setTotal_calories(int total_calories) {
		this.total_calories = total_calories;
	}

	public int getTotal_days_completed() {
		return total_days_completed;
	}

	public void setTotal_days_completed(int total_days_completed) {
		this.total_days_completed = total_days_completed;
	}

	public Long getId() {
		return id;
	}
	
	
}
