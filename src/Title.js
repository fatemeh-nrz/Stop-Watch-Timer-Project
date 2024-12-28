import React, { useContext } from "react";
import ReactDOM from "react";
import { Thecontext } from "./TimerContext";
//CLASS COMPONENT
// class Title extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 className='title'>{this.props.title}</h1>
//       </div>

//     );
//   }
// }
//CLASS COMPONENT
////////////////////////////////////
// HOOKS
const Title = (props) => {

  const context = useContext(Thecontext);
  return (
    <h1 style={{ color: context }}>
      {props.title}
    </h1>
  )
}
// HOOKS
export default Title;