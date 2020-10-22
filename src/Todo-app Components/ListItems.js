import React from 'react';
import ListItem from './ListItem';
// const uuidv4 = require('uuid');
class ListItems extends React.Component {

    constructor() {
        super();
        this.state = {list : [], hide : false};
    }

// handleAddItem (e) {
//     e.preventDefault();
//     // this.props.
// const listitems = [];
//     // Should render the number of items within Lists
//     if (e) {
//         for (var i = 0; i < e.length; i++){
//             listitems.push(e[i]);
//         }
//         this.setState({list : listitems});
//     }
    
// }

handleCancel(e) {
var lists = this.props.listItems;
if (e != null){
// for (var i = 0; i < lists; i++) {
   
    const index = lists.indexOf(e);
    // console.log(lists);
    lists.splice(index, 1);
    console.log(lists);
    // this.props.ListItems = lists;
}
    // listName
}
handleIndex (e) {
this.setState({ hide : e })
}

render() {
    const hideSHOW = this.state.hide ? true : false;
       // If there are no lists, display a relevant message
       if(this.props.listItems.length === 0 ) {
        return (
          <div id="listsDiv" className="List">
            <h2>Add new item to get started!</h2>
          </div>
        );
      }
    const {list} = this.state;
    var lists = this.props.listItems;
    return (
        // <div id='listItems' >{lists}
        
         <div id='listItems' >
         {lists.map((listName, idx) => {
          return (
              
            <ListItem key={idx} name={listName} cancel={this.handleCancel.bind(this)} InDex={this.handleIndex.bind(this)} hidden={hideSHOW}/*name={listName} items={items[listName]} addItem={addItem.bind(this)} key={uuidv4()}*/ />
          );
        })}</div>

    );
}
    
}
export default ListItems;