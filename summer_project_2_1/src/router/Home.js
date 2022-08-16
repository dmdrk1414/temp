/* eslint-disable */ // 전체 룰 끄기
import React from 'react';

// view
import Ariticle from '../view/Ariticle_contant';
import ToComment from '../view/ToComment';
// eslint-disable-next-line no-console
const Home = () => {
    return (
        <div className="body">
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
