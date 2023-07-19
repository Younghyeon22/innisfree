<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "innisfree.UserDAO" %>
<%@ page import = "innisfree.UserDTO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="innisfree.UserDTO" scope="page"/>


<jsp:setProperty name="userDTO" property="user_pw" />
<jsp:setProperty name="userDTO" property="user_name" />
<jsp:setProperty name="userDTO" property="user_hp" />
<jsp:setProperty name="userDTO" property="user_id" />


<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.update(userDTO);
%>

{"AJAX실행 DTO & DAO 결과":"<%=result%>"}

