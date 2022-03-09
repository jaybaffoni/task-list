import Task from "./components/task";

function App() {
  return (
    <div style={{padding: 12, backgroundColor: '#e1e1e1'}}>
      <Task title={"Wash the dishes"} completed={false}/>
      <Task title={"Wash the dog"} completed={false}/>
      <Task title={"Wash the car"} completed={true}/>
    </div>
  );
}

export default App;
