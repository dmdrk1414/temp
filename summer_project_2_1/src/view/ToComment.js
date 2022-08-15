import React, { useState } from 'react';
import { Button } from 'antd';

function ToComment() {
    const [countList, setCountList] = useState([0]);
    const [contents, setContents] = useState([]);

    function pushContent() {
        const formValue = document.querySelector('.comment-form_input');
        // eslint-disable-next-line no-console
        let copyContents = contents;
        copyContents.push(formValue.value);
        setContents(copyContents);
        formValue.value = '';
    }

    const onAddDetailDiv = (e) => {
        // eslint-disable-next-line no-console
        e.isDefaultPrevented();
        let countArr = [...countList];
        let counter = countArr.slice(-1)[0];
        counter += 1;
        countArr.push(counter); // index 사용 X
        // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
        setCountList(countArr);
        pushContent();
    };

    return (
        <div>
            <div className="comment-container">
                <form id="comment-form_container" action="" className="comment-form_container">
                    <input type="text" className="comment-form_input" onSubmit={onAddDetailDiv} placeholder="당신의 생각을 적어주세요!!!" required />
                    <Button className="comment-input_button" onClick={onAddDetailDiv}></Button>
                </form>
                <ul id="comment-list"></ul>
            </div>

            {countList.map((item, i) => (
                <div className="comment-container" key={i}>
                    <div className="comment_li">
                        <div className="comment_span">{contents[i]}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ToComment;
