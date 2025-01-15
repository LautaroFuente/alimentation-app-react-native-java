package com.alimentation_app.alimentation_app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alimentation_app.alimentation_app.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long>{

	Optional<Users> findByEmail(String email);
}
