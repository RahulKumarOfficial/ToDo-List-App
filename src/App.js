import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.AddElement = this.AddElement.bind(this);
  }

  AddElement(e) {
      if(this.inputElement!=="")
   {
    console.log("Button add is clicked");
    var newItem = {
      text: this.inputElement.value,
      key: Date.now
    };
    let {text} = newItem;
    this.setState(prevState =>{
        return{ items:prevState.items.concat(newItem)};
       
    })    
    
    console.log(text);
    var str = this.state.items;
    console.log(str);
    

   }
    this.inputElement.value="";
   
    e.preventDefault();
  }
  render() {
    return (
      <div className="contains">
        <div className="formInput">
          <input
            type="text"
            placeholder="Hey! Type something to note"
            ref={a => (this.inputElement = a)}
          />
          <button type="submit" onClick={this.AddElement}>
            Add To List
          </button>
        <div id="printer">{this.props.items }</div>
        </div>
      </div>
    );
  }
}
export default App;
