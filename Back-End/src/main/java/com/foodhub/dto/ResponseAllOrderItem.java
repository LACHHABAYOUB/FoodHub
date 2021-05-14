package com.foodhub.dto;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseAllOrderItem extends Response{
    private List<OrderItemAll> orderItemAll;
}
