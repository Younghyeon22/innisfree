<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="product_inquiry.ProductInquiryDAO"%>
<%@ page import="product_inquiry.ProductInquiryDTO"%>
<%@ page import="java.util.*"%>
<%
    request.setCharacterEncoding("UTF-8");
%>
    <jsp:useBean class="product_inquiry.ProductInquiryDTO" id="productInquiryDTO" scope="page"/>
    <jsp:setProperty name="productInquiryDTO" property="idx"/>

<%
   

    ProductInquiryDAO productInquiryDAO = new ProductInquiryDAO();
    ProductInquiryDTO inquiryDTO = productInquiryDAO.getJoin(productInquiryDTO);

    String jsonData = "{ \"result\": {"
    +   "\"idx\" : \"" + inquiryDTO.getIdx() + "\","   
    +   "\"category\" : \"" + inquiryDTO.getCategory() + "\","
    +   "\"user_id\" : \"" + inquiryDTO.getUser_id() + "\","
    +   "\"user_name\" : \"" + inquiryDTO.getUser_name() + "\","
    +   "\"subject\" : \"" + inquiryDTO.getSubject() + "\","
    +   "\"content\" : \"" + inquiryDTO.getContent() + "\","
    +   "\"write_date\" : \"" + inquiryDTO.getWrite_date() + "\""
    + "} }";


    response.getWriter().write(jsonData);
        
%>


