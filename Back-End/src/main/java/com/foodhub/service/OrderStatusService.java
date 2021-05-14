package com.foodhub.service;
import com.foodhub.domain.OrderStatus;
import com.foodhub.dto.*;
import com.foodhub.repository.OrderStatusRepo;
import com.foodhub.util.Utilities;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class OrderStatusService {
    @Autowired
    private OrderStatusRepo orderStatusRepo;
    public Response getAllOrdersStatus() {
        try {
            List<OrderStatus> itemTypies = (List<OrderStatus>)
                    orderStatusRepo.findAll();
            List<OrderStatusAll> itemTypiesDto = Utilities.allOrderStatus(itemTypies);
            return Utilities.getAllOrderStatus(itemTypiesDto);
        }catch (Exception e) {
            String error = "ERROR::" + e;
            return Utilities.error(error);
        }
    }
}
