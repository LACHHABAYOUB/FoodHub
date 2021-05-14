package com.foodhub.controller;

import com.foodhub.domain.Restaurant;
import com.foodhub.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.foodhub.dto.Response;
import com.foodhub.service.RestaurantService;

@RestController
//@CrossOrigin(origins="*")
//@RequestMapping(path="/restaurants")
public class RestaurantController {
	
	@Autowired
	private RestaurantService restaurantService;
	
	@RequestMapping(value="/restaurants", method=RequestMethod.GET)
	public Response getAllRestaurants() {
		return restaurantService.getAllRestaurants();
	}
	
	@RequestMapping(value="/restaurants/{id}",method=RequestMethod.GET)
	public Response getRestaurant(@PathVariable("id") int id) {
		return restaurantService.getRestaurantById(id);
	}


	@GetMapping("/api/restaurants")
	public ResponseEntity<Restaurant> getRestaurant() {
		int userId = JWTUtil.getCurrentUserId();
		Restaurant restaurant = restaurantService.getRestaurantByUserId(userId);
		return ResponseEntity.ok(restaurant);
	}

	@PostMapping("/api/restaurants")
	public void updateRestaurant(@RequestBody Restaurant restaurant) {
		int userId = JWTUtil.getCurrentUserId();
		restaurantService.updateRestaurant(userId, restaurant);
	}



}
