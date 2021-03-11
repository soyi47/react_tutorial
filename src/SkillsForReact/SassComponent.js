import React from 'react';
import './SassComponent.scss';

const SassComponent = () => {
    return (
        <div className="SassComponent">
            <div className="box red"/>
            <div className="box orange"/>
            <div className="box yellow"/>
            <div className="box green"/>
            <div className="box blue"/>
            <div className="box indigo"/>
            <div className="box violet"/>
        </div>
    );
};

export default SassComponent;

/*
    Sass : Syntactically Awesome Style Sheets 문법적으로 매우 멋진 스타일시트
    - CSS 전처리기. 복잡한 작업을 쉽게 하도록 해 주고, 스타일 코드의 재활용성과 가독성을 높여 유지 보수를 더욱 쉽게 해주는 도구.
    - create-react-app v2 버전부터는 추가 설정 없이 바로 사용 가능.
    - 프로젝트 디렉토리에서 [npm(또는 yarn) add node-sass] 명령어 실행하여 설치.
*/
