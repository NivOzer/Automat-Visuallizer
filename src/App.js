import './App.css';
import State from './components/State'
import Transition from './components/Transition'
function App() {

  const states = []
  for (let i = 0; i < 5; i++){
    const stateId = `q${i}`
    states.push(<State key={i} id={stateId} index={i}/>)
  }
  return (
    <div className='Automat'>
      {states}
      <Transition/>

    </div>
  );
}

export default App;
