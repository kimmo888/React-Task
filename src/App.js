import './App.css';

function App() {
  return (
    <div className="App">
    <input type="text" placeholder="Enter a new task"></input>
    <button onClick={()=> alert("Clicked")}>save Task</button>
    </div>
  );
}

export default App;
