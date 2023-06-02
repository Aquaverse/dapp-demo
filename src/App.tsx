import React from "react";

import Draggable from 'react-draggable'

class App extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: 100, y: 200
    }
  };

  

  handleDrag = (e: any, ui: { deltaX: number; deltaY: number; }) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };
  onDrop = (e: { target: { classList: { contains: (arg0: string) => any; remove: (arg0: string) => void; }; }; }) => {
    this.setState({activeDrags: --this.state.activeDrags});
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove('hovered');
    }
  };
  onDropAreaMouseEnter = (e: { target: { classList: { add: (arg0: string) => void; }; }; }) => {
    if (this.state.activeDrags) {
      e.target.classList.add('hovered');
    }
  }
  onDropAreaMouseLeave = (e: { target: { classList: { remove: (arg0: string) => void; }; }; }) => {
    e.target.classList.remove('hovered');
  }

  // For controlled component
  adjustXPos = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e: any, position: { x: any; y: any; }) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e: any, position: { x: any; y: any; }) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    return (
      <div>
        <h1>React Draggable</h1>
      
        <Draggable position={controlledPosition} {...dragHandlers} onStop={this.onControlledDragStop}>
          <div className="box">
            {/* My position can be changed programmatically. <br />
            I have a dragStop handler to sync state.
            <div>
              <a href="#" onClick={this.adjustXPos}>Adjust x ({controlledPosition.x})</a>
            </div>
            <div>
              <a href="#" onClick={this.adjustYPos}>Adjust y ({controlledPosition.y})</a>
            </div> */}
          </div>
        </Draggable>

      </div>
    );
  }
}

class RemWrapper extends React.Component {
  // PropTypes is not available in this environment, but here they are.
  // static propTypes = {
  //   style: PropTypes.shape({
  //     transform: PropTypes.string.isRequired
  //   }),
  //   children: PropTypes.node.isRequired,
  //   remBaseline: PropTypes.number,
  // }

  translateTransformToRem(transform: string, remBaseline = 16) {
    const convertedValues = transform.replace('translate(', '').replace(')', '')
      .split(',')
      .map(px => px.replace('px', ''))
      .map(px => parseInt(px, 10) / remBaseline)
      .map(x => `${x}rem`)
    const [x, y] = convertedValues

    return `translate(${x}, ${y})`
  }

  render() {
    return <div>11</div>
  }
}

export default App;