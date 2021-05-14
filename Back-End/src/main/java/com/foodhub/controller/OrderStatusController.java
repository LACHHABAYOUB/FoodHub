package com.foodhub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.foodhub.dto.Response;
import com.foodhub.service.OrderStatusService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="api/orderStatus")
public class OrderStatusController {
	
	@Autowired
	public OrderStatusService orderStatusService;
	
	@RequestMapping(method=RequestMethod.GET)
	public Response getAllOrderStatus() {
		return orderStatusService.getAllOrdersStatus();
	}

}
