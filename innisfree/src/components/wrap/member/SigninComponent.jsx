import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

function SigninComponent(props) {

    const [state,setState] = React.useState({
        아이디 : '',
        비밀번호 : '',
    })

    const onChangeId = (e)=>{
        const {value} = e.target;

        setState({
            ...state,
            아이디 : value
        })
    }

    const onChangePw=(e)=>{
        const {value} = e.target;

        setState({
            ...state,
            비밀번호 : value
        })
    }

    const onSubmitSignin=(e)=>{
        e.preventDefault();
        const formData = {
            "user_id" : state.아이디,
            "user_pw" : state.비밀번호
        }

        $.ajax({
            url : 'http://localhost:8080/JSP/innisfree/signin_action.jsp',
            type : 'POST',
            data : formData,
            dataType : 'json',

            success(res){
                console.log('ajax 성공');
                console.log(res.result);
                console.log(state.아이디);
                console.log(state.비밀번호);
                if(res.result=== '1'){
                    sessionStorage.setItem('user_id', state.아이디);

                    window.location.href='/';
                }
                else if(res.result==='0'){
                    alert('비밀번호를 확인하세요')
                }
                else {
                    alert('아이디를 확인하세요')
                }
            },
            error(err){
                console.log('ajax 실패' + err);
            }
        })
    }
    return (
        <div id='signin'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <ul>
                            <li><span className='row1'>로그인</span></li>
                            <li><span className='row2'>통합회원 아이디로 로그인해주세요.</span></li>
                        </ul>
                    </div>
                    <div className="content">
                        <form id='formLogin' onSubmit={onSubmitSignin}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input onChange={onChangeId} type="text" name='user_id' id='userId' placeholder='아이디 입력' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input onChange={onChangePw} type="password" name='user_pw' id='userPw' placeholder='비밀번호 입력(영문,숫자 포함)' />
                                        </td>
                                    </tr>
                                </tbody>
                                <div className="signin-btn">
                                    <button type='submit'>로그인</button>
                                </div>
                            </table>
                        </form>
                        <div className="icon-signin-box">
                            <ul>
                                <li>
                                    <img src="../img/signin/btn_login_mobile.png" alt="" />
                                    <div className="rw">
                                        <span>휴대폰<br />로그인</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="../img/signin/btn_login_ka.png" alt="" />
                                    <div className="rw">
                                        <span>카카오<br />로그인</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="../img/signin/btn_login_na.png" alt="" />
                                    <div className="rw">
                                        <span>네이버<br />로그인</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="../img/signin/btn_login_more.png" alt="" />
                                    <div className="rw">
                                        <span>더보기</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="member-search-box">
                            <ul>
                                <li><Link to='/아이디찾기'>아이디 찾기</Link></li>
                                <li><Link to='/비밀번호찾기 '>비밀번호 찾기</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninComponent;