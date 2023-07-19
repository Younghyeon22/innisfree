<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
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
    BasketDAO basketDAO = new BasketDAO();
    int search = basketDAO.basket_search(basketDTO);
    int result=0;
    if(search==-1){
        result=-1;
    }
    else{
        result = basketDAO.basket_post(basketDTO);
    }
%>

{"result":<%=result%>}