export default function LoopWithLabel(props) {
  return (
    <div className="loopContainer">
      <div className="loopCircle"></div>
      <h1 className="transitionLabel">{props.input}</h1>
    </div>
  );
}
