<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>



	<select id="depth${list[0].depth}" class="form-select opt" name="categoryNum" >
	<option value="0">${list[0].optionName} 선택</option>
		<c:forEach items="${list}" var="op">
			<option value="${op.optionNum}" data-productnum="${ProductOptionDTO.productNum}">${op.optionValue}</option>
		</c:forEach>
	</select>

