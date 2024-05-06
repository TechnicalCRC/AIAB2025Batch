import AppName from "./components/AppName";
import AppInputs from "./components/AppInputs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItemList from "./components/TodoItemList";

function App() {
  let todoItems = [
    {
      name: "Buy Book",
      date: "06-05-2024",
    },
    {
      name: "Buy DVD",
      date: "07-05-2024",
    },
    {
      name: "Buy Laptop",
      date: "10-05-2024",
    },
    {
      name:'Submit Projects on Google Form',
      date: '10-05-2024'
    }

  ];
  return (
    <>
      <AppName></AppName>
      <AppInputs></AppInputs>
      <TodoItemList todoItems={todoItems}></TodoItemList>
    </>
  );
}

export default App;

//export default function App() {
//   let Courses = ['B.Tech','BA','BBA','B.Com','B.Sc','BCA','B.Pharma'];
//   return (
//     <div>
//         <h1> Courses</h1>
//         <ul className="list-group">
//         {Courses.map((course) =>
//            <li key={course}className="list-group-item">{course}</li>
//          )}
// </ul>
//     </div>
//   )
// }

// import Hello from "./Hello";
// import MyButton from "./MyButton";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Random from "./Random";

// function App() {
//   return (
//     <div>
//       <Hello></Hello>
//       <MyButton></MyButton>
//       <button type="button" class="btn btn-primary">Primary</button>
// <button type="button" class="btn btn-secondary">Secondary</button>
// <Random></Random>
// <Random></Random>
// <Random></Random>
// <Random></Random>
//     </div>
//   );
// }

// export default App
