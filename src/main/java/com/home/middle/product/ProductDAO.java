package com.home.middle.product;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	private final String NAMESPACE = "com.home.middle.product.ProductDAO.";
	
	public int setProductAdd(ProductDTO productDTO) throws Exception{
		return sqlSession.insert(NAMESPACE + "setProductAdd", productDTO);
	}
	
	public int productOptionAdd0(ProductOptionDTO productOptionDTO) throws Exception{
		return sqlSession.insert(NAMESPACE + "productOptionAdd0", productOptionDTO);
	}
	
	public Long productOptionNum() throws Exception{
		return sqlSession.selectOne(NAMESPACE + "productOptionNum");
	}
}
