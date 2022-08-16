/* eslint-disable */ // 전체 룰 끄기
import React from 'react';

// view

const Register = () => {
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
    //         url: '/backend/register',
    //         method: 'post',
    //         data: {
    //             test: 'test@naver.com',
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
    //     axios.get('http://localhost:8080/backend/register').then(responseHandler).catch(errorHandler);
    // };

    return (
        <div className="body">
            <div>
                <a href="/">Home</a>
            </div>
            <form className="registerForm-container" action="http://localhost:8080/backend/register" method="post">
                <div className="register-title">Register</div>

                <label htmlFor="">아이디</label>
                <input className="input-field" type="text" name="id" placeholder="8~12자리의 영대소문자와 숫자 조합" defaultValue="dmdrk1414" />
                <label htmlFor="">비밀번호</label>
                <input className="input-field" type="text" name="pwd" placeholder="8~12자리의 영대소문자와 숫자 조합" defaultValue="1234" />
                <label htmlFor="">이름</label>
                <input className="input-field" type="text" name="name" placeholder="홍길동" defaultValue="박승찬" />
                <label htmlFor="">이메일</label>
                <input className="input-field" type="text" name="email" placeholder="example@fastcampus.co.kr" defaultValue="dmdrk1414@gmail.com" />

                <button>회원 가입</button>
            </form>
        </div>
    );
};

/* eslint-disable-next-line  */
export default Register;
