package com.foodhub.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
public class ErrorApi {

    public int code;
    public String error;
    public List<String> details = new ArrayList<>();

    public void addDetail(String message){
        details.add(message);
    }
}
