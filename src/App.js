import React, { Component } from "react";
import TodoItems from "./TodoItems";
<<<<<<< HEAD

=======
>>>>>>> rahul
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.AddElement = this.AddElement.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

<<<<<<< HEAD
  deleteItem(){
    console.log("delete is cliked");
    // var filteredItems = this.state.items.filter(function(item){
    //   return (item.key!==key)
    // });
    // this.setState({
    //     items:filteredItems
    // });
}
  AddElement(e) {
    if (this.inputElement !== "") {
      console.log("Button add is clicked");
      var newItem = {
        text: this.inputElement.value,
        key: Date.now
      };
      let { text } = newItem;
      this.setState(prevState => {
        return { items: prevState.items.concat(newItem) };
      });

      console.log(text);
      var str = this.state.items;
      console.log(str);
    }
    this.inputElement.value = "";

=======
  AddElement(e) {
    console.log("Button add is clicked");
    var newItem = {
      text: this.inputElement.value,
      key: Date.now
    };
    let {text} = newItem;
    console.log(text);
    this.inputElement.value="";
    this.setState(prevState =>{

      return{
        items:prevState.items.concat(newItem)
      };
    });
    console.log(this.state.items);
    this.inputElement.value="";
>>>>>>> rahul
    e.preventDefault();
  }
  deleteItem(text){
    var filteredItems = this.state.items.filter(function(item){
      return (item.text!==text)
    });
    this.setState({
        items:filteredItems
    });
}
  render() {
    return (
      <div className="contains">
        <div className="formInput">
        <input
            type="text"
            placeholder="Hey! Type something to note"
            ref={a => (this.inputElement = a)}
          className="form-control"/>
          <button type="submit" onClick={this.AddElement} className="form-control" width="48" height="48">
            Add To List
          </button>
<<<<<<< HEAD
          <TodoItems entries={this.state.items}
                        delete = {this.deleteItem} />
=======
         <TodoItems entries = {this.state.items}
         delete={this.deleteItem}/>         
>>>>>>> rahul
        </div>
      </div>
    );
  }
}
export default App;
