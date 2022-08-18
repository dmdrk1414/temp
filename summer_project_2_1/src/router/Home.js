/* eslint-disable */ // 전체 룰 끄기
import React from 'react';

// view
import Ariticle from '../view/Ariticle_contant';
import ToComment from '../view/ToComment';

// 리듀서
import { useSelector, useDispatch } from 'react-redux';
import { increseCount } from 'reducers/count';

// dispatch를 사용하기 위한 준비
const dispatch = useDispatch();

// store에 접근하여 state 가져오기
const { count } = useSelector((state) => state.count);

const increse = () => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(increseCount());
};

const Home = () => {
    return (
        <div className="body">
            {/* 리듀서 */}
            <div>
                {count}
                <button onClick={increse}>증가</button>
            </div>
            {/* 리듀서 */}

            {/* <!-- login UI --> */}
            <div className="loginHead-container">
                <div className="join">
                    <a href="/login">Join</a>
                </div>
                <div className="sing_up">
                    <a href="./register">Sing Up</a>
                </div>
            </div>

            <Ariticle />
            <ToComment />
        </div>
    );
};

/* eslint-disable-next-line  */
export default Home;
