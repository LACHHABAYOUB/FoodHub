package com.foodhub.controller;

import com.foodhub.domain.Restaurant;
import com.foodhub.dto.RestaurantItemDto;
import com.foodhub.service.RestaurantService;
import com.foodhub.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.foodhub.dto.Response;
import com.foodhub.service.RestaurantItemService;
import com.foodhub.domain.RestaurantItem;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class RestaurantItemController {

	@Autowired
	private RestaurantItemService restaurantItemService;

	@Autowired
	private RestaurantService restaurantService;

	@GetMapping("/restaurantItem")
	public List<RestaurantItem> getAllRestaurantItems() {
		return restaurantItemService.getAllRestaurantItems();
	}

	@RequestMapping(value="/restaurantItem/{id}",method=RequestMethod.GET)
	public Response getRestaurantItems(@PathVariable int id) {
		return restaurantItemService.getAllRestaurantItems(id);
	}

	//Andy part
	@GetMapping("/api/restaurantItem")
	public Response getRestaurantItems(){
		int userId = JWTUtil.getCurrentUserId();
		return restaurantItemService.getRestaurantItemsByUserId(userId);
	}

	@DeleteMapping("/api/restaurantItem/{id}")
	public ResponseEntity<String> deleteRestaurantItem(@PathVariable int id){
		boolean result = restaurantItemService.deleteItem(id);

		if (result){
			return ResponseEntity.ok("Deleted");
		}
		else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Can not delete");
		}
	}

	@RequestMapping(value="/api/restaurantItem", method=RequestMethod.POST)
	public Response addRestaurantItem(@RequestBody RestaurantItemDto restaurantItemDto){
		int userId = JWTUtil.getCurrentUserId();
		Restaurant restaurant = restaurantService.getRestaurantByUserId(userId);
		restaurantItemDto.setRestaurantId(restaurant.getId());
		return restaurantItemService.addItem(restaurantItemDto);
	}

	@RequestMapping(value="/api/restaurantItem",method=RequestMethod.PUT)
	public Response editRestaurantItem(@RequestBody RestaurantItemDto restaurantItemDto){
		return restaurantItemService.editRestaurantItem(restaurantItemDto);
	}

}
