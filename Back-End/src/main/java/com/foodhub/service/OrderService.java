package com.foodhub.service;

import java.util.List;

import com.foodhub.domain.RestaurantItem;
import com.foodhub.domain.User;
import com.foodhub.repository.RestaurantItemRepository;
import com.foodhub.repository.UserRepository;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.foodhub.dto.ItemOrderDto;
import com.foodhub.dto.OrderDto;
import com.foodhub.dto.Response;
import com.foodhub.dto.UpdateOrderDto;
import com.foodhub.repository.OrderItemRepo;
import com.foodhub.repository.OrderRepository;
import com.foodhub.util.Utilities;

import com.foodhub.domain.Order;
import com.foodhub.domain.OrderItem;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private OrderItemRepo orderItemRepository;
	@Autowired
	private RestaurantItemRepository restaurantItemRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
    private JavaMailSender mailSender;
	
	public Response getOrdersByUser(int id) {
		try {
			List<Order> orders = orderRepository.getOrdersByUser(id);
			List<OrderDto> ordersByUser = Utilities.ordersByUser(orders);
			return Utilities.getAllOrdersBy(ordersByUser);
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}
	
	public Response getPendingOrdersByUser(int id) {
		try {
			List<Order> orders = orderRepository.getPendingOrdersByUser(id);
			List<OrderDto> ordersByUser = Utilities.ordersByUser(orders);
			return Utilities.getAllOrdersBy(ordersByUser);
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}


	public Response getPendingOrdersByRest(int id) {
		try {

			var user = userRepository.getUser(id);
			List<Order> orders = orderRepository.getPendingOrdersByRest(user.getRestaurant().getId());
			List<OrderDto> ordersByUser = Utilities.ordersByUser(orders);
			return Utilities.getAllOrdersBy(ordersByUser);
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}
	public Response addOrder(int idUser, OrderDto orderDto) {
		try {
			int consecutive = orderRepository
					.contOrderByRestaurant(orderDto.getRestaurantId());
			User user = userRepository.getUser(idUser);
			Order order = Utilities.saveOrder(orderDto, consecutive, idUser,user);
			orderRepository.save(order);
			Order orderByNumber = orderRepository
					.getOrderByNumber((1000+consecutive)+"", orderDto.getRestaurantId());
			if(orderByNumber == null) {
				return Utilities.orderNotCreated();
			}
			if(orderDto.getItems() == null || orderDto.getItems().size() < 1) {
				return Utilities.orderItemsNotCreated();
			}
			for(ItemOrderDto orderItemDto : orderDto.getItems()) {
				RestaurantItem restaurantItem = restaurantItemRepository.getItem(orderItemDto.getIdx());
				OrderItem orderItem = Utilities
						.addOrderItems(orderItemDto, orderByNumber.getId(), restaurantItem.getPrice());
				orderItemRepository.save(orderItem);
			}
			return Utilities.successCreation();
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}
	
	public Response updateOrder(UpdateOrderDto updateOrderDto) {
		try {
			Order order = orderRepository
					.getOrderById(updateOrderDto.getIdOrder());
			if(order == null) {
				return Utilities.orderNotCreated();
			}
			Order orderUpdate = Utilities.updateOrder(order, updateOrderDto.getIdStatus());
			orderRepository.save(orderUpdate);
			if ( updateOrderDto.getIdStatus() == 4) {
				String emailUser = order.getUser().getEmail();
				String subject = "Order delivered";
				String text = "The order "+order.getNumber()+" was delivered";
				sendEmailTest(emailUser,subject,text);
			}
			return Utilities.successUpdate();
		}catch (Exception e) {
			String error = "ERROR::" + e;
			return Utilities.error(error);
		}
	}
	
	private void sendEmailTest(String emailUser, String subject, String text) {
      try {
		  SimpleMailMessage email = new SimpleMailMessage();
		  email.setTo(emailUser);
		  email.setSubject(subject);
		  email.setText(text);
		  mailSender.send(email);
		  System.out.println("Email is Sent");
	  }catch (Exception ex)
	  {System.out.println(ex.getMessage());}
    }

}
