import React from "react";
import "./style.css";

export default class App extends React.component {

  state={
    sFeedback:"interesting training"
  };
  render =()=>{
    let training="ReactJS";
    return(
      <>
      <h1>Learning React</h1>
      <input type="text" value={training}/>
      <br/>
      <input value={this.state.sFeedback}/>
      </>
    );

  }



}