import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      mycar: '',
      errormessage: ''
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Your selected car brand is " + this.state.mycar);
    
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }

    console.log(nam);
    console.log(val);

    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}

      <p>Select a car brand for you:</p>

      <select value={this.state.mycar} name='mycar' onChange={this.myChangeHandler}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>

      <p />

      <input type="submit" />

      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));