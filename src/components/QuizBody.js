import React, { Component } from 'react'
import Data from './Data'
import QuestionCard from './QuestionCard'
import Timer from './Timer'

export class QuizBody extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Data:Data(),
            currentQuestionId:0,
            score:0,
            resetTimer:true
             
        }
    }
    reset=()=>{
        this.setState({
            score:0,
            currentQuestionId:0
        })
    }
    selectedAnswer=(e,id)=>{
        let score=this.state.score;
        let {answer}=this.state.Data[id];
        if(e.target.textContenet===answer){
            score+=3;
            this.setState({
                score:score
            })
        }else{
            this.setState({
                score:score-1
            })
        }
        this.updateQuestion();
    }
    updateQuestion=()=>{
        let id=this.state.currentQuestionId;
        id++;
        this.setState({
            currentQuestionId:id
        })
    }
    render() {
        if(this.state.currentQuestionId<=this.state.Data.length-1){
            return(
                <>
                <div className="scoreTimerWrapper">
						<span className="score">SCORE: {this.state.score}</span>
						<Timer
							resetTimer={this.state.resetTimer}
							updateQuestion={this.updateQuestion}></Timer>
					</div>
                <QuestionCard
							content={this.state.Data[this.state.currentQuestionId]}
							selectedAnswer={this.selectedAnswer}></QuestionCard>

                </>
            )
        }else{
            return (
				<div className="endPopup">
					<p className="popup-score">Score: {this.state.score}</p>
					<button onClick={this.reset} className="reset-button">
						RESET
					</button>
				</div>
			);
        }
    }
}

export default QuizBody
