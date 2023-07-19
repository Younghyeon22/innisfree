import React from 'react';
import $ from 'jquery';

function SignupComponent(props) {

    const [state, setState] = React.useState({
        user_id: "",
        isIdMsg: '',
        isIdErr: false,
        user_pw :"",
        isPwMsg : '',
        isPwErr : false,
        user_pw_ok : "",
        isPwOkMsg : '',
        isPwOkErr : false,
        user_name :"",
        isNameMsg : '',
        user_hp : "",
        isHpMsg :'',
        isHpErr:false,
        isClick1 :false,
        isClick2: false
    });

    const onChangeuserId = (e) => {

        const { value } = e.target;
        const regExp1 = /([가-힣ㄱ-ㅎㅏ-ㅣ])|(\s)|([~`!#$%^&*()=+\\|[\]{};:'",<>/?])/g;
        const regExp2 = /.{4,}/g;
        let user_id = '';
        let isIdErr = false;
        let isIdMsg = '';

        user_id = value.replace(regExp1, '');


        if (regExp2.test(value) === false) {
            isIdErr = true;
            isIdMsg = '최소 4 이상 입력해 주세요.';
            $('.errId').css({ "color": "#222" });
        }
        else {
            isIdErr = false;
            isIdMsg = '사용 가능한 아이디입니다.';
            $('.errId').css({ "color": "#6184b1" });

        }

        setState({
            ...state,
            user_id: user_id,
            isIdErr: isIdErr,
            isIdMsg: isIdMsg
        })
    }

    const onChangeUserPw = (e) => {

        const { value } = e.target;
        let user_pw = ''
        let isPwErr = false;
        let isPwMsg = '';

        const regExp2 = /.{10,16}/g;
        const regExp1 = /.{0,16}/g;
        const regExp3 = /[%{}[\]\\"':;?/>.<,]/g;
        const regExp4 = /([가-힣ㄱ-ㅎㅏ-ㅣ])|(\s)/g;
        const regExp5 = /([0-9]+[A-Za-z]+)+|([A-Za-z]+[0-9]+)+|([!@#$%^&*()_+\-=`~]+[A-Za-z]+)+|([A-Za-z]+[!@#$%^&*()_+\-=`~]+)+|([0-9]+[!@#$%^&*()_+\-=`~]+)+|([!@#$%^&*()_+\-=`~]+[0-9]+)/g;

        user_pw = value.replace(regExp4, '');



        if (regExp1.test(value) === false) {
            isPwErr = true;
            isPwMsg = '최대 16자 이하 입력해주세요';
            $('.errPw').css({ "color": "#222" });
        }
        else if (regExp2.test(value) === false) {
            isPwErr = true;
            isPwMsg = '최소 10자 이상 입력해주세요';
            $('.errPw').css({ "color": "#222" });
        }
        else if (regExp3.test(value) === true) {
            isPwErr = true;
            isPwMsg = '사용불가한 문자가 포함되어 있습니다. (사용가능 특수문자 : !@#$%^&*()_+-=`~)';
            $('.errPw').css({ "color": "#222" });
        }
        else if (regExp5.test(value) === false) {
            isPwErr = true;
            isPwMsg = '사용불가! 영문대/소문자, 숫자, 특수문자 중 2가지 이상 조합하세요.';
            $('.errPw').css({ "color": "#222" });
        }
        else {
            isPwErr = false;
            isPwMsg = '사용가능한 비밀번호입니다';
            $('.errPw').css({ "color": "#6184b1" });
        }

        setState({
            ...state,
            user_pw: user_pw,
            isPwErr: isPwErr,
            isPwMsg: isPwMsg
        })
    }
    const onChangeUserPwOk = (e) => {

        const { value } = e.target;
        let isPwOkErr = false;
        let isPwOkMsg = '';

        if (value !== state.user_pw) {
            isPwOkErr = true;
            isPwOkMsg = '동일한 비밀번호를 입력';
        }
        else if (value === state.user_pw) {
            isPwOkErr = false;
        }

        setState({
            ...state,
            user_pw_ok: value,
            isPwOkErr: isPwOkErr,
            isPwOkMsg: isPwOkMsg
        })
    }
    const onChangeUserName = (e) => {

        const { value } = e.target;
        const regExp = /[^가-힣ㄱ-ㅎㅏ-ㅣA-Za-z]/g;
        let user_name = "";

        user_name = value.replace(regExp, "");
        setState({
            ...state,
            user_name: user_name
        })
    }

    const onChangeUserHp = (e) => {

        const { value } = e.target
        let user_hp = '';
        let isHpMsg='';
        let isHpErr=false;

        const regExp1 = /[^\d]/g;
        const regExp2= /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/;
        user_hp = value.replace(regExp1, '');
        if(state.user_hp.length<10||regExp2.test(value)===false){
            isHpMsg= '전화전호를 정확하게 입력해주세요.';
            isHpErr=true;
        }
        else{
            isHpMsg= '';
            isHpErr=false;
        }

        setState({
            ...state,
            user_hp: user_hp,
            isHpMsg:isHpMsg,
            isHpErr:isHpErr
        })
    }

    const onSubmitSignUp = (e) => {
        e.preventDefault();

        if(state.user_id===''){
            $('.errId').css({ "color": "#222" });
            $('#userId').focus();
            setState({
                ...state,
                isIdMsg: '필수항목입니다'
            })
        }
        else if(state.isIdErr===true){
            $('#userId').focus();
        }
        else if(state.user_pw===''){
            $('.errPw').css({ "color": "#222" });
            $('#userPw').focus();
            setState({
                ...state,
                isPwMsg: '필수항목입니다'
            })
        }
        else if(state.isPwErr===true){
            $('#userPw').focus();
        }
        else if(state.user_pw===''){
            $('.errPw').css({ "color": "#222" });
            $('#userPw').focus();
            setState({
                ...state,
                isPwMsg: '필수항목입니다'
            })
        }
        else if(state.isPwErr===true){
            $('#userPw').focus();
        }
        else if(state.user_pw_ok===''){
            $('.errPwOk').css({ "color": "#222" });
            $('#userPwOk').focus();
            setState({
                ...state,
                isPwOkMsg: '필수항목입니다'
            })
        }
        else if(state.isPwOkErr===true){
            $('#userPwOk').focus();
        }
        else if(state.user_name===''){
            $('#userName').focus();
            setState({
                ...state,
                isNameMsg: '필수항목입니다'
            })
        }
        else if(state.user_hp===''){
            $('#userHp').focus();
            setState({
                ...state,
                isHpMsg: '필수항목입니다'
            })
        }
        else if(state.isHpErr===true){
            $('#userHp').focus();
        }
        else{
            const formData = {
                "user_id": state.user_id,
                "user_pw": state.user_pw,
                "user_name": state.user_name,
                "user_hp": state.user_hp,
            }
    
            $.ajax({
                url: 'http://localhost:8080/JSP/innisfree/signup_action.jsp',
                type: 'POST',
                data: formData,
                success(res) {
                    console.log('AJAX 성공!');
                    console.log(res);
                    if(res.result=== '1'){
                        alert('회원가입 되었습니다.');
                        window.location.href="#/로그인";
                    }
                    else if(res.result=== '-2'){
                        alert('중복된 아이디입니다.다른 아이디를 사용해주세요.');
                    }
                    else{
                        alert('데이터베이스 오류 다시 시도해주세요');
                    }
                },
                error(err) {
                    console.log('AJAX 실패!' + err);
                }
            });
        }


    }


    return (
        <div id='signup'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <ul>
                            <li><span className='signtit'>정보입력 및 약관동의</span></li>
                            <div className="myinfo">
                                <span>기본정보(필수)</span>
                            </div>
                        </ul>
                    </div>
                    <div className="content">
                        <form action="" id='signupForm' method='post'  onSubmit={onSubmitSignUp}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" name='user_id' id='userId' maxLength={50} onChange={onChangeuserId} value={state.user_id} placeholder='아이디 (영문 또는 숫자 4-12자)'/>
                                            <p className={`err errId ${state.isIdMsg !== '' ? ' on' : ''}`}>{state.isIdMsg}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="password" name='user_pw' id='userPw' maxLength={16} onChange={onChangeUserPw} value={state.user_pw} placeholder='비밀번호 (영문 소문자,숫자 8-16자)'/>
                                            <p className={`err errPw ${state.isPwMsg !== '' ? ' on' : ''}`}>{state.isPwMsg}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="password" name='user_pw_ok' id='userPwOk' onChange={onChangeUserPwOk} placeholder='비밀번호 확인'/>
                                            <p className={`err ${state.isPwOkMsg!=='' ? ' on' : ''}`}>{state.isPwOkMsg}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name='user_name' id='userName' onChange={onChangeUserName} value={state.user_name}  placeholder='이름을 입력하세요'/>
                                            <p className={`err ${state.isNameMsg!=='' ? ' on' : ''}`}>{state.isNameMsg}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name='user_hp' id='userHp' maxLength={11} onChange={onChangeUserHp} value={state.user_hp} placeholder='휴대폰 번호를 입력하세요'/>
                                            <p className={`err ${state.isHpMsg!=='' ? ' on' : ''}`}>{state.isHpMsg}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="btn-box">
                                <button type='submit'>동의하고 가입</button>
                                <p>가입 필수 정보 및 약관을 모두 확인해주세요.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupComponent;