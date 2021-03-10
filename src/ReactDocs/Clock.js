import React from 'react';

/*
  Class Component LifeCycle Example
*/
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      console.log("componentDidMount()");
    }
  
    componentDidUpdate() {
      console.log("componentDidUpdate");
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
      console.log(this.timerID);
    }
    
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      console.log("render()");
      return (
        <div>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Clock;