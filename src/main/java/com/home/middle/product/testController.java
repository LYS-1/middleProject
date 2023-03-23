package com.home.middle.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/test/*")
public class testController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("jsonTest")
	public ModelAndView setProductAdd() throws Exception{
		
		ModelAndView mv = new ModelAndView();
	
		mv.setViewName("/test/jsonTest");
		
		return mv;
		
	}
	@GetMapping("testjson")
	public ModelAndView setProductAddOption() throws Exception{
		
		ModelAndView mv = new ModelAndView();
	
		mv.setViewName("/test/testjson");
		
		return mv;
		
	}
	@PostMapping("productOptionAdd")
	public ModelAndView productOptionAdd(String[] optionValue0, String[] optionValue1, String[] optionValue2, String[] optionName, int[] countList, int[] countList2, String[] price, String[] stock) throws Exception{
		
		ModelAndView mv = new ModelAndView();
		
		productService.productOptionAdd(optionValue0,optionValue1,optionValue2,optionName, countList, countList2, price, stock);
		
		mv.setViewName("/test/testjson");
		
		return mv;
	}
	
}
