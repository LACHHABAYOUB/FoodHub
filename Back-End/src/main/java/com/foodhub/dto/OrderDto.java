package com.foodhub.dto;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDto {
	private int id;
	private String address;
	private String instruction;
	private String createdOn;
	private int statusId;
	private String statusName;
	private int restaurantId;
	private String restaurantName;
	private String itemslist;
	private List<ItemOrderDto> items;
	private String username;
	private String ordernumber;
	private double totalPrice;

}
