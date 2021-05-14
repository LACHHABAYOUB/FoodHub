package com.foodhub.repository;
import org.springframework.data.repository.CrudRepository;

import com.foodhub.domain.ItemType;
public interface ItemTypeRepo extends CrudRepository<ItemType, Integer>{
}
