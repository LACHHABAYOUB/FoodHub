package com.foodhub.exception;

import com.foodhub.dto.ErrorApi;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AuthenticationException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody
    public ErrorApi handleAuthenticationException(AuthenticationException exp){
        ErrorApi errorApi = new ErrorApi();
        errorApi.setCode(HttpStatus.NOT_FOUND.value());
        errorApi.setError("Username or password is wrong");
        errorApi.addDetail(exp.getMessage());

        return errorApi;
    }

}
