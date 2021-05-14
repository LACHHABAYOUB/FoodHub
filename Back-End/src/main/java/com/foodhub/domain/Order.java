package com.foodhub.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="orders")
public class Order {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="created_on")
	private Date createdOn;

	private String number;
	
	private String address;
	
	@Column(name="instructions")
	private String instruction;
	
	@ManyToOne
	@JoinColumn(name="restaurantid")
	private Restaurant restaurant;
	
	@ManyToOne
	@JoinColumn(name="userid")
	private User user;
	
	@ManyToOne
	@JoinColumn(name="orderstatusid")
	private OrderStatus orderStatus;
	
	@OneToMany(mappedBy="order")
	private List<OrderItem> orderItems;

}
