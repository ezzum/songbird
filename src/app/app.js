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
        activeLevel: 0
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
        this.setState({
            currentId: id
        })
        if (this.state.birdId === id && !this.state.levelWin) {
            this.setState({
                levelWin: true
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
                    activeLevel: nextLevel
                }
            });
            document.querySelectorAll('.li-btn').forEach((el) => {
                el.classList.remove('win-item');
                el.classList.remove('error-item');
            })
        }
    }

    render() {
        return(
            <div className='app'>
                <Header 
                    items = {this.itemPagination}
                    activeId = {this.itemPagination[this.state.activeLevel].id}
                />
                <Question 
                    data = {this.itemPagination[this.state.activeLevel]}
                    levelWin = {this.state.levelWin}
                    randomIdx = {this.state.birdId}
                />
                <div className='bottom-block'>
                    <OptionsBlock data = {this.itemPagination[this.state.activeLevel]}
                        getIdClick = {(id) => this.checkIds(id)}
                        birdId = {this.state.birdId}
                        levelWin = {this.state.levelWin}
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