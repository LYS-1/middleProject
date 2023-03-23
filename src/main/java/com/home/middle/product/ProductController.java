package com.home.middle.product;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;


public class ProductController {
	
	private ProductService productService;
	
	@PostMapping("productAdd")
	public ModelAndView setProductAdd(ProductDTO productDTO) throws Exception{
		
		ModelAndView mv = new ModelAndView();
		
		int result = productService.setProductAdd(productDTO);
		mv.addObject("result", result);
		mv.setViewName("/product/list");
		
		return mv;
		
	}
	
}
