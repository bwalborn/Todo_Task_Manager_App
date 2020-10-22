
import React from 'react';

import AddList from './AddList';
import ListItems from './ListItems';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    
 this.state = {hide : true, switchHide : false, item : {}, list : []
    };
    }

    componentDidMount (){
        this.setState({hide : true});
    }

    handleAddList(s) {
    var newList = this.state.list;  //new
//     var array = [];
//         // s.preventDefault();
//         // Implement this function!
//     //   var newNewItems = this.state.item;
//     //   newNewItems[s] = [];
// const newObject = {};            //new
// for (var i = 0; i < this.state.list; i++) {              //new
//     newObject[i] = s;
//     array.push(newObject);
// }
// this.setState( { list: array  } );

// newNewItems[s] = t;
// var joined = this.state.list.push(s);

        var newList = this.state.list;               //works
        this.setState( { list: newList.concat([s])  } );   //works
        console.log(this.state.list);               //works
    }
   //this.state.list.concat(s)

handleClick () {
 
this.setState({hide : !this.state.hide, switchHide : !this.state.switchHide})
}

handleClose(e) {
    this.setState({hide : e, switchHide : false});
}

handleAddListItem () {

}
// hideAddlist(e) {
// this.setState({hide : false})
// }

    render() {
        const {hide} = this.state;
        const {switchHide} = this.state;
        return (
            <div>
                 <h1>todo app</h1>
                {/* <button hidden={switchHide} onClick={() => this.handleClick()}>Create new Todo-list</button> */}

        <AddList classNAme='Createlist' addList={this.handleAddList.bind(this)} Close={this.handleClose.bind(this)} /> 
              {/* <button  onClick={() => this.handleClick()}>x</button> */}
              <ListItems listItems={this.state.list} />

            </div>
        );
    }

}

export default TodoList;


/*Close={this.handleClose.bind(this)}*/

// { hide? null : <AddList classNAme='Createlist' addList={this.handleAddList.bind(this)} Close={this.handleClose.bind(this)} /> }
// {  hide? null :  <button /* img={} */ onClick={() => this.handleClick()}>x</button>}