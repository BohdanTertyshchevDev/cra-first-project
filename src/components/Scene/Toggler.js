import React from "react";


function Toggler(props) {
    const clickHandler = () => {
        props.changeParentState();
    }

    return <button onClick={() => {clickHandler()}}>{props.buttonText}</button>
}

// class Toggler extends React.Component {
//   clickHandler() {
//     this.props.changeParentState();
//   }

//   render() {
//     return (
//       <>
//         <button onClick={() => {this.clickHandler()}}>
//           {this.props.buttonText}
//         </button>
//       </>
//     );
//   }
// }

export default Toggler;
