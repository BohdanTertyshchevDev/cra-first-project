import React from "react";
import useMouseTracker from "./MouseTracker";


function App(props) {
  const {coorditanes} = useMouseTracker()
    return (
      <section>
        <p>x: {coorditanes.x}</p>
        <p>y: {coorditanes.y}</p>
      </section>
    );
  
}
 

export default App;
