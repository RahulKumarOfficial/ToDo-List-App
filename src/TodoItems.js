import React,{Component} from "react"

class TodoItems extends Component{
    constructor(props){
        super(props);

        this.createTasks= this.createTasks.bind(this);
    }
    createTasks(item){
        return <div><li>{item.text}
        <button onClick={()=>this.delete(item.key)}>-</button>
        </li>
        </div>
        
}
delete(key){
    this.props.delete(key);
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