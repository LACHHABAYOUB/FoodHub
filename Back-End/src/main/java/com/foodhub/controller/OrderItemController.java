package com.foodhub.controller;

import com.foodhub.service.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.foodhub.dto.Response;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="api/orderItem")
public class OrderItemController {
	
    @Autowired
    private OrderItemService orderItemService;
    @RequestMapping(method=RequestMethod.GET)
    public Response getAllOrderItems() {
        return orderItemService.getAllOrderItems();
    }
}