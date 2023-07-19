<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
     
<%@ page import= "product_inquiry.ProductInquiryDAO"%>
<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean class="product_inquiry.ProductInquiryDTO" id="productInquiryDTO" scope="page"/>
<jsp:setProperty name="productInquiryDTO" property="category" />
<jsp:setProperty name="productInquiryDTO" property="user_name" />
<jsp:setProperty name="productInquiryDTO" property="subject" />
<jsp:setProperty name="productInquiryDTO" property="content" />


<%  
    String jsonData = "{ \"result\": {"
    + "\"category\": \"" + photoPostDTO.getCategory() + "\","
    + "\"user_name\": \"" + photoPostDTO.getUser_name() + "\","
    + "\"subject\": \"" + photoPostDTO.getSubject() + "\","
    + "\"content\": \"" + photoPostDTO.getContent() + "\""
    + "} }";

    response.getWriter().write(jsonData);
%>
