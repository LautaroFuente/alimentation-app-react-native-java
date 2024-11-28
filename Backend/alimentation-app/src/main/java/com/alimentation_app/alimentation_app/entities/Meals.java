package com.alimentation_app.alimentation_app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Meals {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "diet_id")
    private Diets diet;
    
    private String mealType;

	public Meals(Diets diet, String mealType) {
		super();
		this.diet = diet;
		this.mealType = mealType;
	}

	public Meals() {
		super();
	}

	public Diets getDiet() {
		return diet;
	}

	public void setDiet(Diets diet) {
		this.diet = diet;
	}

	public String getMealType() {
		return mealType;
	}

	public void setMealType(String mealType) {
		this.mealType = mealType;
	}

	public Long getId() {
		return id;
	}
    
    
}
