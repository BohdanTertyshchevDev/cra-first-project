import React  from "react";
import Toggler from "./Toggler";
import './style.css';

class Scene extends React.Component{
    textStr = "text from Scene component";
    constructor(props) {
        super(props);
        this.state = {
            light: true
        }
    }

    toggleScene() {
        this.setState({
            light: !this.state.light
        })
    }
   

    render() {
        const {light} = this.state;
        return (
            <div className={light ? "scene-on" : "scene-off"}>
                <Toggler textStr={this.textStr} changeParentState={() => {this.toggleScene()}}  buttonText={light ? 'On' : 'Off'}/>
            </div>
        )
    }
}

export default Scene;