import React, {Component} from 'react';
import birdData from '../data/birdsData';
import Header from '../header/header';
import Question from '../question/question';
import OptionsBlock from '../options/options-block';
import Description from '../descriptions/description';
import NextLevelButton from '../nextLevelButton/nextLevelButton';
import './app.css';

class App extends Component {

    state = {
        birdId: Math.floor(Math.random() * 6) + 1,
        levelWin: false,
        currentId: 0,
        activeLevel: 0,
        score: 0,
        scoreVisible: 0,
        optionsState: [
            {correct: 0},
            {correct: 0},
            {correct: 0},
            {correct: 0},
            {correct: 0},
            {correct: 0},
        ]
    }

    itemPagination = [
        {label: 'Разминка', data: birdData[0], id: 1},
        {label: 'Воробьиные', data: birdData[1], id: 2},
        {label: 'Лесные птицы', data: birdData[2], id: 3},
        {label: 'Певчие птицы', data: birdData[3], id: 4},
        {label: 'Хищные птицы', data: birdData[4], id: 5},
        {label: 'Морские птицы', data: birdData[5], id: 6},
    ];

    checkIds = (id) => {
        const {birdId, levelWin, optionsState, score} = this.state;

        this.setState({
            currentId: id
        })
        if (birdId === id && !levelWin) {
            this.setState(() => {
                const newScore = score + 5;
                const idx = id - 1;
                const newStateItem = {correct: true};
                const newArray = [
                    ...optionsState.slice(0, idx),
                    newStateItem,
                    ...optionsState.slice(idx + 1)
                ];
                return {
                    optionsState: newArray,
                    levelWin: true,
                    score: newScore,
                    scoreVisible: newScore
                }
            })
        }
        if (birdId !== id && !levelWin) {
            this.setState(() => {
                const newScore = score - 1;
                const idx = id - 1;
                const newStateItem = {correct: false};
                const newArray = [
                    ...optionsState.slice(0, idx),
                    newStateItem,
                    ...optionsState.slice(idx + 1)
                ];
                return {
                    optionsState: newArray,
                    score: newScore
                }
            })
        }
    }

    nextLevel = () => {
        if (this.state.levelWin) {
            this.setState(({activeLevel}) => {
                const nextLevel = activeLevel + 1;

                return {
                    birdId: Math.floor(Math.random() * 6) + 1,
                    levelWin: false,
                    currentId: 0,
                    activeLevel: nextLevel,
                    optionsState: [
                        {correct: 0},
                        {correct: 0},
                        {correct: 0},
                        {correct: 0},
                        {correct: 0},
                        {correct: 0},
                    ]
                }
            });
        }
    }

    render() {
        return(
            <div className='app'>
                <Header 
                    items = {this.itemPagination}
                    activeId = {this.itemPagination[this.state.activeLevel].id}
                    scoreVisible = {this.state.scoreVisible}
                />
                <Question 
                    data = {this.itemPagination[this.state.activeLevel]}
                    levelWin = {this.state.levelWin}
                    randomIdx = {this.state.birdId}
                />
                <div className='bottom-block'>
                    <OptionsBlock 
                        data = {this.itemPagination[this.state.activeLevel]}
                        getIdClick = {(id) => this.checkIds(id)}
                        birdId = {this.state.birdId}
                        levelWin = {this.state.levelWin}
                        optionsState = {this.state.optionsState}
                    />
                    <Description
                        currentId = {this.state.currentId}
                        activeLevel = {this.itemPagination[this.state.activeLevel]}
                    />
                </div>
                <NextLevelButton
                    levelWin = {this.state.levelWin}
                    nextLevel = {this.nextLevel}
                />
                {console.log(this.state)}
            </div>
        );
    }
    
}

export default App;