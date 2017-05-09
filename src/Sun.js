import React, { Component } from 'react';

let rColor = 230;
let gColor = 250;
let bColor = 250;

class Sun extends Component {

  constructor(props) {
    super(props);
    this.state = {left:0,
                  top:0,
                  movementX: 0,
                  movementY: 0,
                  incrementX: 4,
                  incrementY: 1,
                  skyColor: 'rgb(' + rColor + ',' + gColor + ',' + bColor + ')'
                };
  }
  componentDidMount() {
    this.timerID = setInterval( () => this.move(), 100);
  }
  move() {
    rColor -= 3;
    gColor -= 2;
    bColor -= 1;

    this.setState({movementX:this.state.movementX+this.state.incrementX,
                   movementY:this.state.movementY+this.state.incrementY,
                   skyColor: 'rgb(' + rColor + ',' + gColor + ',' + bColor + ')'
                 });

    if (this.state.movementX >= 700) {
      rColor = (Math.floor(Math.random() * 256));
      gColor = (Math.floor(Math.random() * 256));
      bColor = (Math.floor(Math.random() * 156 + 100));

      this.setState({movementX: 0,
                     movementY: 0,
                     skyColor: 'rgb(' + rColor + ',' + gColor + ',' + bColor + ')'
                    });
    }
  }
  render() {

    let skyStyle = {
      backgroundColor: this.state.skyColor,
      width: 800,
      height: 475,
      position: 'absolute',
      marginTop: 20
    }
    let sunStyle = {
      backgroundColor: 'yellow',
      width: 100,
      height: 100,
      position: 'relative',
      marginTop: 25,
      borderRadius: 100,
      left: this.state.movementX + "px",
      top: this.state.movementY + "px"
    }
    let waterStyle = {
      backgroundColor: 'rgb(51, 204, 204)',
      position: 'absolute',
      top: 300,
      height: 175,
      width: 800
    }
    return (
      <div style={skyStyle}>
        <div style={sunStyle}></div>
        <div style={waterStyle}></div>
      </div>
    );
  }
}




export default Sun;
