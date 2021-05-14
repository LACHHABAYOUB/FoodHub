package com.foodhub.controller;

import com.foodhub.util.JWTUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/***
 * this file uses for testing authentication
 * endpoints under /api/
 */

@RestController
@RequestMapping("/api/test")
public class TestAPI {

    @GetMapping
    public String getTest(){
        int id = JWTUtil.getCurrentUserId();
        return "you are in API/TEST: " + id;
    }
}
