package com.foodhub.service;

import java.util.ArrayList;
import java.util.List;

import com.foodhub.domain.User;
import com.foodhub.repository.OrderRepository;
import com.foodhub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodhub.dto.Response;
import com.foodhub.dto.RestaurantItemDto;
import com.foodhub.repository.RestaurantItemRepository;
import com.foodhub.util.Utilities;

import com.foodhub.domain.RestaurantItem;

@Service
public class RestaurantItemService {
	
	@Autowired
	private RestaurantItemRepository restaurantItemRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private OrderRepository orderRepository;
	
	public Response getAllRestaurantItems(int id) {
		try {
			List<RestaurantItem> restaurantItems = new ArrayList<RestaurantItem>();
			restaurantItems = restaurantItemRepository.getItemsByRestaurant(id);
			List<RestaurantItemDto> restaurantItemsDto = Utilities.getAllRestaurantItem(restaurantItems);
			return Utilities.getAllRestaurantItems(restaurantItemsDto);
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}
	public List<RestaurantItem> getAllRestaurantItems(){
		return (List<RestaurantItem>) restaurantItemRepository.findAll();

	}

	public Response addItem(RestaurantItemDto itemDto) {
		try {
			RestaurantItem restaurantItem = Utilities.addItem(itemDto);
			if(restaurantItem == null) {
				return Utilities.itemNotCreated();
			}
			restaurantItemRepository.save(restaurantItem);
			return Utilities.successCreation();
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}


	//Andy part
	public Response getRestaurantItemsByUserId(int userId) {
		try {
			User user = userRepository.findById(userId).get();

			List<RestaurantItem> restaurantItems = new ArrayList<RestaurantItem>();
			restaurantItems = restaurantItemRepository.getItemsByRestaurant(user.getRestaurant().getId());

			List<RestaurantItemDto> restaurantItemsDto = Utilities.getAllRestaurantItem(restaurantItems);
			return Utilities.getAllRestaurantItems(restaurantItemsDto);
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}
	
	public Response editRestaurantItem(RestaurantItemDto restaurantItemDto) {
		RestaurantItem restaurantItem = restaurantItemRepository
				.getItem(restaurantItemDto.getId());
		if(restaurantItem == null) {
			return Utilities.itemNotCreated();
		}
		RestaurantItem restaurantItemUpdated = Utilities
				.editItem(restaurantItem, restaurantItemDto);
		restaurantItemRepository.save(restaurantItemUpdated);
		return Utilities.successUpdate();
	}

	public boolean deleteItem(int itemId){
		int count = orderRepository.validateToDelete(itemId);
		System.out.println("count: " + count);

		if (count == 0) {
			restaurantItemRepository.deleteById(itemId);
			//			RestaurantItem restaurantItem = restaurantItemRepository.findById(itemId).get();
			//			restaurantItem;
			 //restaurantItemRepository.save(restaurantItem);
			//restaurantItemRepository.deactivateItem(itemId);
			return true;
		}
		return false;

	}

}
