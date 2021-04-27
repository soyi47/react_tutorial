import React from 'react';
import styled, { css } from 'styled-components';    // styled 불러오기
/*
    styled-components
        - [npm(yarm) add styled-component]로 라이브러리 설치
        - 자바스크립트 파일 안에 스타일을 선언하는 방식인 CSS-in-JS. 이 CSS-in-JS 라이브러리 중 하나.
        - JS 파일 하나에 스타일까지 작성할 수 있어 스타일 파일을 따로 만들지 않아도 된다는 장점.
        - classNames를 사용하는 CSS/Sass와 비교했을 때, 전달받은 props 값을 쉽게 조회하고 스타일에 적용할 수 있다는 장점.

        Tagged 템플릿 리터럴
            - ` 백틱을 사용하여 만든 문자열에 스타일 정보를 넣는 문법
            - 템플릿 안에 JS 객체나 함수를 전달할 때, 온전히 추출할 수 있음

        styled-element 만들기
            1. 컴포넌트 파일 상단에서 styled를 불러오고
            2. 'styled.태그명'을 사용하여 구현 ( styled('태그명'), styled(컴포넌트 형식) 과 같은 형태로도 구현 가능. )
            3. Tagged Template Literal 문법을 적용해 스타일 작성
            -> 해당 스타일이 적용된 태그로 이루어진 React Component 생성.
*/

const sizes = {
    desktop: 1024,
    tablet: 768
};

// 위의 size 객체에 따라 자동으로 media 쿼리 함수를 만듦
// ref: https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
    }
    `;

    return acc;
}, {});

const Box = styled.div` // 스타일링된 엘리먼트를 만들기 위해 styled.태그명 으로 구현.
    /* props로 넣어 준 값을 직접 전달할 수 있음. */
    background: ${props => props.color || 'blue'};  // props를 조회해서 props.color 값 사용
    padding: 1rem;
    display: flex;

    /* 기본적으로는 가로 크기 1024px 가운데 정렬을 하고
        가로 크기가 작아짐에 따라 크기를 줄이고
        768px 미만이 되면 꽉 채움 */
    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px`}
    ${media.tablet`width: 100%`};
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여함. */
    ${props =>
    props.inverted &&   // props에 따른 조건부 스타일링
    css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
            background: white;
            color: black;
        }
    `}

    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
);

export default StyledComponent;