package com.home.middle.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/product/*")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping("add")
	public ModelAndView setProductAdd(ProductDTO productDTO) throws Exception{
		
		ModelAndView mv = new ModelAndView();
		
		int result = productService.setProductAdd(productDTO);
		mv.addObject("result", result);
		mv.setViewName("/product/list");
		
		return mv;
		
	}
	
	@GetMapping("detail")
	public ModelAndView getProductDetail(ProductDTO productDTO) throws Exception{
		ModelAndView mv = new ModelAndView();
		
		System.out.println(productDTO.getProductNum());
		
		productDTO = productService.getProductOPtionDetail(productDTO);
		
		mv.addObject("dto", productDTO);
		mv.setViewName("/product/detail");
		
		return mv;
		
	}
	
	@PostMapping("optionList")
	public ModelAndView getOption(ProductOptionDTO productOptionDTO) throws Exception{
		ModelAndView mv = new ModelAndView();
		
		List<ProductOptionDTO> ar = productService.getOption(productOptionDTO);
		
		mv.addObject("list", ar);
		mv.setViewName("/product/selectOption");
		
		return mv;
	}
	
}
