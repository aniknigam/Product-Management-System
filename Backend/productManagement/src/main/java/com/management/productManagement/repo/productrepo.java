package com.management.productManagement.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.management.productManagement.entity.Product;

public interface productrepo extends JpaRepository<Product, Integer> {

}