package com.alimentation_app.alimentation_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alimentation_app.alimentation_app.repository.ProgressRecordsRepository;

@Service
public class ProgressRecordsService {

	@Autowired
	private ProgressRecordsRepository progressRecordsRepository;
}
