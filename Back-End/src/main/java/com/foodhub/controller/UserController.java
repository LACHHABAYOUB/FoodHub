package com.foodhub.controller;

import com.foodhub.dto.UserProfileDTO;
import com.foodhub.service.RestaurantService;
import com.foodhub.service.UserService;
import com.foodhub.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/api/users")
    public ResponseEntity<UserProfileDTO> getProfile(){
        int userId = JWTUtil.getCurrentUserId();
        UserProfileDTO dto = userService.getUserProfile(userId);
        return ResponseEntity.ok(dto);
    }

    @PutMapping("/api/users")
    public void updateProfile(@RequestBody UserProfileDTO profileDTO){
        int userId = JWTUtil.getCurrentUserId();
        userService.updateUserProfile(userId, profileDTO);
    }


}
