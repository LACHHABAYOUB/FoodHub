package com.foodhub.dto;

import java.util.List;

import com.foodhub.domain.RestaurantOffer;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseAllOffer extends Response {
	
	private List<RestaurantOffer> restaurantOffers;

}
