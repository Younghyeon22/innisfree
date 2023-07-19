package innisfree;
import java.sql.*;
import java.util.*;


public class UserDAO {
    private Connection conn;

    private PreparedStatement ps;
    private ResultSet rs;
         

    public UserDAO(){
        try{
            String URL = "jdbc:mysql://localhost:3306/innisfree";
            String ID = "root";
            String PW = "1234";
            // 1. 데이터베이스 드라이버(JDBC)
            Class.forName("com.mysql.jdbc.Driver");
            // 2. 데이터베이스 인증 & 인가 (URL, ID, PW)
            conn = DriverManager.getConnection(URL, ID, PW);
            
            

        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    // 회원가입
    public int signup(UserDTO userDTO){
        String SQL = "INSERT INTO innisfree_member(user_id, user_pw, user_name,user_hp) VALUES(?,?,?,?)";
        try {   
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_id());
            ps.setString(2, userDTO.getUser_pw());
            ps.setString(3, userDTO.getUser_name());
            ps.setString(4, userDTO.getUser_hp());
            
            return ps.executeUpdate();
        } catch(Exception e){

            
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!= null){rs.close();}
                if(ps!= null){ps.close();}
                if(conn!= null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -1;
    }

    public int id_search(UserDTO userDTO){
        String SQL ="select * from innisfree_member where user_id=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1,userDTO.getUser_id());

            rs = ps.executeQuery();
            if(rs.next()){ 
                return -1; 
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return 1;
    }

    // 로그인

    public int signin(String user_id, String user_pw){
        String SQL = "SELECT user_pw FROM innisfree_member WHERE user_id = ?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_id);

            rs = ps.executeQuery();
            if(rs.next()){
                if(rs.getString("user_pw").equals(user_pw)){
                    return 1;

                }
                else { 
                    
                    return 0;
                }
            }
            else {
                return -1;
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        finally{
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch (Exception e) {   
                e.printStackTrace();
            }
        }
        return -2;
        
    }

    public int update(UserDTO userDTO){
        String SQL = "UPDATE innisfree_member SET user_pw =?, user_name=?, user_hp=? WHERE user_id=? ";

        
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_pw());    
            ps.setString(2, userDTO.getUser_name());    
            ps.setString(3, userDTO.getUser_hp());       
            ps.setString(4, userDTO.getUser_id());    

            return ps.executeUpdate();
        }
         catch (Exception e) {
            e.printStackTrace();

        }
        finally{
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}    
            }
             catch (Exception e) {
                e.printStackTrace();
            }
        }
        return -1;
    }

    public UserDTO getJoin(String user_id){
        UserDTO userDTO = new UserDTO();

        String SQL = "SELECT * FROM innisfree_member WHERE user_id=?";
        try {
            ps = conn.prepareStatement(SQL);

            ps.setString(1, user_id);
            rs=ps.executeQuery();    
            if(rs.next()){ 
                userDTO.setUser_id(rs.getString("user_id"));
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_hp(rs.getString("user_hp"));
            }
        }
         catch (Exception e) {
           e.printStackTrace();
        }
        finally{
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}    
            }
             catch (Exception e) {
                e.printStackTrace();
            }
        }
        return userDTO;
    }

    //     // 아이디 찾기 (이메일, 이름)
    // public String idSearch(String user_name, String user_email){
    //     String SQL = "select user_id FROM essa_member WHERE user_name=? and user_email=?";
    //     String result = "";
    //     try {
    //         ps = conn.prepareStatement(SQL);
    //         ps.setString(1, user_name);
    //         ps.setString(2, user_email);
    //         rs = ps.executeQuery();
    //         while(rs.next()){
    //             result = rs.getString("user_id");
    //         }
    //         return result;
    //     }
    //     catch (Exception e) {
    //         e.printStackTrace();
    //     }
    //     return result;
    // }

    //     // 아이디 찾기 (번호, 이름)
         public String idSearch2(String user_name, String user_hp){
             String SQL = "select user_id FROM innisfree_member WHERE user_name=? and user_hp=?";
             String result = "";
             try {
                 ps = conn.prepareStatement(SQL);
                 ps.setString(1, user_name);
                 ps.setString(2, user_hp);

                 rs = ps.executeQuery();
                 while(rs.next()){
                     result = rs.getString("user_id");
                 }
                 return result;
             }
             catch (Exception e) {
                 e.printStackTrace();
             }
             return result;
         }
   // // 비밀번호 찾기
     public String pwSearch(String user_id, String user_name){
         String SQL = "select user_pw FROM innisfree_member WHERE user_id=? and user_name=?";
         String result = "";
         try {
             ps = conn.prepareStatement(SQL);
             ps.setString(1, user_id);
             ps.setString(2, user_name);
             rs = ps.executeQuery();
             while(rs.next()){
                 result = rs.getString("user_pw");
             }
             
             return result;
         }
         catch (Exception e) {
             e.printStackTrace();
         }
         return result;
     }

    
}
