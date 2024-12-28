import React, { useEffect, useState, Children } from "react";
import ReactDOM from "react";
import './style.css';
import Title from "./Title";
import Thetime from "./Thetime";
import Timelist from "./Timelist";
import { Thecontext } from "./TimerContext";
// import " ./style.css";

//CLASS COMPONENT
// let Intervall;
// class Myapp extends React.Component {
//   constructor() {
//     super();
//     this.state = {

//       hour: 0,
//       minute: 0,
//       second: 0,
//       miliSecend: 0,
//       isstartFlag: true
//     }
//   }

//   //function
//   // strat_Timer = () => {
//   //   if (this.state.isstartFlag) {
//   //     Intervall = setInterval(() => {
//   //       this.setState({
//   //         second: this.state.second + 1
//   //       })
//   //       if (this.state.second == 59) {
//   //         this.setState({
//   //           second: 0,
//   //           minute: this.state.minute + 1
//   //         })
//   //         if (this.state.minute == 59) {
//   //           this.setState({
//   //             minute: 0,
//   //             hour: this.state.hour + 1
//   //           })
//   //         }
//   //       }
//   //     }, 1000)

//   //     this.setState({
//   //       isstartFlag: false
//   //     })
//   //   }

//   // };

//   strat_Timer = () => {
//     if (this.state.isstartFlag) {
//       Intervall = setInterval(() => {
//           this.setState({
//             miliSecend: this.state.miliSecend + 1
//           })
//         if (this.state.miliSecend == 59) {
//           this.setState({
//             miliSecend: 0,
//             second: this.state.second + 1
//           })
//           if (this.state.second == 59) {
//             this.setState({
//               second: 0,
//               minute: this.state.minute + 1
//             })

//           }

//           if (this.state.minute == 59) {
//             this.setState({
//               minute: 0,
//               hour: this.state.hour + 1
//             })

//           }
//         }
//       }, 10)


//       this.setState({
//         isstartFlag: false
//       })

//       // Intervall_milisecend =setInterval(()=>{
//       //   this.setState({
//       //     miliSecend: this.state.miliSecend + 1
//       //   })
//       // },100)
//     }
//   };

//   stop_Timer = () => {
//     clearInterval(Intervall);
//     this.setState({
//       isstartFlag: true
//     })
//   };


//   reset_Timer = () => {
//     this.setState({
//       hour: 0,
//       minute: 0,
//       second: 0,
//       miliSecend: 0
//     })

//   };
//   //function


//   render() {
//     return (
//       <div className='main'>
//         <Title />
//         <Thetime
//           hour={`${this.state.hour > 9 ? this.state.hour : "0" + this.state.hour}`}
//           minute={`${this.state.minute > 9 ? this.state.minute : "0" + this.state.minute}`}
//           second={`${this.state.second > 9 ? this.state.second : "0" + this.state.second}`}
//           miliSecend={`${this.state.miliSecend > 9 ? this.state.miliSecend : "0" + this.state.miliSecend}`}
//         />
//         <button className="stop" onClick={this.stop_Timer} >stop</button>
//         <button className="start" onClick={this.strat_Timer} >start</button>
//         <button className="reset" onClick={this.reset_Timer} >reset</button>
//       </div >
//     );
//   }
// }
//CLASS COMPONENT
////////////////////////////////////////////////
// HOOKS
let Intervall;
const Myapp = () => {
  const [hour, sethour] = useState(0);
  const [title, setTitle] = useState("wellcome to hooks");
  const [minute, setminute] = useState(59);
  const [second, setsecond] = useState(55);
  const [miliSecend, setmiliSsecond] = useState(0);
  const [isstartFlag, setisstartFlag] = useState(true);
  const [istThemeFlag, setIsThemeFlag] = useState(true);
  const [TimeListState, setTimeListState] = useState([
    "00:00:00:00",
    "00:00:00:01"
    
  ]);

  useEffect(() => {
    if (miliSecend == 60) {
      setmiliSsecond(0);
      setsecond(a => a + 1);
    }
    if (second == 60) {
      setsecond(0);
      setminute(a => a + 1);
    }
    if (minute == 60) {
      setminute(0);
      sethour(a => a + 1);
    }
    if (hour == 60) {
      reset_Timer();
    }

  }, [miliSecend, second, minute, hour, title]);

  const start_Timer = () => {
    if (isstartFlag) {
      Intervall = setInterval(() => {
        setmiliSsecond(a => a + 1);
        //updater function
        // updater =(a)=>a+1
      }, 10);
      setisstartFlag(false);
    }
  }

  const set_Title = () => {
    setTitle("changed btn pushed")
  }
  const stop_Timer = () => {
    clearInterval(Intervall);
    setisstartFlag(isstartFlag == false);
  }
  const reset_Timer = () => {
    setmiliSsecond(0);
    setsecond(0);
    setminute(0);
    sethour(0);
  }

  const chenge_Theme = () => {
    setIsThemeFlag(!istThemeFlag)
  }
  const catchTimer = () => {
    // const newTime = document.querySelector(".Thetime").innerText;
   let hourr = `${hour > 9 ? hour : "0" + hour}`
   let minutee = `${minute > 9 ? minute : "0" + minute}`
   let secondd = `${second > 9 ? second : "0" + second}`
   let miliSecendd = `${miliSecend > 9 ? miliSecend : "0" + miliSecend}`
   let newTime = `${hourr + ":" + minutee + ":" + secondd + ":" +miliSecendd}`
  

  setTimeListState([...TimeListState, newTime])}

//react element
return (

  <Thecontext.Provider value={{
    TimeListState, setTimeListState, color: "green",
    catchTimer: catchTimer
  }}>
    <div className='main'>
      <Title
        title={title}
      />
      <Thetime

        hour={`${hour > 9 ? hour : "0" + hour}`}
        minute={`${minute > 9 ? minute : "0" + minute}`}
        second={`${second > 9 ? second : "0" + second}`}
        miliSecend={`${miliSecend > 9 ? miliSecend : "0" + miliSecend}`}
        ThemeFlag={istThemeFlag}
      />
      <button className="stop" onClick={stop_Timer} >stop</button>
      <button className="start" onClick={start_Timer} >start</button>
      <button className="reset" onClick={reset_Timer} >reset</button>
      <button className="reset" onClick={set_Title} >change title</button>
      <button className="reset" onClick={chenge_Theme} >change Theme</button>
      <Timelist>{TimeListState}</Timelist>
    </div >
  </Thecontext.Provider>
)
}
// HOOKS
export default Myapp;
