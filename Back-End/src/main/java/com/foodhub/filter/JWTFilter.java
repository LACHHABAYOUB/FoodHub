package com.foodhub.filter;

import com.foodhub.domain.User;
import com.foodhub.domain.object.LoginUserDetail;
import com.foodhub.repository.UserRepository;
import com.foodhub.service.LoginUserDetailService;
import com.foodhub.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@Component
public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private LoginUserDetailService userDetailsService;

    @Autowired
    private UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest,
                                    HttpServletResponse httpServletResponse,
                                    FilterChain filterChain) throws ServletException, IOException {

        System.out.println("doFilterInternal");

        String authorization = httpServletRequest.getHeader("Authorization");

        String username = null;
        String jwt = null;

        if (authorization != null && authorization.startsWith("Bearer ")){
            jwt = authorization.substring(7);
            username = jwtUtil.getUsernameFromToken(jwt);

            //TODO handle one query
            User user = userRepository.findByUsername(username).get();
            //UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            UserDetails userDetails = new LoginUserDetail(user);

            if (jwtUtil.validateToken(jwt, userDetails)){

                UsernamePasswordAuthenticationToken authenticationToken =
                        new UsernamePasswordAuthenticationToken(userDetails, user.getId(), userDetails.getAuthorities());

                //authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));

                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }

}
