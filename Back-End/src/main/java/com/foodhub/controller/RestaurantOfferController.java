package com.foodhub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.foodhub.dto.Response;
import com.foodhub.service.RestaurantOfferService;

import com.foodhub.domain.RestaurantOffer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/restaurantOffer")
public class RestaurantOfferController {
	
	 @Autowired
	private RestaurantOfferService restaurantOfferService;
	
	@RequestMapping(method=RequestMethod.GET)
	public Response getAllOffers() {
		return restaurantOfferService.getAllRestaurantOffers();
	}

	@PostMapping
	public RestaurantOffer createRestaurantItems(@RequestBody RestaurantOffer restaurantOffer){
		return restaurantOfferService.createRestaurantOffer(restaurantOffer);
	}

}
