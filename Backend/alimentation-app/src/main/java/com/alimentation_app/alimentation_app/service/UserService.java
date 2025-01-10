package com.alimentation_app.alimentation_app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alimentation_app.alimentation_app.entities.Users;
import com.alimentation_app.alimentation_app.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public List<Users> getAllUsers(){
		return this.userRepository.findAll();
	}
}
