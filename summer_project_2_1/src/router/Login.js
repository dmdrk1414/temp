/* eslint-disable */ // 전체 룰 끄기
import axios from 'axios';
import React from 'react';

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

    function testAxios() {
        axios({
            url: '/backend/login',
            method: 'post',
            data: {
                email: 'test@naver.com',
                aaa: 'aaa222',
            },

            baseURL: 'http://localhost:8080',
            //withCredentials: true,
        })
            .then(responseHandler)
            .catch(errorHandler);
    }

    // http://localhost:8080/backend/cors
    const onNonCorsHeaderHandler = () => {
        axios.get('http://localhost:8080/backend/login').then(responseHandler).catch(errorHandler);
    };

    return (
        <div className="body">
            {/* <!-- login UI --> */}
            <div>
                <a href="/">Home</a>
            </div>
            <div className="loginHead-container">
                <form className="loginForm-container" method="post" action="http://localhost:8080/backend/login" onsubmit="return formCheck(this);">
                    <div className="login-title" id="title">
                        Login
                    </div>
                    <input defaultValue="dmdrk1414" className="login-email" type="text" name="id" placeholder="아이디 입력" autofocus />
                    <input defaultValue="1234" className="login-pwd" type="password" name="pwd" placeholder="비밀번호" />
                    <button className="login-button" onClick={testAxios}>
                        로그인
                    </button>
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
