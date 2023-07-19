<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "product_inquiry.ProductInquiryDAO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="product_inquiry.ProductInquiryDTO" scope="page"/>

<jsp:setProperty name="productInquiryDTO" property="category" />
<jsp:setProperty name="productInquiryDTO" property="subject" />
<jsp:setProperty name="productInquiryDTO" property="content" />
<jsp:setProperty name="productInquiryDTO" property="user_name" />

<%
    ProductInquiryDAO productInquiryDAO = new ProductInquiryDAO();
    int result = ProductInquiryDAO.update(productInquiryDTO);
%>

{"AJAX실행 DTO & DAO 결과":"<%=result%>"}


