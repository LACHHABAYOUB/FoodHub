package com.foodhub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodhub.domain.RestaurantOffer;
import com.foodhub.dto.Response;
import com.foodhub.repository.RestaurantOfferRepository;
import com.foodhub.util.Utilities;

@Service
public class RestaurantOfferService {
	
	
	@Autowired
	private RestaurantOfferRepository restaurantOfferRepository;

	public RestaurantOffer createRestaurantOffer(RestaurantOffer restaurantOffer) {
		return restaurantOfferRepository.save(restaurantOffer);
	}

	public Response getAllRestaurantOffers() {
		try {
			List<RestaurantOffer> restaurantOffers = (List<RestaurantOffer>) 
					restaurantOfferRepository.findAll();
			return Utilities.getAllRestaurantOffers(restaurantOffers);
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}

}
