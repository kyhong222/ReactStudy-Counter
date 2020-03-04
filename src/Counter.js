import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }
    
    constructor(props)
    {
        super(props); // 이걸써야 생성자를 오버라이드 할수있음.
        console.log('constructor');
    }
    
    componentWillMount()
    {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount()
    {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState)
    {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(nextProps, nextState)
    {
        console.log('componentDidUpdate');
    }    

    handleIncrease = () => 
    {
        const { number } = this.state;
        this.setState
        ({
            number: number + 1
        });
    }

    handleDecrease = () => 
    {
        const { number } = this.state;
        this.setState
        ({
            number: number - 1
        });
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>Counter</h1>
                <div>value: {this.state.number}</div>
                <button onClick = {this.handleIncrease}>+</button>
                <button onClick = {this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;