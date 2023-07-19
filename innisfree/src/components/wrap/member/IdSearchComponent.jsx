import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function IdSearchComponent(props) {

    const [state, setState] = React.useState({
        userName2: '',
        userHp : '',
        isBtn3 : true,
        아이디 : ''
    }) 

    const [isTab, setIsTab] = React.useState(true);

    const onChangeHp = (e) => {
        setState({
            ...state,
            userHp: e.target.value
        })
    }

    const onChangeName2 = (e) => {
        setState({
            ...state,
            userName2: e.target.value
        })
    }

    const onClickTabBtn = (e, value) => {

        if (value === "휴대폰") {
            setIsTab(true);
        }
        else {
            setIsTab(false);
        }
    }
    React.useEffect(() => {

    }, [state]);

    const onSubmitIdSearch2=(e)=>{
        e.preventDefault();
        const formData2 = {
            "user_name" : state.userName2,
            "user_hp" : state.userHp
        }

        $.ajax({
            url : 'http://localhost:8080/JSP/innisfree/idSearch2_action.jsp',
            type : 'post',
            data : formData2,
            dataType: 'json',
            success(res){
                console.log('ajax 성공');
                console.log(res);
                if(res.result===''){
                    alert('없는 정보');
                }
                else {
                    setState({
                        ...state,
                        isBtn3: false,
                        아이디 :res.result
                    })
                }
            },
            error(err){
                console.log('ajax 실패');
                console.log(err);
            }
        })
    }


    return (
        <div id='idsearch'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <ul>
                            <li><span className='row1'>아이디 찾기</span></li>
                            <li><span className='row2'>가입 시 입력한 정보로 아이디를 찾아보세요.</span></li>
                        </ul>
                    </div>
                    <div className="content">
                        <form id='formLogin' /* onSubmit={onSubmitSignin} */>
                            {
                                state.isBtn3 === true ? (
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input onChange={onChangeName2} value={state.userName2} type="text" name='user_name' id='userName' placeholder='이름(두 자 이상 입력)' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input onChange={onChangeHp} value={state.userHp} type="text" name='user_hp' id='userHp' placeholder='휴대폰 번호 입력("-"생략)' />
                                                </td>
                                            </tr>
                                        </tbody>
                                        <div className="signin-btn">
                                            <button onClick={onSubmitIdSearch2}>아이디 찾기</button>
                                        </div>
                                    </table>
                                ):
                                (
                                    <ul className='btn4'>
                                        <li>{state.userName2}회원님의 아이디는</li>
                                        <li><span>{state.아이디}</span>입니다</li>
                                    </ul>
                                )
                            }

                        </form>
                        <div className="member-search-box">
                            <ul>
                                <li><Link to='/로그인'>로그인 하기</Link></li>
                                <li><Link to='/비밀번호찾기'>비밀번호 찾기 </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IdSearchComponent;