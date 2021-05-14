package com.foodhub.domain;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import com.sun.istack.NotNull;

@Getter
@Setter
@Entity
@Table(name="restaurants")
public class Restaurant {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	private String name;
	
	@NotNull
	private String description;
	
	@NotNull
	private String address;
	
	@Column(name="hasveg")
	private Boolean hasVeg;
	
	@Column(name="haschicken")
	private Boolean hasChicken;
	
	@Column(name="hasmeat")
	private Boolean hasMeat;
	
	@Column(name="hasfish")
	private Boolean hasFish;
	
	private String contact;
	
	@Column(name="deliveredtime")
	private String deliveredTime;
	
	@Column(name="coverimage")
	private String coverImage;
	
	@Column(name="profileimage")
	private String profileImage;

	@Column(name="smalldescription")
	private String smalldescription;

	@JsonIgnore
	@OneToOne(mappedBy = "restaurant", cascade = CascadeType.ALL)
	private User user;


}
