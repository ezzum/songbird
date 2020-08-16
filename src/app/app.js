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
        optionsScore: [
            {score: 0},
            {score: 0},
            {score: 0},
            {score: 0},
            {score: 0},
            {score: 0},
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
        const {birdId, levelWin, optionsScore, score} = this.state;

        this.setState({
            currentId: id
        })
        if (birdId === id && !levelWin) {
            this.setState(() => {
                const newScore = score + 5;
                const newScoreVisible = newScore;
                const idx = id - 1;
                const newStateItem = {state: 5};
                const newArray = [
                    ...optionsScore.slice(0, idx),
                    newStateItem,
                    ...optionsScore.slice(idx + 1)
                ];
                return {
                    optionsScore: newArray,
                    levelWin: true,
                    score: newScore,
                    scoreVisible: newScoreVisible
                }
            })
        }
        if (birdId !== id && !levelWin) {
            this.setState(() => {
                const newScore = score - 1;
                const idx = id - 1;
                const newStateItem = {state: -1};
                const newArray = [
                    ...optionsScore.slice(0, idx),
                    newStateItem,
                    ...optionsScore.slice(idx + 1)
                ];
                return {
                    optionsScore: newArray,
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
                    optionsScore: [
                        {score: 0},
                        {score: 0},
                        {score: 0},
                        {score: 0},
                        {score: 0},
                        {score: 0},
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
                        optionsScore = {this.state.optionsScore}
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