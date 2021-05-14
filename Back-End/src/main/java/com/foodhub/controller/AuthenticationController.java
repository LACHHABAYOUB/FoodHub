package com.foodhub.controller;

import com.foodhub.dto.AuthenticationRequest;
import com.foodhub.dto.AuthenticationResponse;
import com.foodhub.dto.UserSignUpDTO;
import com.foodhub.service.LoginUserDetailService;
import com.foodhub.service.UserService;
import com.foodhub.util.JWTUtil;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private LoginUserDetailService userDetailsService;

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest authenticationRequest){

        try {
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUid(), authenticationRequest.getPwd());
            authenticationManager.authenticate(authenticationToken);
        }
        catch (AuthenticationException authenticationException){
            throw authenticationException;
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUid());
        String token = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(token,true));
    }

    @PostMapping("/create")
    public ResponseEntity<AuthenticationResponse> createUser(@RequestBody UserSignUpDTO userSignUpDTO){
        boolean created = userService.createUser(userSignUpDTO);

        if(created) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(userSignUpDTO.getUid());
            String token = jwtUtil.generateToken(userDetails);
            return ResponseEntity.ok(new AuthenticationResponse(token,true));
        }

        return ResponseEntity.ok(new AuthenticationResponse(null,false));
    }

}
