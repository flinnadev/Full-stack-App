import { useState } from "react";
import cx from "classnames";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionalComponent";
import styles from "./App.module.scss";

const task = {
  titele: "Learn fullstack",
  isDone: false,
};

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const headingClasses = cx(styles.heading, {
    [styles.headingItalics]: !isVisible,
  });

  return (
    <>
      <h1
        // style={{
        //   backgroundColor: 'limegreen',
        //   fontStyle: isVisible ? 'normal' : 'italic'
        // }}
        // className={`${styles.heading} ${isVisible ? '' : styles.headingItalics}`}
        className={headingClasses}
      >
        Vite app
      </h1>
      <button onClick={toggleVisibility}>Toggle visibility</button>
      {/* {isVisible && <ClassComponent prop1="test prop 1" prop2 prop3={4} prop4={{ id: 0}} task={task}/>} */}
      {isVisible && (
        <FunctionComponent
          prop1="test prop 1"
          prop2
          prop3={4}
          prop4={{ id: 0 }}
          task={task}
        />
      )}

      {isVisible ? (
        <FunctionComponent
          prop1="test prop 1"
          prop2
          prop3={4}
          prop4={{ id: 0 }}
          task={task}
        />
      ) : (
        <div>No component shown. Click button to reveal</div>
      )}
    </>
  );
}

export default App;
