package com.foodhub.repository;
import com.foodhub.domain.OrderItem;
import org.springframework.data.repository.CrudRepository;
public interface OrderItemRepo extends CrudRepository<OrderItem, Integer>{
}
