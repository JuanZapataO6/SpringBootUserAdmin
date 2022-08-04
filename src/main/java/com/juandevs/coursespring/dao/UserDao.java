package com.juandevs.coursespring.dao;

import com.juandevs.coursespring.models.User;

import java.util.List;

public interface UserDao {
    List<User> getUsers();

    void deleteUser(Long id);

    void registerUser(User user);
}
