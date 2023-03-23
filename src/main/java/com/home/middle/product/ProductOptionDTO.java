package com.home.middle.product;

public class ProductOptionDTO {
	private Long optionNum;
	private Long productNum;
	private Long productPrice;
	private Long productStock;
	private String optionName;
	private String optionValue;
	private Long ref;
	private Long depth;
	
	
	public Long getRef() {
		return ref;
	}
	public void setRef(Long ref) {
		this.ref = ref;
	}
	
	public String getOptionValue() {
		return optionValue;
	}
	public void setOptionValue(String optionValue) {
		this.optionValue = optionValue;
	}
	public Long getDepth() {
		return depth;
	}
	public void setDepth(Long depth) {
		this.depth = depth;
	}
	public Long getOptionNum() {
		return optionNum;
	}
	public void setOptionNum(Long optionNum) {
		this.optionNum = optionNum;
	}
	public Long getProductNum() {
		return productNum;
	}
	public void setProductNum(Long productNum) {
		this.productNum = productNum;
	}
	public Long getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(Long productPrice) {
		this.productPrice = productPrice;
	}
	public Long getProductStock() {
		return productStock;
	}
	public void setProductStock(Long productStock) {
		this.productStock = productStock;
	}
	public String getOptionName() {
		return optionName;
	}
	public void setOptionName(String optionName) {
		this.optionName = optionName;
	}
}
