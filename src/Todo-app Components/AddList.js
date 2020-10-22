
import React from 'react';



class AddList extends React.Component {
    constructor() {
        super();
        this.state = {Count : 0};
    }
    handleRefresh(){
        this.setState({ Count : 0});
    }

    handleSubmit(e){
        e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
            // if (this.refs.id.value !== undefined && this.refs.id.value !== null && /^[ 0-9 A-Z a-z !-*]+$/.test(this.refs.id.value) && this.refs.id2.value !== undefined && this.refs.id2.value !== null
            // && /^[ 0-9 A-Z a-z !-*]+$/.test(this.refs.id2.value)) {
            //     console.log(undefined);
            //     this.props.addList([this.refs.id.value,  this.refs.id2.value]);
            //     //console.log([this.refs.id.value, this.refs.id2.value]);
            //     this.refs.id.value = "";
            //     this.refs.id2.value = "";
            //     this.props.Close(true);
            // } else 
            if (this.refs.id2.value != undefined && /^[ 0-9 A-Z a-z !-*]+$/.test(this.refs.id2.value)){
                if (this.refs.id2.value.length < 50) {
                    this.props.addList([this.refs.id2.value]);
                    this.refs.id2.value = "";
                    this.props.Close(true);
                } else if (this.refs.id2.value.length >= 50) {
                    this.setState({Count : 0});
                    this.setState({Count : this.refs.id2.value.length});
                }
                //console.log([this.refs.id.value, this.refs.id2.value]);
                // this.refs.id.value = "";
            }
        // console.log(this.Close.value);
            //}
        }


    

    render() {
        const {Count} = this.state;
        if (Count >= 50){
            return (
                <div className='handleRefresh'>
 <div >Try less than 50 characters!</div>
 <button className='handleRefreshFONT' onClick={this.handleRefresh.bind(this)}>&times;</button>
                </div>
            );
        }
        return (
            <div className="addListParent">
               
                <div id="addListDiv" className="addListDivWindow">
                <form onSubmit={this.handleSubmit.bind(this)} id='Close' > 
                <div id='addList' >
                {/* <label>Title?&nbsp;
                <input type='text' ref='id' id='newID'></input>
                </label> */}

                <label>Add a Task  &nbsp;
                <input className='inputField' type='text' ref='id2' id='newID2'></input>
                </label>
                <input type='submit' value='&times;' className='AddaTask'/>

                </div><br />
                </form>
                </div>
            </div>
        );
    }

}

export default AddList;