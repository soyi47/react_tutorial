import React, { useState, useEffect } from 'react';

/*
  Class Component Example
*/
class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date(),
    };
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    // console.log("render()");
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          });
        }}>
          Click me
        </button>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={() => {
          this.setState({
            date: new Date()
          });
        }}>Update Date</button>
      </div>
    );
  }
}

/*
  Function Component Example
*/
function FunctionExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect count')
    document.title = `You clicked ${count} times`;
  }, [count]);

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log('useEffect date')
  }, [date]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h2>It is {date.toLocaleTimeString()}.</h2>
      <button onClick={() => setDate(new Date())}>
        Update Date
      </button>
    </div>
  );
}

// ===============================================================

function Example() {
  return (
    <div>
      <div>
        <h1>Class Component</h1>
      </div>
      <ClassExample />
      <div>
        <p>===============================================================</p>
        <h1>Function Component</h1>
      </div>
      <FunctionExample />
    </div>
  );
}

export default Example;