import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

function PwsearchComponent(props) {

    const [state, setState] = React.useState({
        userId: '',
        userName: '',
        isBtn3: true,
        비밀번호: ''
    })

    const onChangeId = (e) => {
        setState({
            ...state,
            userId: e.target.value
        })
    }

    const onChangeName = (e) => {
        setState({
            ...state,
            userName: e.target.value
        })
    }

    const onSubmitIdSearch = (e) => {

        e.preventDefault();
        const formData = {
            "user_id": state.userId,
            "user_name": state.userName
        }

        // axios({
        //     url : 'http://localhost:8080/JSP/essa/idSearch_action.jsp',
        //     method : 'POST',
        //     data : {},
        //     params : {
        //         "userName1" : state.userName1,
        //         "userEmail" : state.userEmail
        //     }
        // })
        // .then((res)=>{
        //     console.log("성공" + res );
        // })
        // .catch((err)=>{
        //     console.log("실패" + err);
        // })

        $.ajax({
            url: 'http://localhost:8080/JSP/innisfree/pwSearch_action.jsp',
            type: 'post',
            data: formData,
            dataType: 'json',
            success(res) {
                console.log('Ajax 성공')
                console.log(res);
                console.log(res.result);
                // window.location.href = '#/아이디표시';
                if (res.result === '') {
                    alert('없는 정보');
                }
                else {
                    setState({
                        ...state,
                        isBtn3: false,
                        비밀번호: res.result
                    })
                }

            },
            error(err) {
                console.log('Ajax 실패')
                console.log(err);
            }
        })
    }


    return (
        <div id='pwsearch'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <ul>
                            <li><span className='row1'>비밀번호 찾기</span></li>
                            <li><span className='row2'>가입 시 입력한 정보로 비밀번호를 찾아보세요.</span></li>
                        </ul>
                    </div>
                    <div className="content">
                        <form id='formLogin' onSubmit={onSubmitIdSearch}>
                            {
                                state.isBtn3 === true ? (
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input onChange={onChangeId} value={state.userId} type="text" name='user_id' id='userId' placeholder='아이디를 입력하세요' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input onChange={onChangeName} value={state.userName} type="text" name='user_name' id='userName' placeholder='이름을 입력하세요' />
                                                </td>
                                            </tr>
                                        </tbody>
                                        <div className="signin-btn">
                                            <button>비밀번호 찾기</button>
                                        </div>
                                    </table>
                                ) :
                                    (
                                        <ul className='btn4'>
                                            <li>{state.userName}회원님의 비밀번호는</li>
                                            <li><span>{state.비밀번호}</span>입니다</li>
                                        </ul>
                                    )
                            }

                        </form>
                        <div className="member-search-box">
                            <ul>
                                <li><Link to='/로그인'>로그인 하기</Link></li>
                                <li><Link to='/회원가입'>회원가입 </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PwsearchComponent;