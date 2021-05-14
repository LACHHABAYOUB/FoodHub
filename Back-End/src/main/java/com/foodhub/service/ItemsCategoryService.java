package com.foodhub.service;
import com.foodhub.dto.Response;
import com.foodhub.repository.ItemsCategoryRepo;
import com.foodhub.util.Utilities;
import com.foodhub.domain.ItemCategory;
import com.foodhub.dto.ItemsCategoryAll;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class ItemsCategoryService {
    @Autowired
    private ItemsCategoryRepo itemCategoryRepo;
    public Response getAllItemCateg() {
        try {
            List<ItemCategory> itemCategories = (List<ItemCategory>)
                    itemCategoryRepo.findAll();
            List<ItemsCategoryAll> itemCategoriesDto = Utilities.allItemCateg(itemCategories);
            return Utilities.getAllItemsCategory(itemCategoriesDto);
        }catch (Exception e) {
            String error = "ERROR::" + e;
            return Utilities.error(error);
        }
    }
}
