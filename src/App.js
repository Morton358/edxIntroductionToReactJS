import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {value1: Math.floor((Math.random() * 10) + 1),
       value2: Math.floor((Math.random() * 10) + 1), answer: 8}
    // this.clickHandler = this.clickHandler.bind(this)
    var newAnswer = this.state.value1 * this.state.value2
    this.setState({answer : newAnswer})
  }
  render() {
    return(
      <div className="App">
        <QuestionWithAnswers value1={this.state.value1}
          value2={this.state.value2} answer={this.state.answer}/>
        <Ranking />
      </div>

    );
  }
}

function QuestionWithAnswers(props) {
  return(                                                                                                                         
    <div className="QuestionWithAnswers">
      <Question value1={props.value1} value2={props.value2}/>
      <div className="Buttons">
        <Button answer={props.answer}></Button>
        <Button answer={props.answer}></Button>
        <Button answer={props.answer}></Button>
        <Button answer={props.answer}></Button>
      </div>

    </div>
  );
}

function Question(props){
  return(
    <div className="Question">
      <h2> What is {props.value1} x {props.value2} </h2>
    </div>

  );
}


function Button(props){
  return(
    <button className="Button">{props.answer}</button>
  );
}

function Ranking(props) {
  return(
    <div className="Ranking">
      <CountCorrect/>
      <CountIncorrect/>
    </div>
  );
}

function CountCorrect(props){
  return(
    <div className="CountCorrect">
      <h3> Correct: 0 </h3>
    </div>

  );
}

function CountIncorrect(props){
  return(
    <div className="CountIncorrect">
      <h3> Incorrect: 0 </h3>
    </div>
  );
}



export default App;
