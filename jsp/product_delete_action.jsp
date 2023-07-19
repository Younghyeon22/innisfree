<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="product_inquiry.ProductInquiryDAO"%>
<%@ page import="product_inquiry.ProductInquiryDTO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="product_inquiry.ProductInquiryDTO" id="productInquiryDTO" scope="page"/>

<jsp:setProperty name="productInquiryDTO" property="idx"/>

<%
    ProductInquiryDAO productInquiryDAO = new ProductInquiryDAO();
    int result = productInquiryDAO.delete(productInquiryDTO);
%>

{"result":"<%=result%>"}