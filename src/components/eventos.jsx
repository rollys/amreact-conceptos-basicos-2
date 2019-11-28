import React, { Component } from "react";

class Eventos extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0
    };
    // this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  /*
  handleMouseMove(e) {
    //console.log(e)
    this.setState({
        x: e.clientX,
        y: e.clientY,
    })
  }
  */

 handleMouseMove = (e) =>{
    //console.log(e)
    this.setState({
        x: e.clientX,
        y: e.clientY,
    })
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            alert("Click");
          }}
        >
          Eventos
        </button>
        <div
          onMouseMove={this.handleMouseMove}
          style={{
            width: 400,
            border: "1px solid red",
            textAlign: "center",
            padding: 10
          }}
        >
          {this.state.x}: {this.state.y}
        </div>
      </>
    );
  }
}

export default Eventos;
