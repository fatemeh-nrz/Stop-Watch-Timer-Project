// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useContext, useEffect } from "react";
import ReactDOM from "react";
import { Thecontext } from "./TimerContext";
//CLASS COMPONENT
// class Thetime extends React.Component {
// constructor() {
//   super();
//   this.state = {
//   }
// }
// return (
//   <h1 className='Thetime'>
//     {this.props.hour} :
//     {this.props.minute} :
//     {this.props.second} :
//     {this.props.miliSecend} 
//     </h1>
// );

//CLASS COMPONENT
/////////////////////////////////////////////////
//HOOKS
const Thetime = (props) => {
  const ThetimeContext = useContext(Thecontext)
  return (
    <h1 onClick={ThetimeContext.catchTimer} className="Thetime" style={{ background: props.ThemeFlag ? "black" : "white" }}>

      {props.hour}:
      {props.minute}:
      {props.second}:
      {props.miliSecend}
    </h1>
  )

}
//HOOKS
export default Thetime;