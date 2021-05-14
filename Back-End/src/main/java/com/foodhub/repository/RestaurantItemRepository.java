package com.foodhub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.foodhub.domain.RestaurantItem;

public interface RestaurantItemRepository extends CrudRepository<RestaurantItem, Integer> {
	
	@Query("Select i from RestaurantItem i where i.restaurant.id = ?1 ")
	public List<RestaurantItem> getItemsByRestaurant(int id);

	@Query("select i from RestaurantItem i where id = ?1")
	public RestaurantItem getItem(int idItem);

//	@Modifying(clearAutomatically = true)
//	@Query("update RestaurantItem i set i.active = false where i.id = ?1")
//	public void deactivateItem(int id);

}
