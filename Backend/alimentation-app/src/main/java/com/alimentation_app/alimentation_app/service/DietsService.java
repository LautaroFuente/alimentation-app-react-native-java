package com.alimentation_app.alimentation_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alimentation_app.alimentation_app.repository.DietsRepository;

@Service
public class DietsService {

	@Autowired
	private DietsRepository dietsRepository;
}
