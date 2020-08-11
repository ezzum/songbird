import React, {Component} from 'react';
import birdData from '../data/birdsData';
import Header from '../header/header';
import Question from '../question/question';
import OptionsBlock from '../options/options-block';
import './app.css';

class App extends Component {

    state = {
        itemPagination: [
            {label: 'Разминка', data: birdData[0], active: true, id: 1},
            {label: 'Воробьиные', data: birdData[1], active: false, id: 2},
            {label: 'Лесные птицы', data: birdData[2], active: false, id: 3},
            {label: 'Певчие птицы', data: birdData[3], active: false, id: 4},
            {label: 'Хищные птицы', data: birdData[4], active: false, id: 5},
            {label: 'Морские птицы', data: birdData[5], active: false, id: 6},
        ],
        birdId: Math.floor(Math.random() * 6) + 1,
        levelWin: false
    }

    activeLevel = this.state.itemPagination.filter((elem) => elem.active);

    checkIds = (id) => {
        if (this.state.birdId === id) {
            this.setState({
                levelWin: true
            })
        }
    }

    render() {
        return(
            <div className='app'>
                <Header items = {this.state.itemPagination}/>
                <Question data = {this.activeLevel}
                levelWin = {this.state.levelWin}
                randomIdx = {this.state.birdId}/>
                <div className='bottom-block'>
                    <OptionsBlock data = {this.activeLevel}
                    getIdClick = {(id) => this.checkIds(id)}/>
                </div>
                {console.log(this.state)}
            </div>
        );
    }
    
}

export default App;