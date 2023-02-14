import React from "react";
import "./style.css";

export default class App1 extends React.Component {

  state={//state is javascript object having key and value pair
    sFeedback:"interesting training"
  };
customStyle={//customStyle is javascript object which is having property of app component
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
       {/* class binding=style={this.customStyle},Data binding=this.state.sFeedback */}
       <p style={this.customStyle}>{this.state.sFeedback}</p>{/* we are using customStyle as value to style attribute */}
      </>
    );

  }



}