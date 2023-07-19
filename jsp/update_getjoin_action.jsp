<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="innisfree.UserDAO" %>
<%@ page import="innisfree.UserDTO" %>

<%
    response.setHeader("Access-Control-Allow-Origin", "*");
    request.setCharacterEncoding("UTF-8");

    String user_id = request.getParameter("user_id");

    UserDAO userDAO = new UserDAO();
    UserDTO userDTO = userDAO.getJoin(user_id);

    String jsonData = "{ \"result\": {"
            + "\"아이디\": \"" + userDTO.getUser_id() + "\","
            + "\"비밀번호\": \"" + userDTO.getUser_pw() + "\","
            + "\"이름\": \"" + userDTO.getUser_name() + "\","
            + "\"핸드폰번호\": \"" + userDTO.getUser_hp() + "\""
            + "} }";

    response.getWriter().write(jsonData);
%>