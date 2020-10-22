import React from 'react';
import CountTimer from './CountTimer';

const uuidv4 = require('uuid');

class ListItem extends React.Component {

constructor(props) {
    super(props);
    this.state = { color: 'black', count : 0};
}

// componentDidMount () {
//     this.myInterval = setInterval(() => {
//         this.setState(prevState => ({
//             count : prevState.count + 1
//         }))
//     }, 1000)
// }


handleClick() {
    // Implement this function!
if (this.state.color == "black")
    this.setState({color : "grey"})
else
    this.setState({color : "black"})
}

handleDelete () {
var text = this.props.name;

this.props.cancel(text);
this.props.InDex(true);
// console.log(text);

}



render() {
    var text = this.props.name;
    const {color} = this.state;
    const textClickLine = (color == 'black') ? 'none' : 'line-through';
    return (
        <div className='listItem' id='cancel' id='InDex'>
        <div id='listItem' className='TextITem' onClick={this.handleClick.bind(this)} style={{color : color, textDecoration: textClickLine}} > <b>{text}</b></div>
        <button /*img={}*/className='deleteButton' onClick={this.handleDelete.bind(this)}>&times;</button>

            {/* <CountTimer /> */}
        </div>
    );
    }
}
export default ListItem;
// &times;
{/* <img className='CancelButton' src='CancelButton.png' /> */}