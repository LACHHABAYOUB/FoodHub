package com.foodhub.service;
import com.foodhub.domain.ItemType;
import com.foodhub.dto.*;
import com.foodhub.repository.ItemTypeRepo;
import com.foodhub.repository.ItemsCategoryRepo;
import com.foodhub.util.Utilities;
import com.foodhub.dto.Response;
import com.foodhub.repository.ItemsCategoryRepo;
import com.foodhub.util.Utilities;
import com.foodhub.domain.ItemCategory;
import com.foodhub.dto.ItemsCategoryAll;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

@Service
public class ItemTypeService {
    @Autowired
    private ItemTypeRepo itemTypeRepo;
    public Response getAllItemType() {
        try {
            List<ItemType> itemTypies = (List<ItemType>)
                    itemTypeRepo.findAll();
            List<ItemTypeAll> itemTypiesDto = Utilities.allItemType(itemTypies);
            return Utilities.getAllItemsType(itemTypiesDto);
        }catch (Exception e) {
            String error = "ERROR::" + e;
            return Utilities.error(error);
        }
    }
}

