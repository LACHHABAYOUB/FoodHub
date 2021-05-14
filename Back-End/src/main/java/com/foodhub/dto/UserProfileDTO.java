package com.foodhub.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserProfileDTO {

    private String fullName;
    private String email;
    private String mobile;
    private String address;
    private String instruction;
}
