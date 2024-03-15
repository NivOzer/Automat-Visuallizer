export default function LoopWithLabel(props) {
  return (
    <div className="loopContainer">
      <h1 className="transitionLabel">{props.input}</h1>
      <div className="loopCircle"></div>
    </div>
  );
}
