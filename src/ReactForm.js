import React, { Component } from 'react';

class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '____',
      submitted: false,
      weather: '____'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   const target = event.target;

   if (target.name === 'cityName') {
     let value = target.value;
     this.setState({
       cityName: value
     });
   } else if (target.name === 'weather') {
     let weatherValue = target.value;
     this.setState({
       weather: weatherValue
     });
   }
  }

  handleSubmit(event) {
    this.setState({submitted: true});
    event.preventDefault();
  }

  render() {
    let textAreaStyle = {
      padding: 0,
      border: 2 + "blue",
      width: 788,
      height: 40,
      fontSize: 20,
      paddingTop: 15,
      paddingLeft: 10,
      border: 'none'
    }
    let submitButtonStyle = {
      width: 100,
      height: 40,
      backgroundColor: "grey",
      fontSize: 20,
      marginTop: 10,
      borderRadius: 5
    }
    let formStyle = {
      marginLeft: 0
    }
    let selectStyle = {
      height: 40,
      width: 130,
      fontSize: 20,
      marginBottom: 10
    }
    let alertStyle = {
      color: 'red',
      backgroundColor: 'yellow'
    }

      return (
        <div>
          <h1 style={alertStyle}>ALERT: In {this.state.cityName} it's currently {this.state.weather}!</h1>

          <form style={formStyle} onSubmit={this.handleSubmit}>
            <label>
              <h2>Type in your city and alert others of the current weather...</h2>
              <textarea style={textAreaStyle} type="textArea" name="cityName" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br></br>
            <label>
              <h2>Current weather?</h2>
            </label>
            <select style={selectStyle} name="weather" value={this.state.value} onChange={this.handleChange}>
              <option value="variable">Variable</option>
              <option value="raining">Raining</option>
              <option value="snowing">Snowing</option>
              <option value="sunny">Sunny</option>
              <option value="cloudy">Cloudy</option>
              <option value="hot">Hot</option>
              <option value="cold">Cold</option>
            </select>
            <br></br>

          </form>
        </div>
      );


  }
}

export default ReactForm;
