<%@ page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="product_inquiry.ProductInquiryDAO" %>
<%@ page import="product_inquiry.ProductInquiryDTO" %>

<%
    response.setHeader("Access-Control-Allow-Origin", "*");
    request.setCharacterEncoding("UTF-8");

    String user_name = request.getParameter("user_name");

    ProductInquiryDAO productInquiryDAO = new ProductInquiryDAO();
    ProductInquiryDTO productInquiryDTO = productInquiryDAO.getJoin(user_name);

    String jsonData = "{ \"result\": {"
            + "\"카테고리\": \"" + productInquiryDTO.getCategory() + "\","
            + "\"이름\": \"" + productInquiryDTO.getUser_name() + "\","
            + "\"제목\": \"" + productInquiryDTO.getSubject() + "\","
            + "\"내용\": \"" + productInquiryDTO.getContent() + "\""
            + "} }";

    response.getWriter().write(jsonData);
%>