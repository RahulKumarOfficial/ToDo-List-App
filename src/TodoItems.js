import React,{Component} from "react";

class TodoItems extends Component{
    constructor(props){
        super(props);

        this.createTasks= this.createTasks.bind(this);

     }

    handleChange(text){
        console.log("Editable mode!");
    }
    updateField(event){
       // console.log(event.target.value);
       
        this.setState({text:event.target.value});
        var text = event.target.value;
        console.log(text);
        
    }
    onChange = (event) =>{
        this.setState({text:event.target.value})
        console.log(event.target.value);
    }

    createTasks(item){
        return <div id="one"><center><li><input value={item.text} onChange={this.onChange}/>
        <button type="submit" onClick={()=>this.delete(item.text)}>Delete</button>
        </li></center>
        </div>
        
}
delete(text){
    this.props.delete(text);
    
}

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return(
            <ul>
            {listItems}
            </ul>
        )
    }
}
export default TodoItems;