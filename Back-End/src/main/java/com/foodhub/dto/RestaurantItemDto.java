package com.foodhub.dto;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RestaurantItemDto implements Serializable{

	private static final long serialVersionUID = -4185058148944079202L;
	
	private int id;
	private String name;
	private double price;
	private int typeId;
	private String typeName;
	private int categoryId;
	private String categoryName;
	private String ingredient;
	private String portion;
	private int restaurantId;

}
