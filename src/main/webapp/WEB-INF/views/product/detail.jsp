<%@page import="com.home.middle.product.ProductDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<c:import url="../template/common_css.jsp"></c:import>
</head>
<body>
	<h1>ProductDetailPage</h1>
	
	<div class="container-fluid">
		<div class="row" id="selectDiv">		
			<div id="depth0">
				<select id="selectForm1" class="form-select" aria-label="Default select example">
			  		<option selected>Open this select menu</option>
			  		<c:forEach items="${dto.optionDTOs}" var="ProductOptionDTO">
			  			<c:if test="${ProductOptionDTO.depth == 0}">  			
				  			<option id="option" value="${ProductOptionDTO.optionNum}" data-productnum="${ProductOptionDTO.productNum}">${ProductOptionDTO.optionValue}</option>
			  			</c:if>
			  		</c:forEach>
				</select>
			</div>
		</div>
	</div>
	
	<script src="/resources/js/productDetail.js"></script>
	<c:import url="../template/common_js.jsp"></c:import>
</body>
</html>