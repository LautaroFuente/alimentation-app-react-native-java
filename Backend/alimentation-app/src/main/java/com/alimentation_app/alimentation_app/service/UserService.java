package com.alimentation_app.alimentation_app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.alimentation_app.alimentation_app.entities.Users;
import com.alimentation_app.alimentation_app.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	public List<Users> getAllUsers(){
		return this.userRepository.findAll();
	}
	
	public Users getOneUser( String email) {
		Optional<Users> user = this.userRepository.findByEmail(email);
		return user.orElse(null);
	}
	
	public void addUser( Users user) {
		String hashedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(hashedPassword);
		this.userRepository.save(user);
	}
	
	public void deleteUser(Long id) {
		this.userRepository.deleteById(id);
	}
}
