import React from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

function MypageComponent(props) {

    const [state, setState] = React.useState({
        이름: '',
        아이디: '',
        비밀번호 : '',
        핸드폰번호 : 0,

        isIdError : false,
        isIdMsg : ''
    })

    const onChangeId = (e) => {
        const { value } = e.target;

        setState({
            ...state,
            아이디: value
        })
    }

    const onChangePw = (e) => {
        const { value } = e.target;

        setState({
            ...state,
            비밀번호: value
        })
    }

    
    const onChangeName = (e) => {
        const { value } = e.target;

        setState({
            ...state,
            이름: value
        })
    }

    const onChangeHp = (e) => {
        const { value } = e.target;

        setState({
            ...state,
            핸드폰번호: value
        })
    }

    const getUserData = () => {
        const user_id = sessionStorage.getItem('user_id');
        const form_data = {
            "user_id": user_id
        }

        $.ajax({
            url: 'http://localhost:8080/JSP/innisfree/update_getjoin_action.jsp',
            type: 'POST',
            data: form_data,
            dataType: 'json',
            success(res) {
                console.log('ajax 성공');
                console.log(res.result);
                setState({
                    ...state,
                    아이디: res.result.아이디,
                    비밀번호: res.result.비밀번호,
                    이름: res.result.이름,
                    핸드폰번호: res.result.핸드폰번호
                })
            },
            error(err) {
                console.log('ajax 실패' + err);
            }
        })
    }


    React.useEffect(() => {
        getUserData();
    }, [])

    const onClickSubmit = (e)=>{
        e.preventDefault();

        const url = 'http://localhost:8080/JSP/innisfree/update_action.jsp';
        const data = new URLSearchParams();
        data.append("user_id", state.아이디)
        data.append("user_pw", state.비밀번호)
        data.append("user_name", state.이름)
        data.append("user_hp", state.핸드폰번호)

        axios.post(url, data)
        .then((res)=>{
            console.log(res)
        })
        
    }

    const onSubmitUpdate = (e) => {
        e.preventDefault();

        const formData = {
            "user_id" : state.아아디,
            "user_pw" : state.비밀번호,
            "user_name" : state.이름,
            "user_hp" : state.핸드폰번호
        }
        // formData.append("user_id", state.아이디)
        // formData.append("user_pw", state.비밀번호)
        // formData.append("user_name", state.이름)
        // formData.append("user_email", state.이메일)
        // formData.append("user_ph", state.핸드폰번호)
        // formData.append("user_hp", state.전화번호)
        // formData.append("user_birth_year", state.생년)
        // formData.append("user_birth_month", state.생월)
        // formData.append("user_birth_date", state.생일)

        $.ajax({
            url: 'http://localhost:8080/JSP/innisfree/update_action.jsp',
            type: 'POST',
            data: formData,
            success(res) {
                console.log('ajax 성공!');
                console.log(res);
                console.log(JSON.parse(res));
                alert('회원 정보가 수정완료 됐습니다.^^');

            },
            error(err) {
                console.log('ajax 실패' + err);
            }
        });
    }

/*     const getUserData = async () => {
        try {
            const user_id = sessionStorage.getItem('user_id');
            const form_data = {
                "user_id": user_id
            };

            const res = await $.ajax({
                url: 'http://localhost:8080/JSP/innisfree/update_getjoin_action.jsp',
                type: 'POST',
                data: form_data,
                dataType: 'json'

            });

            console.log('ajax 성공');
            console.log(res.result);

            setState((prevState) => ({
                ...prevState,
                이름: res.result.이름 === "null" ? '' : res.result.이름,
                아이디: res.result.아이디 === "null" ? '' : res.result.아이디

            }));
        }
        catch (err) {
            console.log('ajax 실패' + err);

        }
    }

    React.useEffect(() => {
        getUserData();
    }, []) */

    return (
        <>
            <HeaderComponent />
            <div id='mypage'>
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content">
                            <div className="left-box">
                                <div className="sub-menu-box">
                                    <ul className='sub-menu-mypage'>
                                        <li className='sub-menu-tit'>
                                            <ul className='sub-menu-detail'>
                                                <li className='detail-tit'>주문목록 / 배송조회</li>
                                                <li className='detail-tit'>뷰티포인트</li>
                                                <li className='detail-tit'>찜한제품</li>
                                                <li className='detail-tit'>내 리뷰</li>
                                                <li className='detail-tit'>1:1 상담내역</li>
                                                <li className='detail-tit'>공병수거 캠페인</li>
                                                <li className='detail-tit'>회원정보 수정</li>
                                                <li className='detail-tit'>배송지 관리</li>
                                                <li className='detail-tit'>원클릭결제 카드관리</li>
                                                <li className='detail-tit'>쇼핑카드 사용 내역</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right-box">
                                <div className="mypage-main">
                                    <div className="mypage-row1">
                                        <div className="mypage-name-box">
                                            <div className="name-box">
                                                <span className='user-name'>{state.이름}</span>
                                                <p>{state.아이디}</p>
                                            </div>
                                        </div>
                                        <div className="mypage-point-box">
                                            <ul>
                                                <li>
                                                    <img src="../img/mypage/icon_point.png" alt="" />
                                                    <div className="tit1">뷰티포인트</div>
                                                    <div className="tit2"><span>0</span><p>P</p></div>
                                                </li>
                                                <li>
                                                    <img src="../img/mypage/icon_coupon.png" alt="" />
                                                    <div className="tit1">보유 쿠폰</div>
                                                    <div className="tit2"><span>8</span><p>장</p></div>
                                                </li>
                                                <li>
                                                    <img src="../img/mypage/icon_bottle.png" alt="" />
                                                    <div className="tit1">이번달 공병수거</div>
                                                    <div className="tit2"><span>0</span><p>개</p></div>
                                                </li>
                                                <li>
                                                    <img src="../img/mypage/icon_review_wr.png" alt="" />
                                                    <div className="tit1">작성가능리뷰</div>
                                                    <div className="tit2"><span>0</span><p>건</p></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mypage-row2">
                                        <div className="mypage-update">
                                            <div className="update-tit">
                                                <h2>회원정보 변경</h2>
                                            </div>
                                            <div className="update-form">
                                                <div className="mypage-inf">
                                                    <form action="" name='formJoin' id='formJoin' /* onSubmit={onSubmitUpdate} */>
                                                        <div className="member-inf">
                                                            <div className="member-inf-tit">
                                                                <h3>기본정보</h3>
                                                                <span>표시는 반드시 입력하셔야 하는 항목입니다.</span>
                                                            </div>
                                                            <div className="member-base-inf">
                                                                <table border="0" cellPadding="0" cellSpacing="0">
                                                                    <colgroup>
                                                                        <col width="240px" />
                                                                    </colgroup>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th>
                                                                                <span>아이디</span>
                                                                            </th>
                                                                            <td>
                                                                                <input type="text" name='user_id' id='userId' onChange={onChangeId} value={state.아이디} disabled={true} />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>
                                                                                <span>비밀번호</span>
                                                                            </th>
                                                                            <td>
                                                                                <input type="password" name='user_pw' id='userPw' onChange={onChangePw} value={state.비밀번호} />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th><span>이름</span></th>
                                                                            <td>
                                                                                <input type="text" name='user_name' id='userName' onChange={onChangeName} value={state.이름} />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>
                                                                                <span>휴대폰번호</span>
                                                                            </th>
                                                                            <td>
                                                                                <input type="text" name='user_hp' id='userHp' onChange={onChangeHp} value={state.핸드폰번호} />
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="update-btn-box">
                                                                <a href="!#"><button>취소</button></a>
                                                                <Link to='/*'><button type='button' className='update-btn' onClick={onClickSubmit}>수정하기</button></Link>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    );
}

export default MypageComponent;