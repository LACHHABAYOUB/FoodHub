package com.foodhub.dto;
import com.foodhub.domain.RestaurantItem;
import com.foodhub.domain.Order;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemDto implements Serializable{
    private static final long serialVersionUID = 5723678264008792165L;
    private Integer id;
    private Double price;
    private Integer quantity;
    private Order order;
    private RestaurantItem restaurantItem;
}
