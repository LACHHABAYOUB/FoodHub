package com.foodhub.dto;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseAllItemType extends Response{
    private List<ItemTypeAll> itemtype;
}
