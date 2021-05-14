package com.foodhub.dto;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseAllOrderStatus extends Response{
    private List<OrderStatusAll> orderStatus;
}
