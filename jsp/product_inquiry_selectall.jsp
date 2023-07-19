<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>


<%@ page import="product_inquiry.ProductInquiryDAO"%>
<%@ page import="product_inquiry.ProductInquiryDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    ProductInquiryDAO ProductInquiryDAO = new ProductInquiryDAO();
    List<ProductInquiryDTO> list = ProductInquiryDAO.selectAll();
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(ProductInquiryDTO productInquiryDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"idx\" : \"" + productInquiryDTO.getIdx() + "\","
                     +   "\"user_id\" : \"" + productInquiryDTO.getUser_id() + "\","
                     +   "\"user_name\" : \"" + productInquiryDTO.getUser_name() + "\","
                     +   "\"subject\" : \"" + productInquiryDTO.getSubject() + "\","
                     +   "\"content\" : \"" + productInquiryDTO.getContent() + "\","
                     +   "\"category\" : \"" + productInquiryDTO.getCategory() + "\","
                     +   "\"write_date\" : \"" + productInquiryDTO.getWrite_date() + "\""
                     + "},";
        }
        else{ 
            jsonData += "{ \"idx\" : \"" + productInquiryDTO.getIdx() + "\","
                        +   "\"user_id\" : \"" + productInquiryDTO.getUser_id() + "\","
                        +   "\"user_name\" : \"" + productInquiryDTO.getUser_name() + "\","
                        +   "\"subject\" : \"" + productInquiryDTO.getSubject() + "\","
                        +   "\"content\" : \"" + productInquiryDTO.getContent() + "\","
                        +   "\"category\" : \"" + productInquiryDTO.getCategory() + "\","
                        +   "\"write_date\" : \"" + productInquiryDTO.getWrite_date() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>