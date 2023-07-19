<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@ 
    page 
    language="java" 
    contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"    
%>

<%@ page import = "innisfree.UserDAO" %>
<%@ page import = "innisfree.UserDTO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="innisfree.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_name" />
<jsp:setProperty name="userDTO" property="user_hp" />



<%
    UserDAO userDAO = new UserDAO();
    String result = userDAO.idSearch2(userDTO.getUser_name(), userDTO.getUser_hp());
%>

<%
    String jsonData = "{\"result\":\"" + result + "\"}";
    response.getWriter().write(jsonData);
%>


