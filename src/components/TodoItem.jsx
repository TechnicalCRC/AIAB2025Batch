
function TodoItem({todoName, todoDate}) {

   function handleOnClick(event){
    alert(`${todoName} Selected...`);
  //  console.log({todoName});
   }

  return (
    <div>
<div className="row my-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger my-button"
          onClick={(event)=> handleOnClick(event)}>Delete</button>
        </div>
      </div>
            
    </div>
  )
}

export default TodoItem
