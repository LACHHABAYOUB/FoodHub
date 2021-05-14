package com.foodhub.service;

import com.foodhub.domain.Restaurant;
import com.foodhub.domain.User;
import com.foodhub.dto.UserProfileDTO;
import com.foodhub.dto.UserSignUpDTO;
import com.foodhub.repository.UserRepository;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserProfileDTO getUserProfile(int id) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()){

            UserProfileDTO dto = new UserProfileDTO();
            User user = optionalUser.get();

            dto.setAddress(user.getAddress());
            dto.setEmail(user.getEmail());
            dto.setFullName(user.getFullName());
            dto.setInstruction(user.getInstruction());
            dto.setMobile(user.getMobilePhone());

            return dto;
        }

        //TODO handle exception NotFoundUserException
        throw new UsernameNotFoundException("Can not found user");
    }

    @Override
    public void updateUserProfile(int id, UserProfileDTO profileDTO) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()){
            User user = optionalUser.get();

            user.setAddress(profileDTO.getAddress());
            user.setEmail(profileDTO.getEmail());
            user.setFullName(profileDTO.getFullName());
            user.setInstruction(profileDTO.getInstruction());
            user.setMobilePhone(profileDTO.getMobile());

            userRepository.save(user);
            return;
        }

        //TODO handle exception NotFoundUserException
        throw new UsernameNotFoundException("Can not found user");
    }

    @Override
    public boolean createUser(UserSignUpDTO userSignUpDTO) {
        User user = new User();

        var finduser = userRepository.findByUsername(userSignUpDTO.getUid()).orElse(null);
        if( finduser!=null) {
            return false;
        }

        user.setUsername(userSignUpDTO.getUid());
        user.setPassword(passwordEncoder.encode(userSignUpDTO.getPwd()));

        userRepository.save(user);

        return true;
    }

    @Override
    public Restaurant getRestaurant(int userId) {
        return userRepository.getRestaurant(userId);
    }

    @Override
    public User getUserById(int id) {
        return userRepository.findById(id).get();
    }
}
