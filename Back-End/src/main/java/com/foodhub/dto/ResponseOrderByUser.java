package com.foodhub.dto;

import java.util.List;

import com.foodhub.domain.Order;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseOrderByUser extends Response{
	
	public List<OrderDto> orders;

}
