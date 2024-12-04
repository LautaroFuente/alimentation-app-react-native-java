package com.alimentation_app.alimentation_app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class ProgressRecords {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	private Users user;
	
	private int calories_consumed;
	private boolean is_completed;
	
	public ProgressRecords(Users user, int calories_consumed, boolean is_completed) {
		super();
		this.user = user;
		this.calories_consumed = calories_consumed;
		this.is_completed = is_completed;
	}

	public ProgressRecords() {
		super();
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public int getCalories_consumed() {
		return calories_consumed;
	}

	public void setCalories_consumed(int calories_consumed) {
		this.calories_consumed = calories_consumed;
	}

	public boolean isIs_completed() {
		return is_completed;
	}

	public void setIs_completed(boolean is_completed) {
		this.is_completed = is_completed;
	}

	public Long getId() {
		return id;
	}
	
	
}
