package com.alimentation_app.alimentation_app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class MealsFoods {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@ManyToOne
	@JoinColumn(name = "meal_id")
	private Meals meal;
	
	@ManyToOne
	@JoinColumn(name = "food_id")
	private Foods food;
	
	private float quantity;

	public MealsFoods(Meals meal, Foods food, float quantity) {
		super();
		this.meal = meal;
		this.food = food;
		this.quantity = quantity;
	}

	public MealsFoods() {
		super();
	}

	public Meals getMeal() {
		return meal;
	}

	public void setMeal(Meals meal) {
		this.meal = meal;
	}

	public Foods getFood() {
		return food;
	}

	public void setFood(Foods food) {
		this.food = food;
	}

	public float getQuantity() {
		return quantity;
	}

	public void setQuantity(float quantity) {
		this.quantity = quantity;
	}

	public Long getId() {
		return id;
	}
	
	
}
