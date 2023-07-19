<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import = "product_inquiry.ProductInquiryDAO" %>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="product_inquiry.ProductInquiryDTO" id="productInquiryDTO" scope="page"/>
<jsp:setProperty name="productInquiryDTO" property="idx" />
<jsp:setProperty name="productInquiryDTO" property="category" />
<jsp:setProperty name="productInquiryDTO" property="user_id" />
<jsp:setProperty name="productInquiryDTO" property="user_name" />
<jsp:setProperty name="productInquiryDTO" property="subject" />
<jsp:setProperty name="productInquiryDTO" property="content" />
<jsp:setProperty name="productInquiryDTO" property="write_date" />

<%
    ProductInquiryDAO productInquiryDAO = new ProductInquiryDAO();
    int result = productInquiryDAO.update(productInquiryDTO);
%>

{"result" : "<%=result%>"}
