<<<<<<< HEAD
import React, { Component } from "react";
class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(items) {
    return (
      <li>
        {items.text}
        <button type="submit" onClick={this.deleteItems}>
          Delete
        </button>
      </li>
    );
  }
  deleteItem(key){
      this.props.deleteItem(key);
      console.log("passed to todoItems.js");
  }
  render() {
    var TodoEntries = this.props.entries;
    var listItems = TodoEntries.map(this.createTasks);
    return <ul>{listItems}</ul>;
  }
}
export default TodoItems;
=======
import React,{Component} from "react";
import uniqueId from 'react-html-id';
class TodoItems extends Component{
    constructor(props){
        super(props);
        this.createTasks= this.createTasks.bind(this);
        uniqueId.enableUniqueIds(this);
       
     }

    handleChange(text){
        console.log("Editable mode!");
    }

    updateField(event){
       // console.log(event.target.value);

        // this.setState({text:event.target.value});
        // var text = event.target.value;
        // console.log(text);


    }

changeIt(event){
    //console.log("Id generated is :" + id);

    this.setState({
        
        inputValue : event 
    });
   console.log(event.target.value);
}   

    createTasks(item){
        this.state={
            inputValue:item.text
        }
        console.log(item.text + " written inside createTasks");
        return <div id="one"><center><li><input value={this.state.inputValue} onChange ={this.changeIt.bind(this)}/>       
        <button type="submit" onClick={()=>this.delete(item.text)}>Delete</button>
        <buton type = "button" >Update</buton>
        </li></center>
        </div>

}
delete(text){
    this.props.delete(text);

}

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        var text = this.props.text;
     
        return(
            <ul>
            {listItems}
            </ul>
        )
    }
}
export default TodoItems;
>>>>>>> rahul
