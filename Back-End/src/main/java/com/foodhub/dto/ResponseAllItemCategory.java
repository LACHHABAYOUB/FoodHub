package com.foodhub.dto;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseAllItemCategory extends Response{
    private List<ItemsCategoryAll> itemCateg;
}
