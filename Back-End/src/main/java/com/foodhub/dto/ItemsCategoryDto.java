package com.foodhub.dto;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemsCategoryDto implements Serializable{
    private static final long serialVersionUID = 5723678264008792165L;

    private Integer id;
    private String name;

}
