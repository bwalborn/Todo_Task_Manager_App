import React from 'react';

class CountTimer extends React.Component {

constructor(props) {
    super(props);
    this.state = { count : 0};
}


componentDidMount () {
    this.myInterval = setInterval(() => {
       this.handleStart();
    }, 1000)
}

handleStart () {
    this.setState(prevState => ({
        count : prevState.count + 1
    }))
}

handleStop () {

}


handleReset () {

}


render () {
    return (
        <div>
        <button /*img={}*/className='startButton' onClick={this.handleStart.bind(this)}>start</button>
        <button /*img={}*/className='startButton' onClick={this.handleStop.bind(this)}>start</button>
                    <h3>{this.state.count}</h3>
       </div>
    );
}


}
export default CountTimer;
