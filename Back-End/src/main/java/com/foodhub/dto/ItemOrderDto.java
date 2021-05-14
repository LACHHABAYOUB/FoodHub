package com.foodhub.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemOrderDto {
	
	private int idx;
	private String name;
	private int qty;
	private double price;

}
