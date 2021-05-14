package com.foodhub.service;

import java.util.List;
import java.util.Optional;

import com.foodhub.domain.User;
import com.foodhub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodhub.domain.Restaurant;
import com.foodhub.dto.Response;
import com.foodhub.dto.RestaurantDto;
import com.foodhub.repository.RestaurantRepository;
import com.foodhub.util.Utilities;

@Service
public class RestaurantService {
	
	@Autowired
	private RestaurantRepository restaurantRepository;

	@Autowired
	private UserService userService;

	@Autowired
	private UserRepository userRepository;
	
	public Response getAllRestaurants() {
		try {
			List<Restaurant> restaurants = (List<Restaurant>)
					restaurantRepository.findAll();
			List<RestaurantDto> restaurantsDto = Utilities.allRestaurants(restaurants);
			return Utilities.getAllRestaurants(restaurantsDto);
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}

	public Response getRestaurantById(int id) {
		try {
			Optional<Restaurant> restaurant = restaurantRepository.findById(id);
			return Utilities.getRestaurant(restaurant);
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}

	public Restaurant getRestaurantByUserId(int userId) {
		return userService.getRestaurant(userId);
	}

	public void updateRestaurant(int userId, Restaurant restaurant) {
		User user = userService.getUserById(userId);
		Restaurant entity = user.getRestaurant();
		restaurant.setId(entity.getId());

		restaurantRepository.save(restaurant);
	}


}
