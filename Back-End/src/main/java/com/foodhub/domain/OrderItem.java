package com.foodhub.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="order_items")
public class OrderItem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private Double price;
	
	private Integer quantity;
	
	@ManyToOne
	@JoinColumn(name="orderid")
	private Order order;
	
	@ManyToOne
	@JoinColumn(name="restaurantitemid")
	private RestaurantItem restaurantItem;

}
