<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<c:import url="../template/common_css.jsp"></c:import>
</head>
<body>
<c:import url="../template/header.jsp"></c:import>
<form action="./memberPwCheck" method="post">
비밀번호 입력:<input type="text" name="pw">
<button type="submit">입력하기</button>
</form>

<c:import url="../template/common_js.jsp"></c:import>
</body>
</html>