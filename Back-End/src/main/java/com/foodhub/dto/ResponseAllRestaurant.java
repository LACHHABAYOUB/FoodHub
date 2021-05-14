package com.foodhub.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseAllRestaurant extends Response{
	
	private List<RestaurantDto> restaurants;

}
