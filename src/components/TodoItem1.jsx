
function TodoItem1() {
let todoName = 'Buy Book';
let todoDate = '03-05-2024';

  return (
    <div>
<div className="row my-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger my-button">Delete</button>
        </div>
      </div>
            
    </div>
  )
}

export default TodoItem1
