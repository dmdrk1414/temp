/* eslint-disable */ // 전체 룰 끄기
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// view

const Login = () => {
    const responseHandler = ({ data }) => {
        setMessage(data);
        return data;
    };

    const errorHandler = ({ message }) => {
        setMessage(message);
        return message;
    };

    // function testAxios() {
    //     axios({
    //         url: '/backend/login',
    //         method: 'post',
    //         data: {
    //             email: 'test@naver.com',
    //             aaa: 'aaa222',
    //         },

    //         baseURL: 'http://localhost:8080',
    //         //withCredentials: true,
    //     })
    //         .then(responseHandler)
    //         .catch(errorHandler);
    // }

    // http://localhost:8080/backend/cors
    // const onNonCorsHeaderHandler = () => {
    //     axios.get('http://localhost:8080/backend/login').then(responseHandler).catch(errorHandler);
    // };
    // test

    // 서버에서 받은 데이터를 console로 찍어서 확인한다.
    const [userID, setUserID] = useState('');
    const [userPWD, setuserPWD] = useState('');

    // const test = 'test';
    // useEffect(() => {
    //     console.log(userID);

    //     axios
    //         .post('/backend/login', {
    //             userID,
    //             userPWD,
    //         })
    //         .then((res) => console.log(res))
    //         .catch();
    //     // .get('/api/test')
    //     // .then((res) => console.log(res))
    //     // .catch();
    //     // fetch('/api/test')
    //     //     .then((res) => console.log(res.body))
    //     //     .catch();
    // }, []);

    // function buttonHandler(e) {
    //     e.preventdefault();
    //     const idInput = document.querySelector('.login-id');
    //     const pwdInput = document.querySelector('.login-pwd');
    //     setUserID(idInput.value);
    //     setuserPWD(pwdInput.value);
    // }
    // eslint-disable-next-line no-console
    // test
    return (
        <div className="body">
            {/* <!-- login UI --> */}
            <div>
                <a href="/">Home</a>
            </div>
            <div className="loginHead-container">
                <form className="loginForm-container" method="post" action="http://localhost:8080/backend/login">
                    <div className="login-title" id="title">
                        Login
                    </div>
                    <input defaultValue="dmdrk1414" className="login-id" type="text" name="id" placeholder="아이디 입력" autoFocus />
                    <input defaultValue="1234" className="login-pwd" type="password" name="pwd" placeholder="비밀번호" />
                    <button className="login-button">로그인</button>
                    <div>
                        <a href="">비밀번호 찾기</a> |<a href="">회원가입</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

/* eslint-disable-next-line  */
export default Login;
