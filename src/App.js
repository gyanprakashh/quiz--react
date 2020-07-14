import './App.css';
import React, { Component } from 'react'
import Instruction from './components/Instruction'
import QuizHeader from './components/QuizHeader'
import QuizBody from './components/QuizBody'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       start:false
    }
  }
  start=()=>{
    this.setState({
      start:true
    })
  }
  
  render() {
    if(!this.state.start){
      return <Instruction start={this.start} />
    }else{
      return(
        <>
        <QuizHeader />
        <QuizBody />
        </>
      )

    }
   
  }
}

export default App

