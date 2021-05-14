package com.foodhub.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.foodhub.dto.ItemTypeAll;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="restaurant_items")
public class RestaurantItem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	
	private Double price;
	
	private String portion;
	
	@Column(name="ingredients")
	private String ingredient;
	
	@ManyToOne
	@JoinColumn(name="restaurantid")
	private Restaurant restaurant;
	
	@ManyToOne
	@JoinColumn(name="itemscategoryid")
	private ItemCategory itemCategory;
	
	@ManyToOne
	@JoinColumn(name="itemstypeid")
	private ItemType itemType;



}
