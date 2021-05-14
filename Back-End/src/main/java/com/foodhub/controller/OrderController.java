package com.foodhub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.foodhub.dto.OrderDto;
import com.foodhub.dto.Response;
import com.foodhub.dto.UpdateOrderDto;
import com.foodhub.service.OrderService;
import com.foodhub.util.JWTUtil;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="api/order")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@RequestMapping(method=RequestMethod.GET)
	public Response getOrderByUser() {
		int id = JWTUtil.getCurrentUserId();

		return orderService.getOrdersByUser(id);
	}
	
	@RequestMapping(value="/pending",method=RequestMethod.GET)
	public Response getPendingOrderByUser() {
		int id = JWTUtil.getCurrentUserId();
		return orderService.getPendingOrdersByUser(id);
	}


	@RequestMapping(value="/restopending",method=RequestMethod.GET)
	public Response getPendingOrderByRest() {
		int id = JWTUtil.getCurrentUserId();
		return orderService.getPendingOrdersByRest(id);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Response createOrder(@RequestBody OrderDto orderDto) {
		int id = JWTUtil.getCurrentUserId();
		return orderService.addOrder(id, orderDto);
	}
	
	@RequestMapping(method=RequestMethod.PUT)
	public Response editOrder(@RequestBody UpdateOrderDto updateOrderDto) {
		return orderService.updateOrder(updateOrderDto);
	}

}
