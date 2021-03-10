import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class ScrollBoxApp extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => this.scrollBox=ref}/>  {/* callback 함수를 이용한 ref 설정 */}
                <button onClick={() => this.scrollBox.scrollToBottom()}> {/* callback 함수를 이용한 ref 접근 */}
                    맨 밑으로
                </button>
            </div>
        );
    }
}

export default ScrollBoxApp;
