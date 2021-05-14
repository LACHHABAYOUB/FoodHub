package com.foodhub.domain;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import javax.validation.constraints.Email;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	@Column(unique = true)
	private String username;
	
	@NotNull
	private String password;
	
	@Email 
	private String email;
	
	@NotNull
	@Column(name="fullname")
	private String fullName;
	
	@Column(name="profileimage")
	private String profileImage;
	
	@NotNull
	private String address;
	
	@Column(name="instructions")
	private String instruction;

	@Column(name="mobile")
	private String mobilePhone;

	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "restaurantId")
	private Restaurant restaurant;


}
