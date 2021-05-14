package com.foodhub.repository;

import com.foodhub.domain.OrderStatus;
import org.springframework.data.repository.CrudRepository;
public interface OrderStatusRepo extends CrudRepository<OrderStatus, Integer>{
}
