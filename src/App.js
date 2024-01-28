import './App.css';
import State from './components/State'
import Transition from './components/Transition'
//https://github.com/Eliav2/react-xarrows/blob/master/README.md#path
function App() {

  const states = []
  for (let i = 0; i < 5; i++){
    const stateId = `q${i}`
    states.push(<State key={i} id={stateId} accepting={true}/>)
  }
  return (
    <div className='Automat'>
      {states}
      <Transition fromState={"q1"} toState={"q4"}/>

    </div>
  );
}

export default App;
