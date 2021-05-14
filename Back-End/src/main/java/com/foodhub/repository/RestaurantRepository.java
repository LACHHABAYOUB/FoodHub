package com.foodhub.repository;

import com.foodhub.domain.Restaurant;
import com.foodhub.dto.ItemTypeAll;
import org.springframework.data.repository.CrudRepository;

public interface RestaurantRepository extends CrudRepository<Restaurant, Integer>{

}
