import React,{Component} from "react"

class TodoItems extends Component{
    constructor(props){
        super(props);

        this.createTasks= this.createTasks.bind(this);
    }
    createTasks(item){
        return <div><li>{item.text}
        <button onClick={()=>this.delete(item.text)}>Delete</button>
        </li>
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