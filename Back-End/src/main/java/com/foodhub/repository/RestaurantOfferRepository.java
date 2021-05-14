package com.foodhub.repository;

import org.springframework.data.repository.CrudRepository;

import com.foodhub.domain.RestaurantOffer;

public interface RestaurantOfferRepository extends CrudRepository<RestaurantOffer, Integer> {

}
