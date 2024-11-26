package com.alimentation_app.alimentation_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alimentation_app.alimentation_app.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long>{

}
