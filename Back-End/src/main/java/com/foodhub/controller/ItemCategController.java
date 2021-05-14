package com.foodhub.controller;
import com.foodhub.service.ItemsCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.foodhub.dto.Response;
import com.foodhub.service.RestaurantService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="api/itemcateg")
public class ItemCategController {
    @Autowired
    private ItemsCategoryService itemCategService;

    @RequestMapping(method=RequestMethod.GET)
    public Response getAllItemCateg() {
        return itemCategService.getAllItemCateg();
    }
}
