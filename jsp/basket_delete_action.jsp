<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="basket.BasketDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="basket.BasketDTO" id="basketDTO" scope="page"/>
<jsp:setProperty name="basketDTO" property="user_id"/>
<jsp:setProperty name="basketDTO" property="product_code"/>


<%
    BasketDAO basketDAO = new BasketDAO();
    int result = basketDAO.basket_delete(basketDTO);
%>

{"result":"<%=result%>"}