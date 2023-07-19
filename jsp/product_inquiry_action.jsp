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
<jsp:setProperty name="productInquiryDTO" property="user_id" />
<jsp:setProperty name="productInquiryDTO" property="category" />
<jsp:setProperty name="productInquiryDTO" property="user_name" />
<jsp:setProperty name="productInquiryDTO" property="subject" />
<jsp:setProperty name="productInquiryDTO" property="content" />
<script>
    alert("<%=productInquiryDTO.getCategory()%>")
    alert("<%=productInquiryDTO.getUser_id()%>")
    alert("<%=productInquiryDTO.getUser_name()%>")
</script>
<%
    ProductInquiryDAO productInquiryDAO = new ProductInquiryDAO();
    int result = productInquiryDAO.post(productInquiryDTO);
%>

{"result" : "<%=result%>"}
