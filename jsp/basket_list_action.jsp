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
<%@ page import="basket.BasketDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>

<%
    String user_id = request.getParameter("user_id");
    BasketDAO basketDAO = new BasketDAO();
    List<BasketDTO> list = basketDAO.basket_select(user_id);
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(BasketDTO basketDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"product_code\" : \"" + basketDTO.getProduct_code() + "\","
                     +   "\"num\" : \"" + basketDTO.getNum() + "\","
                     +   "\"option1\" : \"" + basketDTO.getOption1() + "\","
                     +   "\"option2\" : \"" + basketDTO.getOption2() + "\"" 
                     + "},";
        }
        else{
            jsonData += "{ \"product_code\" : \"" + basketDTO.getProduct_code() + "\","
                        +   "\"num\" : \"" + basketDTO.getNum() + "\","
                        +   "\"option1\" : \"" + basketDTO.getOption1() + "\","
                        +   "\"option2\" : \"" + basketDTO.getOption2() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>