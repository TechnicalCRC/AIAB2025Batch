import TodoItem from "./TodoItem"

function TodoItemList({todoItems}) {
  return (
    <div>
      {todoItems.map((item)=>
       <TodoItem key={item.name} todoName={item.name} todoDate={item.date}></TodoItem>  
      )}
          
    </div>
  )
}

export default TodoItemList
