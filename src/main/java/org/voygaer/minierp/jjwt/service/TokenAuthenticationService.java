package org.voygaer.minierp.jjwt.service;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;
import org.voygaer.minierp.jjwt.filter.UserCredentials;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.io.IOException;
import java.util.Date;

@Service
public class TokenAuthenticationService {

    private static final long EXPIRATIONTIME = 864000000;
    private static final String SECRET = "Minierp123571121";
    private static final String TOKEN_PREFIX = "VOY";
    

    public static String addAuthentication( String email) {
        String JWT = Jwts.builder()
                .setSubject(email)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();

        String token = TOKEN_PREFIX + "" + JWT;

        System.out.println("Token : "+token);
        
        return token;
    }

    public static Claims getByToken(String token) {
        Claims user = Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                .getBody();
        
        
        System.out.println("  ID : "+user.getId());
        System.out.println("  Subject : "+user.getSubject());
        System.out.println("  Expiration : "+user.getExpiration());
        
        return user;
    }
    public static UserCredentials getAuthentication(HttpServletRequest request) {
        /*String token = request.getHeader(HEADER_STRING);
        if (token != null) {
            return getByToken(token);
        }*/
        return null;
    }
}
