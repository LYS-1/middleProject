package com.home.middle.product;

import java.util.List;

public class ProductDTO {
	private Long productNum;
	private String productName;
	private Long discount;
	private Long discountPercent;
	private Long productSales;
	private List<ProductCategoryDTO> categoryDTOs;
	private List<ProductFileDTO> fileDTOs;
	private List<ProductOptionDTO> optionDTOs;
	
	public List<ProductCategoryDTO> getCategoryDTOs() {
		return categoryDTOs;
	}
	public void setCategoryDTOs(List<ProductCategoryDTO> categoryDTOs) {
		this.categoryDTOs = categoryDTOs;
	}
	public List<ProductFileDTO> getFileDTOs() {
		return fileDTOs;
	}
	public void setFileDTOs(List<ProductFileDTO> fileDTOs) {
		this.fileDTOs = fileDTOs;
	}
	
	public List<ProductOptionDTO> getOptionDTOs() {
		return optionDTOs;
	}
	public void setOptionDTOs(List<ProductOptionDTO> optionDTOs) {
		this.optionDTOs = optionDTOs;
	}
	public Long getProductNum() {
		return productNum;
	}
	public void setProductNum(Long productNum) {
		this.productNum = productNum;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Long getDiscount() {
		return discount;
	}
	public void setDiscount(Long discount) {
		this.discount = discount;
	}
	public Long getDiscountPercent() {
		return discountPercent;
	}
	public void setDiscountPercent(Long discountPercent) {
		this.discountPercent = discountPercent;
	}
	public Long getProductSales() {
		return productSales;
	}
	public void setProductSales(Long productSales) {
		this.productSales = productSales;
	}
}
