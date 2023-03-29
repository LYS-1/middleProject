package com.home.middle.product;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.home.middle.MyTestCase;


public class productDAOTest extends MyTestCase{
	
	@Autowired
	private ProductDAO productDAO;
	
	@Test
	public void getTotalCountTest() throws Exception{
		ProductDTO productDTO = new ProductDTO();
		productDTO.setProductNum(1L);
		
		List<ProductOptionDTO> ar = productDAO.getProductOptionDetail(productDTO);
		//System.out.println(ar.get(0).getOptionName());
		assertEquals("color", ar.get(0).getOptionName());
	}

}
