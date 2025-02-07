import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionalComponent";

const task = {
  titele: "Learn fullstack",
  isDone: false,
};

function App() {
  return (
    <>
      <h1>Vite app</h1>
      <ClassComponent
        prop1="test prop 1"
        prop2
        prop3={4}
        prop4={{ id: 0 }}
        task={task}
      />
      <FunctionComponent
        prop1="test prop 1"
        prop2
        prop3={4}
        prop4={{ id: 0 }}
        task={task}
      />
    </>
  );
}

export default App;
