//*  ./ = 현재 파일이 있는 폴더 => 여기선 App.js와 Potato.js 둘 다 있는 src폴더를 의미
//* ../ = 현재 파일이 있는 폴더의 상위 폴더

import React from "react";

class App extends React.Component {
    //* 생명주기 => constructor() render()->componentDidUpdate() componentDidMount()
    constructor(props) {
        super(props);
        console.log("Hello");
    }

    componentDidMount() {
        console.log("component rendered");
    }
    state = {
        count: 0,
    };

    componentDidUpdate() {
        console.log("I just updated");
    }

    //* 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용
    componentWillUnmount() {
        console.log("Goodbye, cruel world");
    }

    add = () => {
        //* 성능이 느린 버전
        this.setState({ count: this.state.count + 1 });
    };

    minus = () => {
        //* 성능이 빠른 버전
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        console.log("I'm rendering");
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
