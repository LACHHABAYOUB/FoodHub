package com.foodhub.domain;

import java.util.Date;

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
@Table(name="restaurant_offers")
public class RestaurantOffer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	
	private String code;
	
	@Column(name="create_on")
	private Date createdOn;
	
	@Column(name="expired_on")
	private Date expiredOn;
	
	@ManyToOne
	@JoinColumn(name="restaurantsid")
	private Restaurant restaurant;

}
