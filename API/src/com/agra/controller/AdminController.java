package com.agra.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.agra.entity.Product;
import com.agra.service.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin()
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping(value="/addProduct")
	public void addProduct(@RequestPart("file") MultipartFile file, 
			@RequestParam("product") String productJson) throws Exception {
		Product product = new ObjectMapper().readValue(productJson, Product.class);
		product.setImage(IOUtils.toByteArray(file.getInputStream()));
		productService.addProduct(product);
	}
	
	@PostMapping(value="/updateProduct")
	public void updateProduct(@RequestPart(value="file", required=false) MultipartFile file, 
			@RequestParam("product") String productJson) throws Exception {
		Product product = new ObjectMapper().readValue(productJson, Product.class);
		if(file != null)
			product.setImage(IOUtils.toByteArray(file.getInputStream()));
		productService.updateProduct(product);
	}
	
	@GetMapping(value="/deleteProduct")
	public void deleteProduct(@RequestParam("id") int id){
		this.productService.deleteProduct(id);
	}

}
