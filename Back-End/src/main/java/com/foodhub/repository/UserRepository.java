package com.foodhub.repository;

import com.foodhub.domain.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.foodhub.domain.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {


	Optional<User> findByUsername(String username);

	@Query("select u.restaurant from User u where u.id = :id")
	Restaurant getRestaurant(int id);

	@Query("select u from User u where id = ?1")
	public User getUser(int userId);

}
