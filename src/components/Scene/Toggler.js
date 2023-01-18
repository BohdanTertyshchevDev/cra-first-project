import React from "react";



function Toggler(props) {
    const clickHendler = () => {
        props.changeParentState();
    }

    return <button onClick={() => {clickHendler()}}>{props.buttonText}</button>
}

// class Toggler extends React.Component {
//     clickHendler() {
//         this.props.changeParentState();
//     }

//     render() {
//         return (
//             <>
//                 <button onClick={() => {this.clickHendler()}}>
//                     {this.props.buttonText}
//                 </button>
//             </>
            
//         );
//     }
// }

export default Toggler;
