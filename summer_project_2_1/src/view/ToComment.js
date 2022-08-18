import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
    border: 1px solid black;
    p {
        margin: 0;
    }
`;

const ToComment = () => {
    const [allComment, setAllComment] = useState([]);
    const [input, setInput] = useState();
    const [comments, setComments] = useState([
        {
            id: 0,
            content: '자꾸 여기가 왜 채워지는지 모르겠다미안하다.ㅅㅂ',
        },
    ]);
    const [commentArray, serconmmentArray] = useState([]);
    const [index, setIndex] = useState(0);

    const onChange = (e) => {
        setInput(e.target.value);
    };

    const addComment = async () => {
        // 코멘트 추가
        setComments(
            comments.concat({
                id: comments.length,
                content: input,
            }),
        );

        setIndex(index + 1);

        const instance = axios.create({
            baseURL: 'http://localhost:8080/backend',
        });

        instance
            .post('/comment', null, {
                params: {
                    id: comments[index].id,
                    content: comments[index].content,
                },
            })
            .catch();
        setInput('');
    };

    useEffect(() => {
        let copy = [...comments];
        setAllComment(copy);
        // eslint-disable-next-line no-console
        console.log(allComment);
    }, [comments]);

    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            addComment(); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };

    return (
        <div>
            <input className="input" placeholder="이유는 모르겠어 2번댓글을 달아줘" value={input || ''} onChange={onChange} onKeyPress={handleOnKeyPress}></input>
            <button
                onClick={() => {
                    addComment(input);
                    setInput('');
                }}
            >
                댓글달기
            </button>
            {comments.map((comment, index) => (
                <CommentWrapper key={index}>내용: {comment.content}</CommentWrapper>
            ))}
        </div>
    );
};
export default ToComment;
