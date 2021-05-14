package com.foodhub.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationRequest {

    private String uid;
    private String pwd;
}
