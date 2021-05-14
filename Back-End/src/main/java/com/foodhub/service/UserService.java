package com.foodhub.service;

import com.foodhub.domain.Restaurant;
import com.foodhub.domain.User;
import com.foodhub.dto.UserProfileDTO;
import com.foodhub.dto.UserSignUpDTO;
import org.springframework.data.jpa.repository.Query;

public interface UserService {

    UserProfileDTO getUserProfile(int id);

    void updateUserProfile(int id, UserProfileDTO profileDTO);

    boolean createUser(UserSignUpDTO userSignUpDTO);

    Restaurant getRestaurant(int userId);

    User getUserById(int id);

}
