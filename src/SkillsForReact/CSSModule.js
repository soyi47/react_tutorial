import React from 'react';
import styles from './CSSModule.module.scss'; // CSS Module이 적용된 스타일 파일을 불러옴.
import classNames from 'classnames/bind';

/*
    < CSS Module >
        CSS Module이 적용된 스타일 파일을 불러오면 객체 하나를 전달받게 되는데, 
        CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 들어있다.

        전역적으로 선언한 클래스를 사용할 때
            - className="클래스 이름" 과 같이 문자열로 넣음.

        고유한 클래스 이름을 사용할 때
            - 적용하고 싶은 JSX 엘리먼트에 className={styles.[클래스이름]} 형태로 전달.

        고유한 클래스 이름 두 개 이상 적용할 때
            - ES6 문법 템플릿 리터럴 Template Literal 사용하여 문자열 합치기
                className={`${styles.a} ${styles.b}`}
                문자열을 ` 문자 백틱(backtick)으로 감싸고 그 문자열 내부에 자바스크립트 레퍼런스를 ${}로 감싼다.
            - Array.join() 이용하기
                className={[styles.a, styles.b].join(' ')}
                배열의 모든 요소를 연결해 하나의 문자열로 만드는 Array.join() 메소드 사용.

    < classnames >
        CSS 클래스를 조건부로 설정할 때 매우 유용한 라이브러리.
        [npm(yarn) add classnames]로 라이브러리 설치

        CSS Module와 함께 사용하면 CSS Module 사용도 쉬워짐.    
        classnames에 내장된 bind 함수를 사용하면 사전에 미리 styles에서 받아 온 후 사용하게끔 설정해 두고,
        styles.[클래스 이름] 형태가 아니라, cx('클래스 이름', '클래스 이름2', ...) 형태로 사용할 수 있다.
*/

const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아 오도록 설정

const CSSModule = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;