package com.foodhub.repository;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.foodhub.domain.Order;

public interface OrderRepository extends CrudRepository<Order, Integer>{
	
	@Query("select o from Order o where user.id = ?1")
	public List<Order> getOrdersByUser(int userId);
	
	@Query("select o from Order o where user.id = ?1 and  o.orderStatus.id<4")
	public List<Order> getPendingOrdersByUser(int userId);
	
	@Query(value = "select count(*) from orders where restaurantid =:idRestaurant", nativeQuery =true)
	public int contOrderByRestaurant(@Param("idRestaurant") int idResraurant);

	@Query(value = "select * from orders where restaurantid =:idRestaurant and orderstatusid < 4", nativeQuery =true)
	public List<Order>  getPendingOrdersByRest(@Param("idRestaurant") int idResraurant);


	@Query("select o from Order o where number = ?1 and restaurant.id = ?2")
	public Order getOrderByNumber(String number, int idRestaurant);
	
	@Query("select o from Order o where id = ?1")
	public Order getOrderById(int orderId);


	//call native query to check that an item is valid to delete or not
//	@Query(value = "select count(*)" +
//			"from orders as o, order_items oi, restaurant_items ri\n" +
//			"where o.id = oi.orderid\n" +
//			"and oi.restaurantitemid = ri.id\n" +
//			"and ri.id = :id\n" +
//			"and (o.orderstatusid = 1 or o.orderstatusid = 2)", nativeQuery = true)
	@Query(value = "select count(*) from order_items  where restaurantitemid =:id ", nativeQuery =true)
	public int validateToDelete(int id);
	
}
