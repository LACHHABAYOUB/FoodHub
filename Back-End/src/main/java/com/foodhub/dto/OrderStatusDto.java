package com.foodhub.dto;
import lombok.Getter;
import lombok.Setter;
import java.io.Serializable;
@Getter
@Setter
public class OrderStatusDto implements Serializable{
    private static final long serialVersionUID = 5723678264008792165L;
    private Integer id;

    private String name;

    private String icon;
}
