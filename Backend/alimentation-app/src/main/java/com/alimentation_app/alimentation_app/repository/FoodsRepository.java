package com.alimentation_app.alimentation_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alimentation_app.alimentation_app.entities.Foods;

public interface FoodsRepository extends JpaRepository<Foods, Long>{

}
