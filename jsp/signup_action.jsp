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

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="innisfree.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_pw" />
<jsp:setProperty name="userDTO" property="user_name" />
<jsp:setProperty name="userDTO" property="user_hp" />


<%
    UserDAO userDAO = new UserDAO();
    int search = userDAO.id_search(userDTO); 
    int result=0;
    if(search==-1){
        result=-2;
    }
    else{
        result = userDAO.signup(userDTO);
    }
%>

<%
    String jsonData = "{ \"result\": \"" + result + "\"" + "}";
    response.getWriter().write(jsonData);
%>