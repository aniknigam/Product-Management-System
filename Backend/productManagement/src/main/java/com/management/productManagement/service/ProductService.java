package com.management.productManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.productManagement.entity.Product;
import com.management.productManagement.repo.productrepo;

@Service
public class ProductService {

	@Autowired
	private productrepo productRepo;


	public Product saveProduct(Product product) {

		return productRepo.save(product);
	}


	public List<Product> getAllProduct() {
		return productRepo.findAll();
	}

	public Product getProductById(Integer id) {
		return productRepo.findById(id).get();
	}


	public String deleteProduct(Integer id) {
		Product product = productRepo.findById(id).get();

		if (product != null) {
			productRepo.delete(product);
			return "Product Delete Sucessfully";
		}

		return "Something wrong on server";
	}


	public Product editProduct(Product p, Integer id) {

		Product oldProduct = productRepo.findById(id).get();

		oldProduct.setProductName(p.getProductName());
		oldProduct.setDescription(p.getDescription());
		oldProduct.setPrice(p.getPrice());
		oldProduct.setStatus(p.getStatus());

		return productRepo.save(oldProduct);
	}

}