package com.alimentation_app.alimentation_app.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alimentation_app.alimentation_app.DTO.ApiResponseDTO;
import com.alimentation_app.alimentation_app.entities.Users;
import com.alimentation_app.alimentation_app.service.UserService;

@RestController
@RequestMapping("/api")
public class UsersController {

	@Autowired
	private UserService userService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("user/all")
	public ResponseEntity<ApiResponseDTO<List<Users>>> getAllUsers(){
		
		try {
			List<Users> users = this.userService.getAllUsers();
			return ResponseEntity.ok(new ApiResponseDTO<>(true, "Usuarios obtenidos exitosamente", users));
		} catch (Exception e) {
			return ResponseEntity.status(500).body(new ApiResponseDTO<>(false, "Error al obtener todos los usuarios: " + e.getMessage(), null));
		}

	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("user")
	public ResponseEntity<ApiResponseDTO<Users>> getOneUser(@RequestParam String email){
		if(email == null || email.isEmpty()) {
			return ResponseEntity.badRequest().body(new ApiResponseDTO<>(false, "El email para buscar no puede ser vacio o ser nulo", null));
		}
		
		try {
			Users user = this.userService.getOneUser(email);
			return ResponseEntity.ok(new ApiResponseDTO<>(true, "Usuario obtenido exitosamente", user));
		} catch (Exception e) {
			return ResponseEntity.status(500).body(new ApiResponseDTO<>(false, "Error al obtener al usuario: " + e.getMessage(), null));
		}

	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("user")
	public ResponseEntity<ApiResponseDTO<Users>> addUser(@RequestBody Users user){
		
		if(user == null) {
			return ResponseEntity.badRequest().body(new ApiResponseDTO<>(false, "El usuario a guardar no puede ser nulo", null));
		}
		try {
			Users existUser = this.userService.getOneUser(user.getEmail());
			if( existUser == null) {
				user.setRegistration_date(LocalDateTime.now());
				this.userService.addUser(user);
				return ResponseEntity.ok(new ApiResponseDTO<>(true, "Usuario guardado exitosamente", user));	
			}else {
				return ResponseEntity.ok(new ApiResponseDTO<>(false, "Usuario existente", user));
			}			
			
		} catch (Exception e) {
			return ResponseEntity.status(500).body(new ApiResponseDTO<>(false, "Error al agregar el usuario: " + e.getMessage(), null));
		}

	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("user/delete/{email}")
	public ResponseEntity<ApiResponseDTO<Users>> deleteUser(@PathVariable String email){
		if(email == null || email == "") {
			return ResponseEntity.badRequest().body(new ApiResponseDTO<>(false, "El email del usuario no puede ser nulo o vacio", null));
		}
		
		try {
			Long id = this.userService.getOneUser(email).getId();
	        this.userService.deleteUser(id);
	        return ResponseEntity.ok(new ApiResponseDTO<>(true, "Usuario eliminado exitosamente", null));
	    } catch (Exception e) {
	        return ResponseEntity.status(500).body(new ApiResponseDTO<>(false, "Error al eliminar el usuario: " + e.getMessage(), null));
	    }

	}
}
