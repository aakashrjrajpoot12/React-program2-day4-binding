import React from "react";
import "./style.css";

export default class App1 extends React.Component {

  state={//state is javascript object having key and value pair
    sFeedback:"interesting training"
  };
customStyle={//customStyle is javascript object which is having property of app component
  backgroundColor:'green',fontSize:20//here both are key value pair

}

clickPara=()=>{
  alert('para is clicked');
}

clickAgain(){
  alert('clicked again');
}

updateFeedback(e){
  this.setState({
    sFeedback:e.target.value
  });
}
constructor(props) {
  super(props);
  

  // This binding is necessary to make `this` work in the callback
  this.clickAgain = this.clickAgain.bind(this);
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

       {/* property binding */}
       <p onClick={()=>this.clickPara()}>Click Me</p>{/* Arrow function */}
       <p onClick={this.clickAgain}>This para</p>

        {/* two way binding */} 
        <input value={this.state.sFeedback} onChange={(e)=>this.updateFeedback(e)}/> {/*  input value is this.state.sFeedback.  onchange of e(argument updateFeedback is also changed */} 
        



      </>
    );

  }



}


