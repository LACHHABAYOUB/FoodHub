package com.foodhub.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.foodhub.domain.*;
import com.foodhub.dto.ItemOrderDto;
import com.foodhub.dto.ItemTypeAll;
import com.foodhub.dto.ItemsCategoryAll;
import com.foodhub.dto.OrderDto;
import com.foodhub.dto.OrderItemAll;
import com.foodhub.dto.OrderStatusAll;
import com.foodhub.dto.Response;
import com.foodhub.dto.ResponseAllItemCategory;
import com.foodhub.dto.ResponseAllItemType;
import com.foodhub.dto.ResponseAllOffer;
import com.foodhub.dto.ResponseAllOrderItem;
import com.foodhub.dto.ResponseAllOrderStatus;
import com.foodhub.dto.ResponseAllRestaurant;
import com.foodhub.dto.ResponseAllRestaurantItem;
import com.foodhub.dto.ResponseOrderByUser;
import com.foodhub.dto.ResponseRestaurant;
import com.foodhub.dto.RestaurantDto;
import com.foodhub.dto.RestaurantItemDto;

public class Utilities {

	public static Response getAllRestaurants(List<RestaurantDto> restaurants) {
		ResponseAllRestaurant response = new ResponseAllRestaurant();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS_GET.getMessage());
		response.setRestaurants(restaurants);
		return response;
	}

	public static Response getAllItemsCategory(List<ItemsCategoryAll> itemCateg) {
		ResponseAllItemCategory response = new ResponseAllItemCategory();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS_GET.getMessage());
		response.setItemCateg(itemCateg);
		return response;
	}

	public static Response getAllItemsType(List<ItemTypeAll> itemType) {
		ResponseAllItemType response = new ResponseAllItemType();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS_GET.getMessage());
		response.setItemtype(itemType);
		return response;
	}

	public static List<RestaurantDto> allRestaurants(List<Restaurant> restaurants) {
		List<RestaurantDto> restaurantsDto = new ArrayList<RestaurantDto>();
		RestaurantDto restaurantDto;
		for (Restaurant restaurant : restaurants) {
			restaurantDto = new RestaurantDto();
			restaurantDto.setId(restaurant.getId());
			restaurantDto.setName(restaurant.getName());
			restaurantDto.setProfileimage(restaurant.getProfileImage());
			restaurantDto.setSmalldescription(restaurant.getSmalldescription());
			restaurantDto.setName(restaurant.getName());
			restaurantDto.setDescription(restaurant.getDescription());
			restaurantDto.setDeliveredTime(restaurant.getDeliveredTime());
			restaurantsDto.add(restaurantDto);
		}
		return restaurantsDto;
	}

	public static Response getAllOrderStatus(List<OrderStatusAll> order) {
		ResponseAllOrderStatus response = new ResponseAllOrderStatus();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS_GET.getMessage());
		response.setOrderStatus(order);
		return response;
	}

	public static Response getAllOrderItems(List<OrderItemAll> orderItem) {
		ResponseAllOrderItem response = new ResponseAllOrderItem();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS_GET.getMessage());
		response.setOrderItemAll(orderItem);
		return response;
	}

	public static Response error(String errorMessage) {
		Response response = new Response();
		response.setResponseCode(ResponseCode.ERROR.getResponseCode());
		response.setResponseMessage(errorMessage);
		return response;
	}

	public static Response getRestaurant(Optional<Restaurant> restaurant) {
		ResponseRestaurant response = new ResponseRestaurant();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS_GET.getMessage());
		response.setRestaurant(restaurant);
		return response;
	}

	public static List<RestaurantItemDto> getAllRestaurantItem(List<RestaurantItem> restaurantItems) {
		List<RestaurantItemDto> restaurantItemsDto = new ArrayList<RestaurantItemDto>();
		RestaurantItemDto restaurantItemDto;
		for (RestaurantItem restaurantItem : restaurantItems) {
			restaurantItemDto = new RestaurantItemDto();
			restaurantItemDto.setId(restaurantItem.getId());
			restaurantItemDto.setName(restaurantItem.getName());
			restaurantItemDto.setPrice(restaurantItem.getPrice());
			restaurantItemDto.setTypeId(restaurantItem.getItemType().getId());
			restaurantItemDto.setTypeName(restaurantItem.getItemType().getName());
			restaurantItemDto.setCategoryId(restaurantItem.getItemCategory().getId());
			restaurantItemDto.setCategoryName(restaurantItem.getItemCategory().getName());
			restaurantItemDto.setIngredient(restaurantItem.getIngredient());
			restaurantItemDto.setPortion(restaurantItem.getPortion());

			restaurantItemsDto.add(restaurantItemDto);
		}
		return restaurantItemsDto;
	}

	public static Response getAllRestaurantItems(List<RestaurantItemDto> restaurantsItems) {
		ResponseAllRestaurantItem response = new ResponseAllRestaurantItem();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS_GET.getMessage());
		response.setRestaurantItems(restaurantsItems);
		return response;
	}

	public static Response getAllRestaurantOffers(List<RestaurantOffer> restaurantOffers) {
		ResponseAllOffer response = new ResponseAllOffer();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS_GET.getMessage());
		response.setRestaurantOffers(restaurantOffers);
		return response;
	}

	public static Response getAllOrdersBy(List<OrderDto> orders) {
		ResponseOrderByUser response = new ResponseOrderByUser();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS_GET.getMessage());
		response.setOrders(orders);
		return response;
	}

	public static List<OrderDto> ordersByUser(List<Order> orders) {
		List<OrderDto> ordersByUser = new ArrayList<OrderDto>();
		OrderDto orderByUser;
		for (Order order : orders) {
			orderByUser = new OrderDto();

			orderByUser.setId(order.getId());
			orderByUser.setAddress(order.getAddress());
			orderByUser.setInstruction(order.getInstruction());
			orderByUser.setUsername(order.getUser().getUsername());
			orderByUser.setOrdernumber(order.getNumber());

			//orderByUser.setCreatedOn(order.getCreatedOn());
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm");
			orderByUser.setCreatedOn(dateFormat.format(order.getCreatedOn()));
			orderByUser.setStatusId(order.getOrderStatus().getId());
			orderByUser.setStatusName(order.getOrderStatus().getName());
			orderByUser.setRestaurantId(order.getRestaurant().getId());
			orderByUser.setRestaurantName(order.getRestaurant().getName());
			List<ItemOrderDto> itemsOrder = new ArrayList<ItemOrderDto>();
			ItemOrderDto itemOrder;
			double totalPrice = 0;
			String itemlst="";
			for (OrderItem orderItem : order.getOrderItems()) {
				itemOrder = new ItemOrderDto();
				itemOrder.setName(orderItem.getRestaurantItem().getName());
				itemOrder.setPrice(orderItem.getPrice());
				itemOrder.setQty(orderItem.getQuantity());
				totalPrice += orderItem.getPrice() * orderItem.getQuantity();
				itemsOrder.add(itemOrder);
				itemlst+=orderItem.getRestaurantItem().getName()+" x "+  orderItem.getQuantity()+" , ";
			}
			orderByUser.setItems(itemsOrder);
			orderByUser.setItemslist(itemlst);
			orderByUser.setTotalPrice(totalPrice);
			ordersByUser.add(orderByUser);
		}
		return ordersByUser;
	}

	public static List<ItemsCategoryAll> allItemCateg(List<ItemCategory> itemCategories) {
		List<ItemsCategoryAll> itemCategsDto = new ArrayList<ItemsCategoryAll>();
		ItemsCategoryAll itemCatgDto;
		for (ItemCategory itmctg : itemCategories) {
			itemCatgDto = new ItemsCategoryAll();
			itemCatgDto.setId(itmctg.getId());
			itemCatgDto.setName(itmctg.getName());
			itemCategsDto.add(itemCatgDto);
		}
		return itemCategsDto;
	}

	public static List<ItemTypeAll> allItemType(List<ItemType> itemTypies) {
		List<ItemTypeAll> itemTypesDto = new ArrayList<ItemTypeAll>();
		ItemTypeAll itemTypeDto;
		for (ItemType itmctg : itemTypies) {
			itemTypeDto = new ItemTypeAll();
			itemTypeDto.setId(itmctg.getId());
			itemTypeDto.setName(itmctg.getName());
			itemTypeDto.setIcon(itmctg.getIcon());
			itemTypesDto.add(itemTypeDto);
		}
		return itemTypesDto;
	}

	public static List<OrderStatusAll> allOrderStatus(List<OrderStatus> orderStaties) {
		List<OrderStatusAll> orderStatiesDto = new ArrayList<OrderStatusAll>();
		OrderStatusAll itemTypeDto;
		for (OrderStatus itmctg : orderStaties) {
			itemTypeDto = new OrderStatusAll();
			itemTypeDto.setId(itmctg.getId());
			itemTypeDto.setName(itmctg.getName());
			itemTypeDto.setIcon(itmctg.getIcon());
			orderStatiesDto.add(itemTypeDto);
		}
		return orderStatiesDto;
	}

	public static List<OrderItemAll> allOrderItem(List<OrderItem> orders) {
		List<OrderItemAll> ordersDto = new ArrayList<OrderItemAll>();
		OrderItemAll orderDto;
		for (OrderItem itmctg : orders) {
			orderDto = new OrderItemAll();
			orderDto.setId(itmctg.getId());
			orderDto.setPrice(itmctg.getPrice());
			orderDto.setQuantity(itmctg.getQuantity()); // order
			orderDto.setOrder(itmctg.getOrder());
			orderDto.setRestaurantItem(itmctg.getRestaurantItem());
			ordersDto.add(orderDto); // restaurantItem
		}
		return ordersDto;
	}
	
	public static Order saveOrder(OrderDto orderDto, int consecutive, int userId, User userData){
		Order order = new Order();
		order.setAddress(userData.getAddress());
		order.setCreatedOn(new Date());
		order.setInstruction(userData.getInstruction());
		String OrderNumber = (1000+consecutive)+"";
		order.setNumber(OrderNumber);
		OrderStatus orderStatus = new OrderStatus();
		orderStatus.setId(1);
		order.setOrderStatus(orderStatus);
		User user = new User();
		user.setId(userId);
		order.setUser(user);
		Restaurant restaurant = new Restaurant();
		restaurant.setId(orderDto.getRestaurantId());
		order.setRestaurant(restaurant);
		return order;
	}
	
	public static Response successCreation() {
		Response response = new Response();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS.getMessage());
		return response;
	}
	
	public static Response orderNotCreated() {
		Response response = new Response();
		response.setResponseCode(ResponseCode.NOT_FOUND.getResponseCode());
		response.setResponseMessage(ResponseMessage.ORDER_NOT_FOUND.getMessage());
		return response;
	}
	
	public static Response orderItemsNotCreated() {
		Response response = new Response();
		response.setResponseCode(ResponseCode.NOT_FOUND.getResponseCode());
		response.setResponseMessage(ResponseMessage.ORDER_ITEM_NOT_FOUND.getMessage());
		return response;
	}
	
	public static OrderItem addOrderItems(ItemOrderDto itemOrderDto, int idOrder, double price) {
		OrderItem orderItem = new OrderItem();
		Order order = new Order();
		order.setId(idOrder);
		orderItem.setOrder(order);
		RestaurantItem restaurantItem = new RestaurantItem();
		restaurantItem.setId(itemOrderDto.getIdx());
		orderItem.setRestaurantItem(restaurantItem);
		orderItem.setPrice(price);
		orderItem.setQuantity(itemOrderDto.getQty());
		return orderItem;
	}
	
	public static Order updateOrder(Order order, int statusOrderId) {
		OrderStatus orderStatus = new OrderStatus();
		orderStatus.setId(statusOrderId);
		order.setOrderStatus(orderStatus);
		return order;
	}
	
	public static Response successUpdate() {
		Response response = new Response();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS_UPDATE.getMessage());
		return response;
	}
	
	public static RestaurantItem addItem(RestaurantItemDto itemDto) {
		RestaurantItem restaurantItem = new RestaurantItem();
		restaurantItem.setIngredient(itemDto.getIngredient());
		restaurantItem.setName(itemDto.getName());
		restaurantItem.setPortion(itemDto.getPortion());
		restaurantItem.setPrice(itemDto.getPrice());
		ItemCategory itemCategory = new ItemCategory();
		itemCategory.setId(itemDto.getCategoryId());
		restaurantItem.setItemCategory(itemCategory);
		ItemType itemType = new ItemType();
		itemType.setId(itemDto.getTypeId());
		restaurantItem.setItemType(itemType);
		Restaurant restaurant = new Restaurant();
		restaurant.setId(itemDto.getRestaurantId());
		restaurantItem.setRestaurant(restaurant);
		return restaurantItem;
	}
	
	public static Response itemNotCreated() {
		Response response = new Response();
		response.setResponseCode(ResponseCode.NOT_FOUND.getResponseCode());
		response.setResponseMessage(ResponseMessage.ITEM_NOT_FOUND.getMessage());
		return response;
	}
	
	public static RestaurantItem editItem(RestaurantItem restaurantItem,
			RestaurantItemDto restaurantIemDto) {
		restaurantItem.setIngredient(restaurantIemDto.getIngredient());
		restaurantItem.setName(restaurantIemDto.getName());
		restaurantItem.setPortion(restaurantIemDto.getPortion());
		restaurantItem.setPrice(restaurantIemDto.getPrice());
		ItemCategory itemCategory = new ItemCategory();
		itemCategory.setId(restaurantIemDto.getCategoryId());
		restaurantItem.setItemCategory(itemCategory);
		ItemType itemType = new ItemType();
		itemType.setId(restaurantIemDto.getTypeId());
		restaurantItem.setItemType(itemType);
		return restaurantItem;
	}

}
