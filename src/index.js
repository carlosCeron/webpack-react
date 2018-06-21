import React,{ Component } from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

class App extends Component{

    render(){
        return (
            <div className={style.customStyle}>Hola Como estas?</div>
        )
    }
}


ReactDOM.render( <App />, document.querySelector("#componente"));


