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
<jsp:setProperty name="basketDTO" property="num"/>
<jsp:setProperty name="basketDTO" property="option1"/>
<jsp:setProperty name="basketDTO" property="option2"/>


<%
    String newOption1= request.getParameter("newOption1");
    String newOption2= request.getParameter("newOption2");
    BasketDAO basketDAO = new BasketDAO();
    int result = basketDAO.basket_update(basketDTO,newOption1,newOption2);
%>

{"result":"<%=result%>"}