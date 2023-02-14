import React from "react";
import "./style.css";

export default class App1 extends React.Component {

  state={
    sFeedback:"interesting training"
  };
customStyle={
  backgroundColor:'green',fontSize:20//here both are key value pair

}



  render =()=>{
    let training="ReactJS";
    return(
      <>
      <h1>Learning React</h1>
      <input type="text" value={training}/>
      <br/>
      {/* property binding */}
      <input type="text"value={this.state.sFeedback}/>
       {/* Data binding */}
       <p style={this.customStyle}>{this.state.sFeedback}</p>
      </>
    );

  }



}