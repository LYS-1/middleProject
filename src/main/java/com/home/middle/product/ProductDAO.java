package com.home.middle.product;

import java.util.List;

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
	
	public List<ProductOptionDTO> getProductOptionDetail(ProductDTO productDTO) throws Exception{
		return sqlSession.selectList(NAMESPACE + "getProductOptionDetail", productDTO);
	}
	
	public List<ProductOptionDTO> getOption(ProductOptionDTO productOptionDTO) throws Exception{
		return sqlSession.selectList(NAMESPACE + "getOption", productOptionDTO);
	}
	
	public List<ProductOptionDTO> getProductOptionList(ProductOptionDTO productOptionDTO) throws Exception{
		return sqlSession.selectList(NAMESPACE + "getProductOptionList", productOptionDTO);
	}
	
	public int setProductOptionDelete(ProductOptionDTO productOptionDTO) throws Exception{
		return sqlSession.delete(NAMESPACE + "setProductOptionDelete", productOptionDTO);
	}
}
