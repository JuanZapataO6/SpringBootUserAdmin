package com.juandevs.coursespring.controllers;

import com.juandevs.coursespring.dao.UserDao;
import com.juandevs.coursespring.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "api/usuario/{id}")
    public User getUser (@PathVariable Long id){
        User user = new User();
        user.setId(id);
        user.setName("Juan");
        user.setLastname("Zapata");
        user.setEmail("Juanzapata@correo.com");
        user.setTelephone("3132459987");
        return user;
    }
    @RequestMapping(value = "api/usuarios")
    public List<User> getUsers (){
        return userDao.getUsers();
    }
    @RequestMapping(value = "usuario123")
    public User editUser (){
        User user = new User();
        user.setName("Juan");
        user.setLastname("Zapata");
        user.setEmail("Juanzapata@correo.com");
        user.setTelephone("3132459987");
        return user;
    }

    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.DELETE)
    public void deleteUser (@PathVariable Long id){
        userDao.deleteUser(id);
    }

    @RequestMapping(value = "api/usuarios", method = RequestMethod.POST)
    public void registerUser (@RequestBody User user){
        userDao.registerUser(user);
    }
}
