package com.foodhub.service;

import com.foodhub.domain.User;
import com.foodhub.domain.object.LoginUserDetail;
import com.foodhub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if (optionalUser.isPresent()){
            return new LoginUserDetail(optionalUser.get());
        }

        String error = String.format("Username is not found");
        throw new UsernameNotFoundException(error);
    }
}
