import './App.css';
import State from './components/State'
import Transition from './components/Transition'

function App() {
/*
Automat = (Σ,Q,q0,F,δ)
Σ - The Automat Alphabet
Q - A finite list of states
q0 - first state of the automat
F - A list of the automat accepting states
δ - Transitions Function δ:Σ X Q -> Q
*/
  // const states = []
  // for (let i = 0; i < 5; i++){
  //   const stateId = `q${i}`
  //   states.push(<State key={i} id={stateId} accepting={true}/>)
  // }
  return (
    <div className='Automat'>
      <div id="startingpoint"></div>
      <Transition fromState={"startingpoint"} toState={"q0"}/>
      <State key={0} id={"q0"} accepting={false}/>
      <Transition fromState={"q0"} toState={"q1"}/>
      <State key={1} id={"q1"} accepting={true}/>
    </div>
  );
}

export default App;
