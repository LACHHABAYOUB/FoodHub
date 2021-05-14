package com.foodhub.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseAllRestaurantItem extends Response{
	
	public List<RestaurantItemDto> restaurantItems;

}
