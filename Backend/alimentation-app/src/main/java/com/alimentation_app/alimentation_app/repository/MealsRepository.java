package com.alimentation_app.alimentation_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alimentation_app.alimentation_app.entities.Meals;

public interface MealsRepository extends JpaRepository<Meals, Long>{

}
