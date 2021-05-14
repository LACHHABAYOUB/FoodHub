package com.foodhub.dto;

import java.util.Optional;

import com.foodhub.domain.Restaurant;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseRestaurant extends Response{
	
	private Optional<Restaurant> restaurant;

}
