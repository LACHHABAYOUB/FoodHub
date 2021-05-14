package com.foodhub.repository;
import com.foodhub.domain.ItemCategory;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
public interface ItemsCategoryRepo extends CrudRepository<ItemCategory, Integer>{
   // List<ItemCategory> getAll();
}
